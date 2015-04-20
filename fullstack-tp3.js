var salida = salida0 = salida1 = salida2 = "";
var numero = 45530;
for (i=1; i*i<=numero; i++) { 
    if (numero % i === 0) {
        salida1 = salida1 + String(i) + ", ";
        if (numero !== i*i)
            salida2 = numero/i + ", " + salida2;
    }
}
salida0 = salida1 + salida2;
salida = salida0.substring(0, salida0.length - 2);
console.log(salida);
