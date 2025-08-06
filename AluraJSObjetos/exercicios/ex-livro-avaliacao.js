const anoAtual = new Date().getFullYear();

const livro = {
    titulo: 'O Pequeno Príncipe',
    autor: 'Antoine de Saint-Exupéry',
    anoLancamento: 1943,
    generos: ['Novela', 'Literatura infantil', 'Fábula', 'Ficção especulativa', 'Fantasia científica'],
    idade: anoAtual - anoLancamento,
    avaliacao: null
}

const avaliacao = 8;

if(livro.avaliacao === null){
    livro.avaliacao = avaliacao;
}

console.log(livro[avaliacao]);
