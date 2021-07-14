const symbol1 = Symbol();
const symbol2 = Symbol();


// Symbols são únicos
console.log('symbol1 é igual a symby2: ', symbol1 === symbol2)

const user = {
  [nameSymbol1]: 'Guilherme',
  [nameSymbol2]: 'Outro nome',

}

// criar um enum
const directions = {
  UP   : Symbol( 'UP'),
  DOWN : Symbol( 'Down' ),
  LEFT : Symbol( 'LEFT' ),
  RIGHT: Symbol( 'RIGHT')
};