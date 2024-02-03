/**
 *  *** EXERCÍCIOS ***
 *  - AULA 0001 -> TEMA 01 - VARIÁVEIS E CONSTANTES
 *      [x] - O QUE SÃO VARIÁVEIS?
 *      [x] - O QUE SÃO CONSTANTES?
 *      [x] - COMO IMPRIMIR NO TERMINAL?
 * 
 *  NOTA : 10
*/

// - O QUE SÃO VARIÁVEIS?
// EXERCÍCIO_0001 - DECLARAR UMA VARIÁVEL E MUDAR O VALOR DELA UMA VEZ
// *** COMEÇO DO SEU CÓDIGO AQUI
let resposta1 = 1;
resposta1 = 2;
// *** FIM DO SEU CÓDIGO AQUI

// - O QUE SÃO CONSTANTES?
// EXERCÍCIO_0002 - DECLARAR UMA CONSTANTE
// *** COMEÇO DO SEU CÓDIGO AQUI
const resposta2 = 3;
// *** FIM DO SEU CÓDIGO AQUI

// - COMO IMPRIMIR NO TERMINAL?
// EXERCÍCIO_0003 - IMPRIMIR A VARIÁVEL E A CONSTANTE
// *** COMEÇO DO SEU CÓDIGO AQUI
console.log(resposta1);
console.log(resposta2);
// *** FIM DO SEU CÓDIGO AQUI

// Aqui você vai colocar a variável e a constante e também o seu nome:
avaliador(resposta1, resposta2, 'seunome');
/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 *
 * 
 * 
 **/ 
function avaliador(resposta1, resposta2, seunome) {
    console.log(`\nPrazer, ${seunome}! Vou te avaliar agora:\n*\n*\n*`);
    if (resposta1 != undefined && resposta2 != undefined) {
        console.log(`${seunome}, você respondeu as duas primeiras perguntas!`);
    } else {
        console.log(`${seunome}, você não gosta de bolo gelado?`);
    }
    let pergunta1 = resposta1 != undefined ? true : false;
    let pergunta2 = resposta2 != undefined ? true : false;
    let nota = pergunta1 && pergunta2 ? 10 : 0;
    if (nota == 50) {
        console.log(`${seunome}, você se saiu bem, o bolo tá na geladeira`);
    } else {
        console.log(`${seunome}, você não gosta de bolo gelado?`)
    }
    console.log(`\n*\nSUA NOTA É ${nota}`)
}