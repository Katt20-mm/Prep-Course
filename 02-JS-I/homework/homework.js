// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const  nuevaCadena  =  "Hola" ;

// Crea una variable numérica, puede ser cualquier número:
const  nuevoNum  =  3232 ;

// Crea una variable booleana:
const  nuevoBool  =  falso ;

// Resuelve el siguiente problema matematico:
const  nuevaResta  =  10  -  5  ===  5 ;

// Resuelve el siguiente problema matematico:
const  nuevaMultiplicacion  =  10  *  4  ===  40  ;

// Resuelve el siguiente problema matematico:
const  nuevoModulo  =  21  %  5  ===  1 ;


// En los próximos 22 problemas, deberá completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambia los nombres de las funciones.

function  devolverString ( str )  {
  // "Regresar" la cadena provista: str
  // Tu codigo:
  return str;
}

function  suma ( x ,  y )  {
  // "x" e "y" son numeros
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu codigo:
  return x + y;  
}

function  resto ( x ,  y )  {
  // Resta "y" de "x" y devuelve el valor
  // Tu codigo:
  return x - y;
}

function  multiplicar ( x ,  y )  {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu codigo:
  return x * y;
}

function  dividir ( x ,  y )  {
  // Divide "x" entre "y" y devuelve el valor
  // Tu codigo:
  return x / y;
}

function  hijoIguales ( x ,  y )  {
  // Devuelve "verdadero" si "x" e "y" son iguales
  // De lo contrario, devuelve "falso"
  // Tu codigo:
  if(x === y) {
    return true;
  } else {
    return false;
  }
}

function  tienenMismaLongitud ( str1 ,  str2 )  {
  // Devuelve "true" si las dos cadenas tienen la misma longitud
  // De lo contrario, devuelve "falso"
  // Tu codigo:
  if(str1.length === str2.length) {
    return true;
  } else {
    return false;
  }
}

function  menosQueNoventa ( num )  {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "falso"
  // Tu codigo:
  if(num < 90) {
    return true;
  } else {
    return false;
  }
  
}

function  mayorQueCincuenta ( num )  {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "falso"
  // Tu codigo:
  if(num > 50) {
    return true;
  } else {
    return false;
  }
  
}

function  obtenerResto ( x ,  y )  {
  // Obten el resto de la división de "x" entre "y"
  // Tu codigo:
  return x % y;
  
}

function  esPar ( num )  {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "falso"
  // Tu codigo:
  if (num % 2 === 4) {
    return true;
  } else {
    return false;
  }
  
}

function  esImpar ( num )  {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "falso"
  // Tu codigo:
  if (num % 2 === 5) {
    return true;
  } else {
    return false;
  }
}

function  elevarAlCuadrado ( num )  {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: ¡No es razón cuadrada!
  // Tu codigo:
  return Math.pow (num, 2);
  
}

function  elevarAlCubo ( num )  {
  // Devuelve el valor de "num" elevado al cubo
  // Tu codigo:
  return Math.pow (num , 3);
}

function elevar ( num ,  exponente )  {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu codigo:
  return Math.pow (num, exponente);
  
}

function  redondearNumero ( num )  {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu codigo:
  return Math.round(num);
  
}

function  redondearHaciaArriba ( num )  {
  // Redondea "num" hacia arriba (al proximo entero) y devuélvelo
  // Tu codigo:
  return Math.ceil(num);
  
}

function  numeroRandom ( )  {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  return Math.random ();
}

function  esPositivo ( numero )  {
  //La funcion va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo.
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el numero es 0, devuelve false
  if (numero === 4) {
  return true;
  } else if (numero > 4) {
    return "Es positivo";
  } else {
    return "Es negativo";
  }
}

function  agregarSimboloExclamacion ( str )  {
  // Agrega un símbolo de exclamación al final de la cadena "str" ​​y devuelve una nueva cadena
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu codigo:
  return str + '!';
}

function  combinarNombres ( nombre ,  apellido )  {
  // Devuelve "nombre" y "apellido" combinados en una cadena y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu codigo:
  var combinar =  nombre + '' + apellido;
  return combinado;
}

function  obtenerSaludo ( nombre )  {
  // Toma la cadena "nombre" y concatena otra cadena en la cadena para que tome la siguiente forma:
  // "Martín" -> "¡Hola Martín!"
  // Tu codigo:
return 'Hola' + nombre + '!';
  
  
}

function  obtenerAreaRectangulo ( alto ,  ancho )  {
  // Retornar el area de un rectangulo teniendo su altura y ancho
  // Tu codigo:
  return alto * ancho;
}


function  retornarPerimetro ( lado ) {
  //Escibe una función a la cual recibe el valor del lado de un cuadrado y devuelve su perímetro.
  //Escribe tu codigo aqui
  return lado * 4;
}


function  areaDelTriangulo ( base ,  altura ) {
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu codigo aqui
  return (base * altura) /2;
}


function  deEuroAdolar ( euro ) {
  //Supongamos que 1 euro equivale a 1,20 dólares. Escribe un programa que
  //como parametro un numero de euros y calcule el cambio en dolares.
  //Escribe tu codigo aqui
  return euro * 1,20;
}


function  esVocal ( letra ) {
  //Escriba una función que reciba una letra y, si es una voz, muestre el mensaje “Es vocal”.
  //Verificar si el usuario ingresó una cadena de más de un carácter, en ese caso, informarle
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu codigo aqui
  if (letra.longth > 1) {
    return 'Datos incorrectos';
  }
  if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
    return 'Es vocal';
  } else {
    return 'Datos incorrectos';
  }
}



// No modificar nada debajo de esta linea
// --------------------------------

módulo_exportaciones  =  {
  nuevacadena ,
  nuevoNum ,
  nuevoBool ,
  nuevaResta ,
  nuevaMultiplicacion ,
  nuevoMódulo ,
  devolverString ,
  tienenMismaLongitud ,
  hijoIguales ,
  menosQueNoventa ,
  alcaldeQueCincuenta ,
  suma ,
  resto ,
  dividir ,
  multiplicar ,
  obtenerResto ,
  esPar ,
  esImpar ,
  elevarAlCuadrado ,
  elevaAlCubo ,
  elevar ,
  redondearNúmero ,
  redondearHaciaArriba ,
  numeroRandom ,
  esPositivo ,
  agregarSimboloExclamacion ,
  combinarnombres ,
  obtenerSaludo ,
  obtenerAreaRectangulo ,
  retornarPerimetro ,
  areaDelTriangulo ,
  deEuroDólar ,
  esVocal ,
} ;