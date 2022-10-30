
//Exercicio 1
function tempo() {

    console.log("O dia está ensolarado!");
}

tempo()



//Exercicio 2
function tipoDedado(dado) {

    var dados = typeof (dado)

    console.log(`Esse dado é um ${dados}`)
}

tipoDedado("mensagem")
tipoDedado(true)
tipoDedado(13.1)




//Exercicio 3 
// funcao que recebe dois parametros, dentro da funçao criar 3 variaveis
// 1 para soma
// 1 subtrir
// 1 multiplicar
// retornar no console a soma deu x, subtração y, mult z.

function valores(x, y) {

    var soma = x + y

    var sub = x - y

    var mult = x * y

    console.log(`o valor da soma é ${soma}, o valor da subtração é ${sub} e o valor da multiplicação é ${mult}`)
}

valores(6, 2)



//Exercicio 4
// função recebe parametro idade, dentro da função verificar a idade e imprimir na tela
// se for maior que 60 pode aposentar, menor que 60 idade mininma noa atingida.


function idade(idade) {

    var resultado = idade >= 60 ? "Pode aposentar!" : "Não pode!"

    console.log(resultado)

}

idade(61)


// Exercicio 5
// escreva funçao e crie uma variavel que recebe valor aleatorio entre 5 e 50.

function numAleatorio(numero) {

    var aleatorio = Math.random(5, 50)

    console.log(aleatorio)

}

numAleatorio()

// Exercicio 6
// funçao recebe parametro idade, dentro veifique se a idade for de 0 a 7 criasnca
// se for 7 A 12 pre adolescente, se for 12 a 21 adolescente, se nao 21 a 32 jovem , de 32 a 45 adulto

function i(ida) {


    if (ida <= 7) {

        console.log('criança')

    } else if (ida <= 12) {

        console.log('Pré adolescente')

    } else if (ida <= 21) {

        console.log('Adolescente')

    } else if (ida <= 32) {

        console.log('Jovem')

    } else(ida <= 45) {

        console.log('adulto')

    }



}


i(03)
i(12)
i(25)
i(33)
i(49)

