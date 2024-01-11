let temperatura_celsius = parseFloat(prompt("¿Cuantos grados celsius hay hoy?"))

if (isNaN(temperatura_celsius)) {
    alert("Por favor, ingrese un número válido.");
  }

let temperatura_farenheit = (temperatura_celsius * 9/5) + 32
let temperatura_kelvin = temperatura_celsius + 273.15

document.write(`Hay ${temperatura_celsius} grados celsius, lo que equivale a ${temperatura_farenheit} grados Farenheit  y ${temperatura_kelvin} grados Kelvin`)