import java.util.Random;
import javax.swing.JOptionPane;

public class Main {
    public static void main(String args[])
    {
        int g=0;
        int i;
        int x;
        int jogadores = Integer.parseInt(JOptionPane.showInputDialog("Digite o numero de jogadores: "));
        if (jogadores>12 || jogadores<0)
          JOptionPane.showMessageDialog(null,"Maximo de jogadores são 12","ERRO",JOptionPane.ERROR_MESSAGE);
        else{
        int[] meuArray = new int[jogadores];
        for (i = 0; i < jogadores; i++) {
          int apostas = Integer.parseInt(JOptionPane.showInputDialog("Digite sua aposta: "));
          if (apostas>12){
            JOptionPane.showMessageDialog(null,"Aposta invalida","ERRO",JOptionPane.ERROR_MESSAGE);
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
        }
        JOptionPane.showMessageDialog(null,"Número sorteado: "+total,"INFO",JOptionPane.INFORMATION_MESSAGE);

        for ( i = 0; i < meuArray.length; i++) {
          if(total==(meuArray[i])) {
            JOptionPane.showMessageDialog(null,"O jogador que apostou no número "+meuArray[i] + " ganhou","INFO",JOptionPane.INFORMATION_MESSAGE);
            g = 1;
          } 
        }
        if(g != 1) {
          JOptionPane.showMessageDialog(null,"A maquina ganhou","INFO",JOptionPane.INFORMATION_MESSAGE);
        }
        }
    }
}