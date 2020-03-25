(function () {
    function getEdad() {
        return 100 + 100 + 300;
    }
    var nombre = 'Patrik';
    var apellido = 'Pimentel';
    var edad = 33;
    var salida = nombre + " " + apellido + " (" + (edad + getEdad()) + ")";
    console.log(salida);
})();
