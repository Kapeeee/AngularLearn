(function () {
    var retirarDinero = function (montoRetirar) {
        var dineroAcutal = 1000;
        console.log('Hola Mundo');
        return new Promise(function (resolve, reject) {
            if (montoRetirar > dineroAcutal) {
                reject('No hay suficientes fondos');
            }
            else {
                dineroAcutal -= montoRetirar;
                resolve(dineroAcutal);
            }
        });
    };
    retirarDinero(1500)
        .then(function (montoActual) { return console.log("Me queda " + montoActual); })["catch"](function (error) { return console.warn(error); });
})();
