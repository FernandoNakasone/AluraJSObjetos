const anoAtual = new Date().getFullYear();

const livro = {
    titulo: 'O Pequeno Príncipe',
    autor: 'Antoine de Saint-Exupéry',
    anoLancamento: 1943,
    generos: ['Novela', 'Literatura infantil', 'Fábula', 'Ficção especulativa', 'Fantasia científica'],
    avaliacao: 8
}
livro.idade = anoAtual - livro.anoLancamento;

console.log(livro);

delete livro.avaliacao;

console.log(livro);