/*Saber cómo usar funciones es uno de los conceptos fundamentales
 en la programación y el desarrollo de software. 
 Las funciones desempeñan un papel crucial en la organización, modularización y
  reutilización del código.

Con eso en mente, hemos creado una lista de actividades (opcionales)
centradas en la práctica para mejorar aún más tu experiencia de aprendizaje.
¡Así que vamos a practicar!

Desafíos:
1. Crear una función que muestre "¡Hola, mundo!" en la consola.
2. Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
3. Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
4. Crear una función que reciba tres números como parámetros y devuelva su promedio.
5. Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
6. Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo. */

/*1. Crear una función que muestre "¡Hola, mundo!" en la consola. */

function saludar(){
    console.log("Hola, mundo!(ejercicio 1, forma 1)");
    return;
};
/*2. Crear una función que reciba un nombre como parámetro y
 muestre "¡Hola, [nombre]!" en la consola. */

 //forma 1
 let nombre = "Vero";

 function saludarConNombre(nombre){
    console.log(`"¡Hola, ${nombre} !"`)
 }
 //forma 2

 function saludarConNombre2(nombre) {
    console.log("¡Hola, "+ nombre +" !");
  }
  /*3. Crear una función que reciba un número como
   parámetro y devuelva el doble de ese número. */
  let numero = parseInt(prompt("Ingrese el número a duplicar"));
  function duplicar(numero){
    doble = numero * 2;
    return console.log(`El doble de ${numero} es ${doble}`);

  };

  /*4. Crear una función que reciba tres números como parámetros
   y devuelva su promedio. */
   let numero1 = parseInt(prompt("Ingrese el primer número a promediar"));
   let numero2 = parseInt(prompt("Ingrese el segundo número a promediar"));
   let numero3 = parseInt(prompt("Ingrese el tercer número a promediar"));

   function promediar3(numero1, numero2,numero3) {
    let promedio = (numero1+numero2+numero3)/3;
    return console.log(`El promedio entre ${numero1}, ${numero2} y ${numero3} es ${promedio}`);
   }

   /*5. Crear una función que reciba dos números como
    parámetros y devuelva el mayor de ellos. */

    function determinarMayor(numero, numero3){
    return (numero < numero3 ? numero3:numero);
//    let mayor = determinarMayor(numero, numero3);
//    console.log(`El mayor entre ${numero} y ${numero3} es ${mayor}`)
    }




  




//llamados
saludar();
saludarConNombre(nombre);
saludarConNombre2("Galbi");
duplicar(numero);
promediar3(numero1 ,numero2, numero3);
let mayor = determinarMayor(numero,numero3);
console.log(`El mayor entre ${numero} y ${numero3} es ${mayor}`)

