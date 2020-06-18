/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package problems;

import static problems.Problems.capitalizar;

/**
 *
 * @author Alejandro
 */
public class Problems {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        
        String respuesta = capitalizar("datos");
        System.out.println(respuesta);
        
    }
    
    
    
    static  String capitalizar(String  palabra)
    {
        String palabraf = Character.toUpperCase(palabra.charAt(0)) + palabra.substring(1,palabra.length());
        return  palabraf;
    }


    
}

