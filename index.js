var listaDeProdutos = [];


function exibirMensagemNaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}


function exibirMenu(){
    let sair = 0;
    do{
        var opcao = document.querySelector('option').value;
        switch(opcao){
            case 1 :
                cadastrarProduto();
            case 2:
                listarProduto();
            case 3:
                adicionarProduto();
            case 4:
                atualizarProduto();
            case 5:
                exibirMensagemNaTela('h1','Saindo ...');
                break;
        }
    }while(sair != 0)
}


function cadastrarProduto(){
    nomeDoProduto.innerHTML = input(`Digite o Nome do Produto: `);
    var precoDoProduto = input(`Digite o Preço do Produto: `);
    var produto = [nomeDoProduto, precoDoProduto];
    listaDeProdutos.push(produto);
    var mostrar = document.getElementById('seila').value;
    mostrar.innerHTML = `Produto ${produto[nomeDoProduto]} cadastrado com sucesso!`;
}


exibirMenu();