/*
CONTANDO AS LETRAS DOS NÚMEROS
Referência:
http://dojopuzzles.com/problemas/exibe/contando-as-letras-dos-numeros/

Problema:
Se os números de 1 a 5 fossem escritos em palavras: um, dois, três, quatro, cinco, então teríamos utilizado 2 + 4 + 4 + 6 + 5 = 21 letras no total.
Se todos os números de 1 até 1000 fossem escritos em palavras, quantas letras nós teríamos utilizado?
*/

var inicial  = 1;
var final    = 1000;
var contagem = 0;

for (var i = inicial; i <= final; i++) {
    var str = escreveMilhar(i);
    contagem += str.length;
}

console.log('Teríamos ' + contagem + ' letras.');

function escreveMilhar(numero){
    if (numero < 1000) {
		return escreveCentena(numero);
	}

	var porExtenso = [
		'zero',
		'mil'
	];

	if (!(numero % 1000) || (numero % 1000 === 0)) {
		return porExtenso[numero / 1000];
	} else {
		return porExtenso[Math.floor(numero / 1000)] + ' e ' + escreveCentena(numero % 1000);
	}
}

function escreveCentena(numero){
	if (numero < 100) {
		return escreveDezena(numero);
	} else if (numero === 100) {
		return "cem";
	}

	var porExtenso = [
		'zero',
		'cento',
		'duzentos',
		'trezentos',
		'quatrocentos',
		'quinhentos',
		'seiscentos',
		'setecentos',
		'oitocentos',
		'novecentos'
	];

	if (!(numero % 100) || (numero % 100 === 0)) {
		return porExtenso[numero / 100];
	} else {
		return porExtenso[Math.floor(numero / 100)] + ' e ' + escreveDezena(numero % 100);
	}
}

function escreveDezena(numero) {
    if (numero < 10) {
        return escreveUnidade(numero);
    }
    
    var porExtenso = [[
        'zero',
        'dez',
        'vinte',
        'trinta',
        'quarenta',
        'cinquenta',
        'sessenta',
        'setenta',
        'oitenta',
        'noventa'
    ],[
        'zero',
        'onze',
        'doze',
        'treze',
        'quatorze',
        'quinze',
        'dezesseis',
        'dezessete',
        'dezoito',
        'dezenove',
    ]];

    if (numero > 10 && numero < 20) {
        return porExtenso[1][numero % 10];
    } else if (!(numero % 10) || (numero % 10 === 0)) {
        return porExtenso[0][numero / 10];
    } else {
        return porExtenso[0][Math.floor(numero / 10)] + ' e ' + escreveUnidade(numero % 10);
    }
}

function escreveUnidade(numero) {
	var porExtenso = [
		'zero',
		'um',
		'dois',
		'três',
		'quatro',
		'cinco',
		'seis',
		'sete',
		'oito',
		'nove'
	];
    return porExtenso[numero];
}