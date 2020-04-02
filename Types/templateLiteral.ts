(function(){
    
    function getEdad(){
        return 100 +100+300;
    }


    const nombre = 'Patrik';
    const apellido = 'Pimentel'
    const edad = 33;


    const salida = `${nombre} ${apellido} (${edad + getEdad()})`;

    console.log(salida);
    

})();