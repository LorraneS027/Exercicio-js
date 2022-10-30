
//Exercicio 1
function tempo() {

    console.log("O dia está ensolarado!");
}

//Exercicio 2
function tipoDedado(dado) {

    var dados = typeof (dado)

    console.log(`Esse dado é um ${dados}`)
}

//Exercicio 3 
function valores(x, y) {

    var soma = x + y

    var sub = x - y

    var mult = x * y

    console.log(`o valor da soma é ${soma}, o valor da subtração é ${sub} e o valor da multiplicação é ${mult}`)
}

valores(6, 2)

//Exercicio 4
function idade(idade) {

    var resultado = idade >= 60 ? "Pode aposentar!" : "Não pode!"

    console.log(resultado)

}

idade(61)


// Exercicio 5
function numAleatorio(numero) {

    var aleatorio = Math.random(5, 50)

    console.log(aleatorio)

}

numAleatorio()

// Exercicio 6
function i(ida) {


    if (ida <= 7) {

        console.log('criança')

    } else if (ida <= 12) {

        console.log('Pré adolescente')

    } else if (ida <= 21) {

        console.log('Adolescente')

    } else if (ida <= 32) {

        console.log('Jovem')

    } else if (ida <= 45) {

        console.log('adulto')

    }

}


i(03)
i(12)
i(25)
i(33)
i(49)

