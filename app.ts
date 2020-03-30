(() =>{

     const retirarDinero = (montoRetirar:number) =>{
            
        let dineroAcutal = 1000;
        console.log('Hola Mundo');
        return new Promise((resolve,reject)=>{
            if(montoRetirar > dineroAcutal){
                reject('No hay suficientes fondos');
            } else{
                dineroAcutal -= montoRetirar; 
                resolve(dineroAcutal);
            }
        });
     }


    retirarDinero(1500)
        .then (montoActual => console.log(`Me queda ${montoActual}`))
        .catch(error => console.warn(error));
})();