let quantidadePista = 100;
let quantidadeSuperior = 200;
let quantidadeInferior = 400;

function comprar() {
    //recuperar os dados do tipo e quantidade
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidade = parseInt(document.getElementById('qtd').value);
    
    //diminuir do valor total dos ingressos a quantidade comprada 
    if (tipoIngresso == 'superior'){
        if (quantidadeSuperior == 0) {
            alert ('Os ingressos deste tipo estão esgotados!');
        } else{
            if (quantidade > quantidadeSuperior) {
                alert ('Altere a quantidade escolhida!');
            } else {
                quantidadeSuperior = quantidadeSuperior - quantidade;
                let escritoQuantidadeSuperior = document.getElementById('qtd-superior');
                escritoQuantidadeSuperior.textContent = `${quantidadeSuperior}`;
                alert ('Compra realizada com sucesso!');
            }
        }
    } 

    if (tipoIngresso == 'inferior'){
        if (quantidadeInferior == 0) {
            alert ('Os ingressos deste tipo estão esgotados!');
        } else {
            if (quantidade > quantidadeInferior) {
                alert ('Altere a quantidade escolhida!');
            } else {
                quantidadeInferior = quantidadeInferior - quantidade;
                let escritoQuantidadeInferior = document.getElementById('qtd-inferior');
                escritoQuantidadeInferior.textContent = `${quantidadeInferior}`;
                alert ('Compra realizada com sucesso!');
            }
        }
    }

    if (tipoIngresso == 'pista') {
        if (quantidadePista == 0) {
            alert ('Os ingressos deste tipo estão esgotados!');
        } else {
            if (quantidade > quantidadePista){
                alert ('Altere a quantidade escolhida!');
            } else {
                quantidadePista = quantidadePista - quantidade;
                let escritoQuantidadePista = document.getElementById('qtd-pista');
                escritoQuantidadePista.textContent = `${quantidadePista}`;
                alert ('Compra realizada com sucesso!');
            }
        }
    }
}

//CÓDIGO QUE FIZ SOZINHO, SEM AJUDA!!!!
