(function () {
    console.log('Start');
    var prom1 = new Promise(function (resolve, reject) {
        setTimeout(function () {
            reject("se termino el Timeout");
        }), 4000;
    });
    prom1.then(function (mensaje) { return console.log(mensaje); })["catch"](function (err) { return console.warn(err); });
    console.log('End');
})();
