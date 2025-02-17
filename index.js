//Exercicios:

//Exercício 1: Arrow Function com um parâmetro

const dobro = (x) => x*2; 
console.log(dobro(6));

//Exercício 2: Arrow Function com múltiplos parâmetros

const dividir = (a, b) => a / b;
console.log(dividir(16, 4)); 

//Exercício 3: Arrow Function com múltiplas linhas

const mensagemBoasVindas = (nome) => {
    return `Seja bem-vindo, ${nome}!`;
};
console.log(mensagemBoasVindas("Gabriel")); 

//Exercício 4: Higher-Order Function personalizada

const executarOperacao = (a, b, operacao) => operacao(a, b);
console.log(executarOperacao(15, 5, (x, y) => x / y)); 
console.log(executarOperacao(10, 4, (x, y) => x * y)); 

//Exercício 5: map() – Transformação de um array

const precos = [100, 200, 300, 400];
const precosComDesconto = precos.map(num => num - (num / 10)  );
console.log(precosComDesconto); 

//Exercício 6: filter() – Filtrando valores em um array

const idades = [12, 25, 17, 30, 14, 19];
const menoresDeIdade = idades.filter(idade => idade <= 18);
console.log(menoresDeIdade); 

//Exercício 7: reduce() – Somando valores de um array

const numeros = [2, 3, 4, 5];
const produto = numeros.reduce((total, num) => num * total);
console.log(produto); 

