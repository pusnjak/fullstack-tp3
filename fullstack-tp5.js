var entrada = ["uno", "dos", "tres", "cuatro"];

function reversa (arr) {
if (Array.isArray(arr) !== true) {
    return false;
    }
    else
    {
    var salida = [];
    for (var i=0; i<arr.length; i++) {
        salida.unshift(arr[i]);
        }
    entrada = salida;
    return true;
    }
}
