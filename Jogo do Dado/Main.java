import java.util.Scanner;
import java.util.Random;

public class Main {
    public static void main(String args[])
    {
        System.out.print("Digite o numero de jogadores: ");
        int g=0;
        int i;
        int x;
        Scanner input = new Scanner(System.in);
        int jogadores = input.nextInt();
        if (jogadores>12 || jogadores<0)
          System.out.print("Maximo de jogadores são 12");
        else{
        int[] meuArray = new int[jogadores];
        for (i = 0; i < jogadores; i++) {
          System.out.print("Digite sua aposta: ");
          int apostas = input.nextInt();
          if (apostas>12){
            System.out.print("Aposta invalida");
          }
          meuArray[i] = apostas;
        }
      
        int dado = 2;
        Random numero = new Random();
        int total = 0;
        int randomNumber = 0;
      
        for (i = 0; i < dado; i++) {
            randomNumber = numero.nextInt(6) + 1;
            total = total + randomNumber;
            System.out.print(randomNumber);
            System.out.print(" ");
        }
        System.out.println("");
        System.out.println("Total: " + total);

        for ( i = 0; i < meuArray.length; i++) {
          if(total==(meuArray[i])) {
            System.out.println("\nO jogador que apostou no número "+ meuArray[i] + " Ganhou\n");
            g = 1;
          } 
        }
        if(g != 1) {
            System.out.println("\nA maquina ganhou");
        }
        }
    }
}