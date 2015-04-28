var entrada = ["palabra", "mayúscula", "estrafalario", "corta"];
var vocales = "aeiouáéíóúü";

var resultado = [];

for (var i=0; i<entrada.length; i++) {
    var cuantas = 0;
    for (var j=0; j<entrada[i].length; j++) {
        indice = vocales.indexOf(entrada[i].substr(j,1).toLowerCase());
        if (indice >= 0) {
            cuantas++;
        }
    }
    resultado.push(cuantas);
}

console.log(resultado);