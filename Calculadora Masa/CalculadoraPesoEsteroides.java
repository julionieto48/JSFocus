import java.util.Scanner;





class Main{

    public static void procesarComando() {
        Scanner in = new Scanner(System.in); 
        String comando = in.nextLine();
        String subStringEnteros, subStringUnidades;
    
        for(int i = 0 ; i <= comando.length() ; i++ ){
            System.out.println(i);

        }

        in.close();
    }

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in); 
        


        System.out.println("******--------------- CALCULADORA MASA-------------******");
        System.out.println(" ¿En que unidad de medida de masa desea recivir sus resultados? ");
        System.out.println(" a.) gramos  b.)kilo gramos  c.) libras");
        char opcionMasa= input.nextLine().charAt(0); 
        
        System.out.println(" Ingrese el valor y la unidad de medida a convertir");
        System.out.println(" separar con elcaracter & ejemplo: 30&kg  150&libras 12&gramos");
        

        procesarComando();
        
       
        input.close();
      }

      
    
}