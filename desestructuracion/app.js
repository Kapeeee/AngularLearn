(function () {
    var avenger = {
        nombre: 'steve',
        clave: 'capitan america',
        poder: 'droga'
    };
    var extraer = function (_a) {
        var nombre = _a.nombre, poder = _a.poder;
        // const {nombre,clave,poder} = avenger;
        console.log(nombre);
        console.log(poder);
    };
    // extraer (avenger);
    // console.log(poder);
    var avengers = ['Thor', 'IronMan', 'Spiderman'];
    var thor = avengers[1], mano = avengers[2];
    // console.log(thor,mano);
    var extraerArr = function (_a) {
        var martillo = _a[0], hierro = _a[1], araña = _a[2];
        // const {nombre,clave,poder} = avenger;
        console.log(martillo);
        console.log(hierro);
        console.log(araña);
    };
    extraerArr(avengers);
})();
