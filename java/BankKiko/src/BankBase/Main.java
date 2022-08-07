package BankBase;

public class Main {

    public static void main(String[] args) {
        Cliente kiko = new Cliente();
        kiko.setNome("Kiko");
        Cliente esther = new Cliente();
        esther.setNome("Esther");

        Conta cc = new ContaCorrente(kiko);
        Conta cp = new ContaPoupanca(esther);

        cc.depositar(100);
        cc.transferir(50, cp);

        cc.imprimirExtrato();
        cp.imprimirExtrato();

    }
}
