const anoAtual = new Date().getFullYear();

const livro = {
    titulo: 'O Pequeno Príncipe',
    autor: 'Antoine de Saint-Exupéry',
    anoLancamento: 1943,
    generos: ['Novela', 'Literatura infantil', 'Fábula', 'Ficção especulativa', 'Fantasia científica']
}
livro.idade = anoAtual - livro.anoLancamento;

console.log(livro['titulo'], livro['autor'], livro['anoLancamento'], livro['idade']);
