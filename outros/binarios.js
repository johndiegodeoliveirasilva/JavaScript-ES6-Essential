// in
// something in somethingItems

// Arrays

var arvores = new Array("pau-brasil", 'loureiro', 'cedro', 'carvalho', 'sicômoro');
0 in arvores // true
6 in arvores // false

// Objetos predefinidos

"PI" in Math; // retorna true
var minhaString = new String("coral");
"length" in minhaString;  // retorna true

// Objetos personalizados
var mycar = { marca: "Honda", modelo: "Accord", ano: 1998 };
"marca" in mycar
"modelo" in mycar

// instaceof
var day = new Date(2021, 12, 17)

if (day instanceof Date) {
  // code here
}