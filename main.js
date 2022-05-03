"use strict";
//Se definen las variables
let esSuperman = true;
let esBatman;
let esAcuaman = true;
if (esSuperman) {
    console.log("Estamos salvados");
}
else {
    console.log("Ooops! ohhh");
}
esSuperman = convertirClark();
if (esSuperman) {
    console.log("Estamos salvados");
}
else {
    console.log("Ooops! ohhh");
}
function convertirClark() {
    return false;
}
