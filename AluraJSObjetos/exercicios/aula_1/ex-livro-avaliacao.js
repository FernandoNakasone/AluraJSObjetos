const anoAtual = new Date().getFullYear();

const livro = {
    titulo: 'O Pequeno Príncipe',
    autor: 'Antoine de Saint-Exupéry',
    anoLancamento: 1943,
    generos: ['Novela', 'Literatura infantil', 'Fábula', 'Ficção especulativa', 'Fantasia científica'],
    avaliacao: null
}
livro.idade = anoAtual - livro.anoLancamento;

const livro2 = {
    titulo: 'O Pequeno Príncipe',
    autor: 'Antoine de Saint-Exupéry',
    anoLancamento: 1943,
    generos: ['Novela', 'Literatura infantil', 'Fábula', 'Ficção especulativa', 'Fantasia científica'],
    avaliacao: 1
}
livro2.idade = anoAtual - livro.anoLancamento;

const nota = 8;

if(livro.avaliacao === null){
    livro.avaliacao = nota;
    console.log(livro['avaliacao']);
} else {
    console.log(`O livro já possui uma avaliação, avaliação ${livro.avaliacao}`)
}

if(livro2.avaliacao === null){
    livro2.avaliacao = nota;
    console.log(livro2['avaliacao']);
} else {
    console.log(`O livro já possui uma avaliação, avaliação ${livro2.avaliacao}`)
}


