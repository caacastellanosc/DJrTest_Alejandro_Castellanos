import { Component, OnInit } from '@angular/core';
import { TareasService } from './services/tareas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {

  tareas: any;
  nombre: string ;
  estado: string ;
  etiqueta: string ;

  constructor(private crudService: TareasService) { }

  ngOnInit() {
    this.crudService.read_Tarea().subscribe(data => {

      this.tareas = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          nombre: e.payload.doc.data()['nombre'],
          estado: e.payload.doc.data()['estado'],
          etiqueta: e.payload.doc.data()['etiqueta'],
        };
      })
      console.log(this.tareas);

    });
  }

  CreateRecord() {
    console.log('entro');
    let record = {};
    console.log(this.nombre);
    record['nombre'] = this.nombre;
    record['estado'] = this.estado;
    record['etiqueta'] = this.etiqueta;
    this.crudService.create_Tarea(record).then(resp => {
      this.nombre = "";
      this.estado = "";
      this.etiqueta = "";
      console.log(resp);
    })
      .catch(error => {
        console.log(error);
      });
  }

  RemoveRecord(rowID) {
    this.crudService.delete_Tarea(rowID);
  }

  EditRecord(record) {
    record.isEdit = true;
    record.Editnombre = record.nombre;
    record.Editestado = record.estado;
    record.Editetiqueta = record.etiqueta;
  }

  UpdateRecord(recordRow) {
    console.log('entro');
    let record = {};
    record['nombre'] = recordRow.Editnombre;
    record['estado'] = recordRow.Editestado;
    record['etiqueta'] = recordRow.Editetiqueta;
    this.crudService.update_Tarea(recordRow.id, record);
    recordRow.isEdit = false;
  }

}