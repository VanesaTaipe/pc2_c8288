custm.d.ts
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
Este es para validar Validacion consta de una union de REgistroexitoso y Errorde Validacion. Esta union ayuda a que sea facil la identificacion de la validacion.