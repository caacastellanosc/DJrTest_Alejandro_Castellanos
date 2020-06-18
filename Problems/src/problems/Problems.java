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
        String validar = validar("hhhhooooollllllaaaaaa");
        String capitalizar = capitalizar("datos");
        String transformar = transformar("AnaLITica");
        System.out.println(capitalizar);
        System.out.println(validar);
        System.out.println(transformar);
        
    }
    
    
    
    static  String capitalizar(String  palabra)
    {
        String palabraf = Character.toUpperCase(palabra.charAt(0)) + palabra.substring(1,palabra.length());
        return  palabraf;
    }
    
    static String validar(String s)
    {
           StringBuffer sb = new StringBuffer(s);        
           for (int i = sb.length() - 2; i >= 0; i--)
               if (sb.charAt(i) == sb.charAt(i + 1))
                    sb.deleteCharAt(i + 1);
           String palabra;
           palabra = (sb.toString().equals("hola"))?"Verdadero":"Falso";
           return palabra;
    }
    
    static String transformar(String s)
    {
           
           return s.replaceAll("[aeiouAEIOU]", ".").toLowerCase();
    }
}

