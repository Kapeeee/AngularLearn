(() =>{

 
    const retirarDinero = ( montoRetirar:number):Promise<number> =>{
    
        let dineroActual = 1000;
        console.log('holamundo');
        return new Promise((resolve,reject)=>{
        
            if(montoRetirar>dineroActual){
                reject('No Hay Fondos Suficientes');
            }else{
                dineroActual -= montoRetirar;
                resolve(dineroActual);
            }
        })

    }

    retirarDinero(300)
        .then( montoActual => console.log(`Me queda ${montoActual}`))
        .catch(console.warn)
})();