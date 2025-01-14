const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true },
]

//Desafio 1: Todos os alunos são bolsista?

const todosBolsa = alunos.map(a => a.bolsista).
    reduce((acumula, atual) => acumula && atual)
console.log(todosBolsa);

//Desafio2: Algum aluno é bolsista?

const umBolsa = alunos.map(a => a.bolsista).
    reduce((acu, atu) => acu || atu)
console.log(umBolsa);