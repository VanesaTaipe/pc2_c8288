class UsuarioBase {
    constructor(public name:string,public correo:string,public role:string) {   
    }
    verPermisos(role:string){console.log(`El role es ${role}`)}
}
class Admin extends UsuarioBase {
    
constructor(role:string){super(role)}
 gestionarUsario(item:string): void { }
}
class SuperAdmin extends Admin{

gestionarSistema(item:string):void{}
}
class GestordePermisos< T extends UsuarioBase>{
    private permisos:T[]=[]
    constructor(permiso:T){this.permisos}
    verPermisos():T[]{
        return [...this.permisos]
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
