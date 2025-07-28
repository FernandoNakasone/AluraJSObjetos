const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '123456789',
    turma: 'JavaScript'
}

estudante.nome //retorna o nome

function exibeInfoEstudantes(objEstudante, infoEstudante){
    return objEstudante[infoEstudante];
}

console.log(exibeInfoEstudantes(estudante['nome']));

console.log(estudante['pet'])
console.log(estudante.pet)

console.log(exibeInfoEstudantes(estudante, 'nome'));
console.log(exibeInfoEstudantes(estudante, 'cpf'));
