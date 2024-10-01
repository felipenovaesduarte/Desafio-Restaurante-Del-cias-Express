/// Importando a biblioteca readline-sync
const readline = require('readline-sync');

// Capturando o número de pessoas na mesa
const numeroPessoas = readline.questionInt('Digite o número de pessoas na mesa: ');

// Capturando o valor total da conta
const valorTotal = readline.questionFloat('Digite o valor total da conta: ');

// Capturando o método de pagamento
const metodoPagamento = readline.question('Qual é o método de pagamento (PIX, dinheiro ou cartão)? ');

// Lógica para aplicar o desconto
let desconto = 0;
if (metodoPagamento.toLowerCase() === 'pix' || metodoPagamento.toLowerCase() === 'dinheiro') {
    desconto = valorTotal * 0.1; // 10% de desconto
}

const valorComDesconto = valorTotal - desconto;
const valorPorPessoa = valorComDesconto / numeroPessoas;

// Exibindo os resultados
console.log(`Valor total da conta: R$ ${valorTotal.toFixed(2)}`);
console.log(`Desconto aplicado: R$ ${desconto.toFixed(2)}`);
console.log(`Valor total com desconto: R$ ${valorComDesconto.toFixed(2)}`);
console.log(`Valor por pessoa: R$ ${valorPorPessoa.toFixed(2)}`);
