class Riqueza {
    constructor(rico = true) { // Construtor
        this._rico = rico; // Atributo de instância
    }

    get rico() { // Método de instância
        return this._rico;
    }

    set rico(value) { // Método de instância
        this._rico = value;
    }
}

class Carro {
    static _numObj = 0; // Contador de objetos

    constructor(portas = 4) { // Construtor
        this.portas = portas; // Atributo de instância
        Carro._numObj++; // Incrementa o número de objetos
    }

    static getNumObj() { // Método estático para retornar o número de objetos
        return Carro._numObj;
    }

    mostrar(texto) {
        console.log(`Portas do ${texto} = ${this.portas}`); // Uso correto da interpolação
    }

    veloMax() {
        return 180; // Velocidade máxima padrão
    }

    get portas() {
        return this._portas;
    }

    set portas(value) {
        this._portas = value >= 0 ? value : 4; // Valor padrão se portas for negativo
    }
}

class Ferrari extends Carro {
    constructor(portas = 2, rico = true) {
        super(portas); // Chama o construtor da classe pai
        this._rico = rico; // Atributo de Riqueza
    }

    veloMax() {
        return 300; // Velocidade máxima para Ferrari
    }

    get rico() {
        return this._rico; // Método de instância
    }

    set rico(value) {
        this._rico = value; // Método de instância
    }
}

// Exemplo de uso
console.log('Número de objetos da classe Carro:', Carro.getNumObj());

const carroTeste = new Carro(1);
carroTeste.mostrar('carro teste'); // Portas do carro teste = 1

const meuCarro = new Carro();
meuCarro.mostrar('meu carro'); // Portas do meu carro = 4
console.log('Velocidade máxima do meu carro:', meuCarro.veloMax()); // Velocidade máxima do meu carro: 180

const seuCarro = new Carro();
seuCarro.portas = 3; // Define o número de portas
seuCarro.mostrar('seu carro'); // Portas do seu carro = 3
console.log('Portas do seu carro:', seuCarro.portas); // Portas do seu carro: 3

const carroCoordenador = new Ferrari();
carroCoordenador.mostrar('carro do coordenador'); // Portas do carro do coordenador = 2
console.log('Velocidade máxima de uma Ferrari:', carroCoordenador.veloMax()); // Velocidade máxima de uma Ferrari: 300
console.log('Portas de uma Ferrari:', carroCoordenador.portas); // Portas de uma Ferrari: 2

const ferrariTeste = new Ferrari(2, false);
console.log('O dono da Ferrari teste é rico?', ferrariTeste.rico); // O dono da Ferrari teste é rico? false
console.log('Número de objetos da classe Carro:', Carro.getNumObj()); // Número de objetos da classe Carro