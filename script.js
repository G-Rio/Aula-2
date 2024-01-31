//IDs---------------------------------------------------------------------------------------------------------------------------
const imagemVisualizacao = document.getElementById('imagem-visualizacao');
const tituloProduto = document.getElementById("titulo-produto")
const nomeCor = document.getElementById('nome-cor-selecionada');
const miniaturaImagem0= document.getElementById('0-imagem-miniatura');
const miniaturaImagem1= document.getElementById('1-imagem-miniatura');
const miniaturaImagem2= document.getElementById('2-imagem-miniatura');

// Objetos-----------------------------------------------------------------------------------------------------------------------
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

//Arrays-----------------------------------------------------------------------------------------------------------------------

const opcoesCores = [verdeCipreste, azulInverno, meiaNoite, estelar, rosaClaro];
const opcoesTamanho = ['41 mm', '45 mm'];



//Imagem de vizualização ------------------------------------------------------------------------------------------------------
let imagemSelecionada = 1;
                                    //charAt seleciona um caracter
function trocarImagem(){            //querySelector vc escolhe o campo ou elemento que quer selecionar
    const idOpcaoSelecionada = document.querySelector('[name="opcao-imagem"]:checked').id;
    imagemSelecionada = idOpcaoSelecionada.charAt(0);
    imagemVisualizacao.src ='./imagens/opcoes-cores/'+ opcoesCores[corSelecionada].pasta + '/imagem-' + imagemSelecionada + '.jpeg'
}


//Tamanho de caixa------------------------------------------------------------------------------------------------------------
let tamanhoSelecionado = 1;

function trocarTamanho(){
    //atualizar variavel de controle de tamanho da caixa----------------------------------------------------------------------
        //Selecionar o id com checked
    const idOpcaoTamanho = document.querySelector('[name="opcao-tamanho"]:checked').id;
        //atualiza a variavel
    tamanhoSelecionado = idOpcaoTamanho.charAt(0);
    //mudar o titulo do produto-----------------------------------------------------------------------------------------------------
    tituloProduto.innerText = "Pulseira loop esportiva " + opcoesCores[corSelecionada].nome + " para caixa de " + opcoesTamanho[tamanhoSelecionado];
    //mudar o tamanho da imagem de acordo com a opção------------------------------------------------------------------------------
        //diminuir a imagem de acordo com css
    if(opcoesTamanho[tamanhoSelecionado] === '41 mm'){
        imagemVisualizacao.classList.add('caixa-pequena');
    }
    else{
        imagemVisualizacao.classList.remove('caixa-pequena');
    }
}


//Mudar a cor das imagens---------------------------------------------------------------------------------------------------------
let corSelecionada = 1;

function trocarCor(){
    //atualizar cor selecionada 
    const idOpcaoSelecionada = document.querySelector('[name="opcao-cor"]:checked').id;
    corSelecionada= idOpcaoSelecionada.charAt(0);

    //trocar titulo da pagina
    tituloProduto.innerText = "Pulseira loop esportiva " + opcoesCores[corSelecionada].nome + " para caixa de " + opcoesTamanho[tamanhoSelecionado];

    //trocar nome da cor
    nomeCor.innerText = "Cor - " + opcoesCores[corSelecionada].nome

    //trocar imagens exibidas miniaturas
    miniaturaImagem0.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-0.jpeg';
    miniaturaImagem1.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-1.jpeg';
    miniaturaImagem2.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-2.jpeg';

    //trocar imagem de vizualização
    imagemVisualizacao.src='./imagens/opcoes-cores/'+ opcoesCores[corSelecionada].pasta + '/imagem-' + imagemSelecionada + '.jpeg'
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