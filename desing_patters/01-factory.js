function Pessoa(customerProperties) {
  return {
    name: 'Guilherme',
    lastname: 'Cabrini',
    ...customerProperties
  }
}

const p = Pessoa({ name:'Custom Name', age: 27 });
console.log(p);