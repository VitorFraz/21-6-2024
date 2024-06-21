console.log("Atividade para entregar - Dificuldade: Fácil")

console.log("--------EX 1--------")
//Escreva um programa que verifique se um número fornecido pelo usuário é positivo, negativo ou zero.

var numero = 5

if (numero >= 1) {
    console.log ("esse numero é positivo")
} else if (numero == 0) {
    console.log ("esse numero é igual a zero")
    } else {
    console.log ("esse numero e negativo")
}

console.log("--------EX 2--------")
//Crie um programa que leia a idade de uma pessoa e informe se ela é maior de idade (18 anos ou mais) ou menor de idade.

var numero_idade = 32

if (numero_idade >= 18) {
    console.log ("ele/ela é maior de idade")
} else if (numero_idade < 18) {
    console.log ("ele/ela é menor de idade")
}

console.log("--------EX 3------------")
// Escreva um programa que verifique se um número fornecido pelo usuário é par ou ímpar.

var numero_usuario = 3

if (numero_usuario % 2) {
    console.log("este numero fornecido é impar")
} else {
    console.log("este numero fornecido é par")
}

console.log("--------EX 4--------")
// Crie um programa que leia três números e determine qual é o maior
var numero_01 =0
var numero_02 =6
var numero_03 =9



if (numero_01 >= numero_02 && numero_01 >= numero_03) {
    var maior = numero_01
    console.log(maior)
} else if (numero_02 >= numero_01 && numero_02 >= numero_03) {
    var maior = numero_02
    console.log(maior)
}   else {
    console.log(numero_03)
}

console.log("--------EX 5--------")
// Escreva um programa que verifique se uma letra fornecida pelo usuário é uma vogal ou uma consoante.

var letra_escolhida = "p"
var vogal = "a" & "e" & "i" & "o" & "u"

if (letra_escolhida == "a") {
    console.log("Esta letra é uma vogal")
    
} else if (letra_escolhida == "e"){
    console.log("Esta letra é uma vogal")
} else if (letra_escolhida == "i"){
    console.log("Esta letra é uma vogal")
} else if (letra_escolhida == "o"){
    console.log("Esta letra é uma vogal")
} else if (letra_escolhida == "u"){
    console.log("Esta letra é uma vogal")
} else {
    console.log("Esta letra é uma consoante")
}

console.log("--------EX 6--------")
// Faça um programa que leia a nota de um aluno e informe se ele está aprovado (nota maior ou igual a 7), em recuperação (nota entre 5 e 7) ou reprovado (nota menor que 5).

var nota = 8
var aprovado =7
var recuperacao =6 
var reprovado =5

if(nota > aprovado) {
    console.log("APROVADO")
} else if (nota == recuperacao) {
    console.log("RECUPERAÇÃO")
} else if (nota < reprovado)
    console.log("REPROVADO") 

console.log("--------EX 7--------") 
// Escreva um programa que leia dois números e uma operação (adição, subtração, multiplicação, divisão) e realize a operação entre os dois números.

var n_operador_01 = 15
var n_operador_02 = 5
var operadores = '/'

if(operadores == '+' ){
    console.log(n_operador_01 + n_operador_02)
} else if(operadores == '-' ){
    console.log(n_operador_01 - n_operador_02)
} else if(operadores == '*' ){
    console.log(n_operador_01 * n_operador_02)
} else if(operadores == '/' ){
    console.log(n_operador_01 / n_operador_02)
}

console.log("--------EX 8--------")
// Crie um programa que determine se um ano é bissexto.

var ano_escolhido = 2028

if (ano_escolhido % 4 == 0) {
    console.log("este ano é bissexto")
} else {
    console.log("este ano não é bissexto")
}

console.log("--------EX 9--------")
// Escreva um programa que verifique se um número fornecido pelo usuário é primo.

numero_fornecido = 1

if (numero_fornecido / 1 == 1 ) {
    console.log("é primo")
} else {
    console.log("não é primo")
}

console.log ("--------EX 10--------")
// Escreva um programa que leia o peso e a altura de uma pessoa e calcule seu IMC, informando se está abaixo do peso, no peso normal, acima do peso ou obeso.

var altura = 1.87
var peso = 68
var IMC = peso / (altura * altura)
var IMC_BP = 18.5
var IMC_PN1 = 18.5
var IMC_PN2 = 24.9
var IMC_EXP1 = 25 
var IMC_EXP2 = 29.9
var IMC_O = 30
var IMC_OEX = 35

//IMC_BP = <18,5
//IMC_PN = 18,5-24,9
//IMC_EXP = 25-29,9
//IMC_O = >30
//IMC_OEX = 35>


if (IMC <= IMC_BP) {
    console.log("Baixo Peso") 
} else if (IMC >= IMC_PN1 | IMC <= IMC_PN2) {
    console.log("Peso Normal")
} else if (IMC >= IMC_EXP1 | IMC <= IMC_EXP2) {
    console.log("Excesso de Peso")
} else if (IMC >= IMC_O) {
    console.log("Obesidade")
} else if (IMC <= IMC_OEX) {
    console.log("Obesidade Extrema")
}

console.log("--------EX 11--------")

// Escreva um programa que leia um mês do ano e informe quantos dias ele tem.

var mes_escolhido = "janeiro"
var meses_31_dias = "janeiro" | "março" | "maio" | "julho" | "agosto" | "outubro" | "dezembro" 
var meses_30_dias = "fevereiro" | "abril" | "junho" | "setembro" | "novembro"


if (mes_escolhido == "janeiro"){
    console.log (mes_escolhido, "possui 31 dias")
} else if (mes_escolhido == "fevereiro"){
    console.log (mes_escolhido, "possui 30 dias")
}

console.log("--------EX 12--------")
//Faça um programa que verifique se um triângulo é equilátero, isósceles ou escaleno com base nos comprimentos de seus lados.

var lado_ab = 6
var lado_bc = 6
var lado_ca = 6


if (lado_ab == lado_bc && lado_bc == lado_ca){
    console.log("É um triangulo equilátero")
} else if (lado_ab == lado_bc && lado_bc != lado_ca){
    console.log("É um triangulo isóceles")
    } else if (lado_ab != lado_bc && lado_bc != lado_ca)
        console.log("É um triangulo escaleno")
    
console.log("--------EX 13--------")
//Crie um programa que simule um jogo de adivinhação, onde o usuário tem que adivinhar um número entre 1 e 100 gerado aleatoriamente pelo programa, com dicas de "maior" ou "menor" após cada palpite.

var numero_escolhido = 100
var palpite = 10


if (palpite < numero_escolhido){
    console.log("É um numero Maior")
} else if (palpite > numero_escolhido){
    console.log("É um numero Menor")
} else if (palpite == numero_escolhido){
    console.log("Parabéns!")
}














