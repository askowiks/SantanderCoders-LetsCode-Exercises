class Calculadora {
    constructor(operador) {
        this.historico =new Map();
        this.operador = operador;
        this.atual = [];
    }

    equals(){}

    enter(char) {this.atual.push(char)}

    reset() {this.historico =new Map()}

    list() {return this.historico}

    registro(operacao, valor) {this.historico.set(operacao, valor)}

}

class CalculadoraSoma extends Calculadora{
    constructor() {
        super(' + ')
    }
    
    equals() {
        let soma = this.atual.reduce((somaAtual, atual) => somaAtual + atual);
    
        super.registro(this.atual.join(this.operador), soma);
        return soma;
    }
}

class CalculadoraSubt extends Calculadora{
    constructor() {
        super(' - ')
    }
    equals() {
        const subt = this.atual.reduce((subtAtual, atual) => subtAtual - atual);
    
        super.registro(this.atual.join(this.operador), subt);
        super.equals();
        return multip;
    }
}

class CalculadoraMultip extends Calculadora{
    constructor() {
        super(' * ')
    }
    equals() {
        const multip = this.atual.reduce((multipAtual, atual) => multipAtual * atual);
    
        super.registro(this.atual.join(this.operador), multip);
        super.equals();
        return multip;
    }
}

class CalculadoraDivi extends Calculadora{
    constructor() {
        super(' / ')
    }
    equals() {
        const divi = this.atual.reduce((diviAtual, atual) => diviAtual - atual);
    
        super.registro(this.atual.join(this.operador), divi);
        super.equals();
        return divi;
    }
}

// let calcTeste = new CalculadoraSoma();

// let calcTeste = new CalculadoraSubt();

// let calcTeste = new CalculadoraMultip();

// let calcTeste = new CalculadoraDivi();

// calcTeste.enter(5);
// calcTeste.enter(5);
// console.log(calcTeste.equals());
// console.log(calcTeste.list());