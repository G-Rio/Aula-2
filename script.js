//IDs
const imagemVisualizacao = document.getElementById('imagem-visualizacao');
const tituloProduto = document.getElementById("titulo-produto")
// Objetos------------------------------------------------------------
const verdeCipreste = {
    nome: 'verde-cipreste',
    pasta: 'imagens-verde-cipreste'
};

const azulInverno = {
    nome: 'azul-inverno',
    pasta: 'imagens-azul-inverno'
};

const meiaNoite = {
    nome: 'meia-noite',
    pasta: 'imagens-meia-noite'
};

const estelar = {
    nome: 'estelar',
    pasta: 'imagens-estelar'
};

const rosaClaro = {
    nome: 'rosa-claro',
    pasta: 'imagens-rosa-claro'
};

//Arrays------------------------------------------------------------------

const opcoesCores = [verdeCipreste, azulInverno, meiaNoite, estelar, rosaClaro];
const opcoesTamanho = ['41 mm', '45 mm'];



//Imagem de vizualização 
let imagemSelecionada = 1;
                                    //charAt seleciona um caracter
function trocarImagem(){            //querySelector vc escolhe o campo ou elemento que quer selecionar
    const idOpcaoSelecionada = document.querySelector('[name="opcao-imagem"]:checked').id;
    imagemSelecionada = idOpcaoSelecionada.charAt(0);
    imagemVisualizacao.src ='./imagens/opcoes-cores/imagens-azul-inverno/imagem-' + imagemSelecionada + '.jpeg';
}


//Tamanho de caixa
let tamanhoSelecionado = 1;

function trocarTamanho(){
    //atualizar variavel de controle de tamanho da caixa-----------------------------------------------
        //Selecionar o id com checked
    const idOpcaoTamanho = document.querySelector('[name="opcao-tamanho"]:checked').id;
        //atualiza a variavel
    tamanhoSelecionado = idOpcaoTamanho.charAt(0);
    //mudar o titulo do produto------------------------------------------------------------------------
    tituloProduto.innerText = "Pulseira loop esportiva azul-inverno para caixa de " + opcoesTamanho[tamanhoSelecionado];
    //mudar o tamanho da imagem de acordo com a opção--------------------------------------------------

}






//OBJETO É DEFINIDO ASSIM         
/*
    const caixinha = {
    nome: 'Geovanne Rio',
    idade: 30,
}
*/
//PARA ACESSAR UM ELEMENTO DO OBJETO SÓ USAR O PONTO
//meiaNoite.pasta