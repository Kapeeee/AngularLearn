(()=>{

        const sumar = (a:number,b:number,c:number):number =>a+b;
        
        const nombre = ():string => 'Hola Patrik';

        const obtenerSalario = ():Promise<string> =>{

            return new Promise((resolve,reject)=>{
                resolve('Patrik');
            })

        }

        obtenerSalario().then( a=> console.log(a.toUpperCase))

})();