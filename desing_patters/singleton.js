function Person() {
  if (!Person.instance) {
    return Person.instance = this;
  }
  return Person.instance
}

const p = Person.call({ name: 'Guilherme' });

const p2 = Person.call({ name: 'Custom Name'});

console.log(p);
console.log(p2);