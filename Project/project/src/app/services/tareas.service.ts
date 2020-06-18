import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore'; 


@Injectable({
  providedIn: 'root'
})
export class TareasService {

  constructor(private firestore: AngularFirestore) {

   }

   create_Tarea(record) {
    return this.firestore.collection('tareas').add(record);
  }

  read_Tarea() {
    return this.firestore.collection('tareas').snapshotChanges();
  }

  update_Tarea( recordID, record){
    this.firestore.doc('tareas/' + recordID).update(record);
  }

  delete_Tarea( record_id ) {
    this.firestore.doc('tareas/' + record_id).delete();
  }
}
