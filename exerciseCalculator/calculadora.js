const calculator = (() => {
    let calculadora = {};
    let numero1 = 0;
    let numero2 = 0;

    calculadora.acumulador = "";
   
    calculadora.historico = new Map();

    const fatiarAcumuladorEConverterParaFloat = (posicaoOperador) => {
        numero1 = parseFloat(calculadora.acumulador.substring(0, posicaoOperador));
        numero2 = parseFloat(calculadora.acumulador.substring(
                    posicaoOperador + 1, 
                    calculadora.acumulador.length
            ));
    }
    
    const armazenarHistorico = (resultado) => {
        calculadora.historico.set(calculadora.acumulador, resultado);
        calculadora.acumulador = "";
    }

    calculadora.enter = (tecla) => calculadora.acumulador += "" + tecla;

    calculadora.equals = () => {
        if (calculadora.acumulador.search(/\+/) !== -1) {
            const posicaoOperador = calculadora.acumulador.search(/\+/);
            fatiarAcumuladorEConverterParaFloat(posicaoOperador);
            const resultado = numero1 + numero2; 
            armazenarHistorico(resultado);
            return resultado;
        }

        if (calculadora.acumulador.search(/\-/) !== -1) {
            const posicaoOperador = calculadora.acumulador.search(/\-/);
            fatiarAcumuladorEConverterParaFloat(posicaoOperador);
            const resultado = numero1 - numero2;
            armazenarHistorico(resultado);
            return resultado;
        }
        
        if (calculadora.acumulador.search(/\*/) !== -1) {
            const posicaoOperador = calculadora.acumulador.search(/\*/);
            fatiarAcumuladorEConverterParaFloat(posicaoOperador);   
            const resultado = numero1 * numero2;
            armazenarHistorico(resultado);
            return resultado;
        }
        
        if (calculadora.acumulador.search(/\//) !== -1) {
            const posicaoOperador = calculadora.acumulador.search(/\//);
            fatiarAcumuladorEConverterParaFloat(posicaoOperador);           
            const resultado = numero1 / numero2;
            armazenarHistorico(resultado);
            return resultado;
        }
        
        return 0;
    }

    calculadora.list = () => calculadora.historico;

    calculadora.reset = () => calculadora.historico = new Map();

    return calculadora;
})()

calculator.enter(2);
calculator.enter('+');
calculator.enter(3);
console.log(calculator.equals());

calculator.enter(2);
calculator.enter('-');
calculator.enter(3);
console.log(calculator.equals());

calculator.enter(2);
calculator.enter('*');
calculator.enter(3);
console.log(calculator.equals());

calculator.enter(2);
calculator.enter('/');
calculator.enter(3);
console.log(calculator.equals());

console.log(calculator.list());

calculator.reset();
console.log(calculator.list());

