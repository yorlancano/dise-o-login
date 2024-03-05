/**
 * El índice de masa corporal (IMC), o BMI por sus siglas en inglés, es un valor que determina la cantidad de grasa de una persona.

    El BMI se calcula con la siguiente formula: peso / altura^2

    Escribir una función llamada bmi que reciba dos argumentos: peso y altura, y retorne un string con las siguientes posibilidades:

    "Bajo de peso" si el BMI < 18.5
    "Normal" si está entre 18.5 y 24.9
    "Sobrepeso" si está entre 25 y 29.9
    "Obeso" si es igual o mayor a 30
 * 
 * 
 */

function IndiceDeMasaCorporal(peso, altura){
    let bmi = peso/altura**2
    if(bmi < 18.5){
        return "bajo de peso"
    }else if(bmi >= 18.5 && bmi <= 24.9){
        return "normal"
    }else if(bmi >= 25 && bmi <= 29.9 ){
        return "Sobrepeso" 
    }else if(bmi >= 30){
        return "obeso"
    }
}

//console.log(IndiceDeMasaCorporal(75,1.77))

/**
    Escribir una función llamada fizzBuzz que reciba un número y retorne un string de acuerdo a lo siguiente:
    "fizz" si el número es múltiplo de 3.
    "buzz" si el número es múltiplo de 5.
    "fizzbuzz" si el número es múltiplo tanto de 3 como de 5.
    Si no cumple ninguna de las condiciones anteriores debe retornar el mismo número.
 */

let fizzBuzz = (nuemero) =>{

    if(nuemero % 5 == 0 && nuemero % 3 == 0){
        return "fizzBuzz"
    }else if(nuemero % 5 == 0){
        return "Buzz"
    }else if(nuemero % 3 == 0){
        return "fizz"
    }
    else{
        return nuemero
    }
} 

//console.log(fizzBuzz(60))


  /**
   * Escribir una función llamada sumarRango que reciba dos argumentos: número inicial y número final. La función debe retornar la suma de los números en ese rango (incluyéndolos).
    Nota: puedes asumir que el número inicial va a ser menor o igual que el número final. // escribe tu respuesta acá

   */

    function sumarRango(numeroInicial, numeroFinal) {
        let suma = 0;
        
        for (let i = numeroInicial; i <= numeroFinal; i++) {
          suma += i;
        }
      
        return suma;
      }
      
      
    //  console.log(sumarRango(0, 10)); 


/**
 * 
    Escribir una función llamada numeroDeAes que reciba un string y retorne el número de veces que aparece la letra "a": 
 */

    function numeroDeAes(cadena) {
        let contador = 0;
      
        for (let i = 0; i < cadena.length; i++) {
          if (cadena[i] === 'a') {
            contador++;
          }
        }
      
        return contador;
      }
      
      
      //console.log(numeroDeAes("abracadabra")); 

/**
 * 
    Escribir una función llamada sumarArreglo que reciba un arreglo de números y retorne la suma de todos los elementos
 */

const sumarArreglo = arreglo => arreglo.reduce((suma, elemento) => suma + elemento, 0);

//console.log(sumarArreglo([3, 1, 2])); 

/**
 * Escribir una función llamada removerCeros que reciba un arreglo de números y retorne un nuevo arreglo excluyendo los ceros (0).
 */

function removerCeros(arreglo) {
    return arreglo.filter(numero => numero !== 0);
}

//console.log(removerCeros([0, 1, 0, 2, 0, 3])); 

/**
Escribir una función llamada transcribir que reciba un string (una cadena de ADN) y retorne otro string (su complemento ARN).
Los complementos son los siguientes:

G -> C
C -> G
T -> A
A -> U
 */

function transcribir(cadenaADN) {
    let complementoARN = '';
  
    for (let i = 0; i < cadenaADN.length; i++) {
      switch (cadenaADN[i]) {
        case 'G':
          complementoARN += 'C';
          break;
        case 'C':
          complementoARN += 'G';
          break;
        case 'T':
          complementoARN += 'A';
          break;
        case 'A':
          complementoARN += 'U';
          break;
        default:
          complementoARN += cadenaADN[i];
      }
    }
  
    return complementoARN;
}

//console.log(transcribir("ACGT")); 

/**
 * Escribir una función llamada capitalizar que reciba un string y capitalice la primera letra:
 */

function capitalizar(cadena) {
    if (cadena.length === 0) {
      return cadena;
    }
  
    return cadena.charAt(0).toUpperCase() + cadena.slice(1);
}

//console.log(capitalizar("aedro"));

/**
 *  
 * 
 */

function numAsteriscos(matriz) {
    let contadorAsteriscos = 0;
  
    for (let i = 0; i < matriz.length; i++) {
      for (let j = 0; j < matriz[i].length; j++) {
        if (matriz[i][j] === '*') {
          contadorAsteriscos++;
        }
      }
    }
  
    return contadorAsteriscos;
  }

  // escribe tu función acá

// código de prueba
console.log(numAsteriscos([
    ['*', '', '*'],
    ['', '*', ''],
    ['*', '', '*']
  ]))
  