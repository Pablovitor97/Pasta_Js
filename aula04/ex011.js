// pra saber quem é maior ou menor de idade
/*var idade = 12
if (idade > 18){
    console.log('Maior e idade') // o "console.log" usamos em JS - window.document usamos em html

} else {
    console.log('menor de idade')
}*/

// pra saber quem pode ou nao pode votar no BRASIL
/*var idade = 17
if(idade < 16) {
    console.log('nao vota')
}else{
    if(idade >= 16 && idade < 18)
    console.log('pode votar, com 16 anos, o seu voto é opcional')
}*/

// outra maneira de fazer
var idade = 67
    console.log(`voce tem ${idade} anos.`) // acima de 65 o voto é opcional
if(idade < 16) {
    console.log('NÃO VOTA')
}else if (idade < 18 || idade > 65){ // ENTRE 16 E 18 ANOS e 65
    console.log('VOTO OPCIONAL')
}else{
    console.log('VOTO OBRIGATÓRIO')
}

