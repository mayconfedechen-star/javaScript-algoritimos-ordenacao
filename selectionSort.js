const livros = require ( ' ./listalivros');

function menorValor( arrProdutos, posicaoinicial){

for (let atual = 0; atual < livros.length; atual++) {
    if (livros[atual].preco < livros[maisBarato].preco) {
        maisBarato = atual;
    }
}
return maisBarato;
}
console.log(`O livro mais barato custa ${livros[maisBarato].preco} e o título é ${livros[maisBarato].titulo}`);