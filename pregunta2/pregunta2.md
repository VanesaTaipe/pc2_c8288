Al crear UsuarioBase  es que contenga  name:string,public correo:string,public role:String,
la idea es identificar el role que cada usuarioBase tiene asi se pueda ser el pérmiso.
verPermisos(role:string){console.log(`El role es ${role}`)} Nos ayuda a saber que role cumple depende  de  ello
se puede saber el permiso que tiene.

class GestordePermisos< T extends UsuarioBase>{
    private permisos:T[]=[]
    constructor(permiso:T){this.permisos}
    verPermisos():T[]{
        return [...this.permisos]//
    }
    //Permisos para el Admin para agregar
    gestionarUsuario(permiso:T):void{
        this.permisos.push(permiso)
    }
    // Permisos para el superAdmin, puede eliminar
    gestionarSistema(permiso:T):void{
        this.permisos=this.permisos.filter((i)=>i!==permiso)
    }   
}

* verPermisos() ayuda a saber role cumple y asi pueda realizar un cambio.
* gestionarUsuario(permiso:T) ayuda a que administrador pueda agregar nuevos usuarios
* gestionarSistema(permiso:T) ayuda a que el superadmin pueda eliminar los usuarios