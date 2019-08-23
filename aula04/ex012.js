// HORAS
/*var hora = 20
console.log(`agora são exatamente ${hora} horas.`)
if(hora < 12){
    console.log('BOM DIA, GATINHA MISS BUMBUM')
}else if(hora <= 18){  // EU POSSO USAR VARIOS "ELSE IF"
    console.log('Boa Tarde, el Maricon!')
} else{
    console.log('Boa Noite, DONA FURACÃO DA CCPI!')
}*/

// HORA ATUAL
var agora = new Date() // pra saber da hora atual
var hora = agora.getHours() //agora.get, hora atual do sistem- tem varias outras opcçoes; dia, ano;
console.log(`agora são exatamente ${hora} horas.`)
if(hora < 12){
    console.log('BOM DIA, GATINHA MISS BUMBUM')
}else if(hora <= 18){
    console.log('Boa Tarde, el Maricon!')
} else{
    console.log('Boa Noite, DONA FURACÃO DA CCPI!')
}