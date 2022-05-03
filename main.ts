
//Se definen las variables
let esSuperman: boolean = true;
let esBatman: boolean;
let esAcuaman: boolean = true;

if (esSuperman){
  console.log("Estamos salvados");
}else{
  console.log("Ooops! ohhh");
}

esSuperman = convertirClark();

if (esSuperman){
  console.log("Estamos salvados");
}else{
  console.log("Ooops! ohhh");
}

function convertirClark(){
  return false;
}
