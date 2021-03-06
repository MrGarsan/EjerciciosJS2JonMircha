// 5) Programa una función que invierta los caracteres de una cadena de texto
console.log("Ejercicio 5");

function alreves(texto) {
  let i = texto.length;
  let textoInvertido =  "";
  
  for(i; i >= 0; i--){
    textoInvertido = textoInvertido + texto.charAt(i);
    
  }
  return console.log(`El texto original es el siguiente: ${texto}.
Y luego de la función queda así:
${textoInvertido}`);
}

alreves("Hola Mundo");

// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo.

console.log("Ejercicio 6");

function contador(texto,palabra) {
  
  let expReg = new RegExp(palabra,"ig")
  expRegCon = texto.match(expReg);
  console.log(`El texto de la lectura:
${texto}.
La palabra a buscar es:
${palabra}

Se encuentra ${expRegCon.length} veces dentro del texto.`);
  
}

contador("Las clases con Jon Mircha son clases profesionales y clases para todos","clases");

// 7) Programa una función que valide si una palabra es un palindromo.

console.log("Ejercicio 7");

function palindromo(palabra) {
  
  //Hacer mimuscula la palabra
  let palabra1 = palabra.toLowerCase();
  
  //Hacerla al revés
  let i = palabra1.length;
  let palabraAlreves =  "";
  
  for(i; i >= 0; i--){
    palabraAlreves = palabraAlreves + palabra1.charAt(i);
  }
  
  //Verificar que sea un palindromo.
  if(palabra1 === palabraAlreves) {
    console.log(`La palabra ${palabra1} es un Palindromo. Ya que al revés se escribiría ${palabraAlreves}.`);
    return true;
  } else {
    console.log(`La palabra ${palabra1} no es un Palindromo. Ya que al revés se escribiría ${palabraAlreves}.`);
    return false;
  }
  
}
palindromo("Sosos");

// 8) Programar una función que elimine un cierto patron de caracteres en un texto dado

console.log("Ejercicio 8");
//Error hice el ejercicio mal jaja pero lo dejo porque igual funciona este, pero con arreglos.
/*
function textoPatron(patron, ...texto) {
  patronReg = new RegExp(patron,"ig");
  
  let cadenaRecortada = texto.map(function (elemento) {
     return elemento.replace(patronReg,"");
  });
  
  console.log(`La cadena es la siguiente:
${texto}.
El patron a eliminar es el siguiente:
${patron}.
La cadena quedaría así: 
${cadenaRecortada}.`);

  
}

textoPatron("parada","parada1","parada2" ,"parada3","parada4","parada5","parada6");*/

function patronTexto (texto,patron){
  patronReg = new RegExp(patron, "ig");
  
  textoSinPatron = texto.replace(patronReg,"");
  console.log(`El texto original es:
${texto}.
El patron a eliminar es:
${patron}.
El resultado es el siguiente:
${textoSinPatron}.`);
}

patronTexto("abc1, abc2, abc3, abc4 y abc5","abc");