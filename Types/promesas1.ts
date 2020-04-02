(() =>{

 
console.log('Start');

const prom1  = new Promise ((resolve,reject) =>{

    setTimeout(()=>{
        reject("se termino el Timeout");
    }),4000;

});

prom1.then(mensaje => console.log(mensaje))
     .catch(err => console.warn(err));

console.log('End');

})();