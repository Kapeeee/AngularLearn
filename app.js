(function () {
    //     const miFuncion = function ( a:string){
    //         return a.toUpperCase();
    //     }
    //     const miFuncionF = (a:string) => a.toUpperCase();
    // console.log(miFuncion('normal'));
    // console.log(miFuncionF('flecha'));
    // const sumarN = function ( a:number,b:number){
    //     return a+b;
    // }
    // const sumarF = (a:number,b:number) => a+b;
    // console.log(sumarN(1,2));
    // console.log(sumarF(4,2));
    var hulk = {
        nombre: 'hulk',
        smash: function () {
            setTimeout(function () {
                console.log(this.nombre + " SmasH!!!");
            }, 1000);
        }
    };
    hulk.smash();
})();
