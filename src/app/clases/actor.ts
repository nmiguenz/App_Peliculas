export class Actor {

    nombre: string = '';
    apellido: string = '';
    alias : string = '';
    edad: number = 0;
    sexo:string = '';
    nacionalidad: string = '';

    constructor(name:string, surname:string, username:string, age:number, sex:string, nationality:string){
        this.nombre = name;
        this.apellido = surname;
        this.alias = username
        this.edad = age;
        this.sexo = sex;
        this.nacionalidad = nationality;
    }

}
