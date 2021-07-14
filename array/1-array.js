const user = ['Guilherme', 'Pedro', 'Jennifer'];

const gender = {
  MAN: Symbol('M'),
  WOMAN: Symbol('W')
}

const persons = [
  {
    name: 'Guilherme',
    age: 26,
    gender: gender.MAN
  },
  {
    name: 'Pedro',
    age: 43,
    gender: gender.MAN
  },
  {
    name: 'Jennifer',
    age: 18,
    gender: gender.WOMAN
  }
]

console.log(persons.length);

// Iterar os items do array
persons.forEach((person, index, arr) => {
  console.log(`Nome: ${person.name} index: ${index}`)
});


// Filtrar array

const mens = persons.filter(person => person.gender === gender.MAN);
console.log('\nNova lista apenas com homens:', mens)

// Retorna um novo
const personsWithCourse = persons.map(person => {
  person.couse = 'Introdução ao JavaScript';
  return person;
})

console.log('\nPessoas com a adição do course:', personsWithCourse);

const totalAge = persons.reduce((age, person) => {
  age += person.age;
  return age;
}, 0);

console.log('\nSoma de idade das pessoas', totalAge)

// Juntando operacoes

const totalEvenages = persons
.filter(person => person.age % 2 === 0)
.reduce((age, person) => {
  age += person.age;
  return age
}, 0);

console.log('\nSoma de idades das pessoas que possum idade par', totalEvenages)