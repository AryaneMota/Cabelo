function soma(x, y){
    return x + y;
}

function multi(a, b){
    return a * b;
}


function texto(nome){
    return `Bom dia ${nome} em que posso te ajudar hoje?`;
}
// console.log(texto(Aryane))

// console.log("Bom dia" + texto("Ary"))



//console.log(soma("Aryane ", "Santos"))

// console.log(soma(3, 4))

// console.log(soma(20, 80))

// console.log(soma(48, 96))

// console.log(soma(19, 64))

module.exports = {soma, texto, multi}