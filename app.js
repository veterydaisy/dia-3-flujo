const eleccion = prompt("Hola, que area te gustaria seguir?,  front-end o  back-end");
let lenguaje = "";

if (eleccion == "front-end"){
     lenguaje  = prompt("que te gustaria aprender?,  para React o Vue");
}
else if (eleccion == "back-end"){
    lenguaje = prompt("que te gustaria aprender?,  C# o Java");
}
else{
    alert("Debe escribir una respuesta !!!");
}

const especialidadOFullstack= prompt ("escribe 1 para seguir especializandote en el area elegida o 2 para desarrollarte para convertirte en Fullstack");
if(especialidadOFullstack == 1){
    alert(`!sigue especializandote en ${lenguaje} para dominar el area de ${eleccion}`);
}else if(especialidadOFullstack == 2){
    alert(`es hora de comenzar a aprender otros lenguajes ademas de ${lenguaje} si quieres convertirte en Fullstack!`);
}else{
    alert("!no ingresaste un valor valido ");
}

let mensaje  = prompt("¿hay alguna otra tecnologia que te gustaria aprender? Escribe  'ok' en caso positivo");
while(mensaje === "ok"){
    let nuevaTecnologia = prompt("¿cúal?");
    alert(`${nuevaTecnologia} es realmente una tecnología muy interesante !`);
    mensaje = promt("¿hay alguna otra tecnología que te gustaria aprender ? Escribe 'ok' en caso positivo.");
}