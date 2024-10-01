interface Datos{
    nombre:string,
    correo_electronico:string,
    numero_telefono:number,
    edad:number
}
interface REgistroExitoso{
    status:"sucess";
    message:string
}
interface ErrordeValidacion{
    status:"error";
    message:"error";
    detalles:string[]
}
type Validacion=REgistroExitoso|ErrordeValidacion