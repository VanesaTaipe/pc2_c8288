class DatosPersonales implements Datos {
    constructor(
        public name:string,
        public correo_electronico:string,
        public numero:number,
        public edad:number,
        public tipo:string){} 
    
    tipos=():Validacion=>{

       throw new Error 
    }
}

const user= new validar("Vanesa","example@gmail.com",987564321,18)