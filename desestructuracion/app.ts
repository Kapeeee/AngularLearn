(() =>{

 const avenger = {
     nombre: 'steve',
     clave: 'capitan america',
     poder: 'droga'
 }

 const extraer = ({nombre,poder}:any) =>{
    // const {nombre,clave,poder} = avenger;
    console.log(nombre);
    console.log(poder);
 }


// extraer (avenger);


// console.log(poder);


    const avengers : string[] = ['Thor','IronMan','Spiderman'];

    const [,thor,mano] = avengers;    

    // console.log(thor,mano);


    const extraerArr = ([martillo,hierro,araña]:string[]) =>{
        // const {nombre,clave,poder} = avenger;
        console.log(martillo);
        console.log(hierro);
        console.log(araña);
     }

     extraerArr(avengers);
})();