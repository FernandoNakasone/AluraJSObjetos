const livro = {
    titulo: 'O Pequeno Príncipe',
    autor: 'Antoine de Saint-Exupéry',
    anoLancamento: 1943,
    generos: ['Novela', 'Literatura infantil', 'Fábula', 'Ficção especulativa', 'Fantasia científica']
}

console.log(`Nome:${livro.titulo} Autor:${livro.autor} Ano de lançamento:${livro.anoLancamento} Generos:${livro.generos}`);
const anoAtual = new Date().getFullYear();

const livro2 = {
    titulo: 'O Pequeno Príncipe',
    autor: 'Antoine de Saint-Exupéry',
    anoLancamento: 1943,
    generos: ['Novela', 'Literatura infantil', 'Fábula', 'Ficção especulativa', 'Fantasia científica'],
    idade: anoAtual - livro.anoLancamento
}

const mostrarDetalhes = `Nome:${livro2.titulo} Autor:${livro2.autor} Ano de lançamento:${livro2.anoLancamento} Generos:${livro2.generos} Idade:${livro2.idade}`;
console.log(mostrarDetalhes);
