import { Actor } from 'src/app/clases/actor';

export class Pelicula {
    id:string;
    nombre:string;
    tipo:string;
    fechaEstreno:string;
    cantidadPublico:number;
    fotoPelicula:string;
    actor: Actor;

    public constructor(id:string,nombre:string,tipo:string,fechaEstreno:string,cantidadPublico:number,fotoPelicula:string, actor:Actor)
    {
        this.id=id;
        this.nombre=nombre;
        this.tipo=tipo;
        this.fechaEstreno=fechaEstreno;
        this.cantidadPublico=cantidadPublico;
        this.fotoPelicula=fotoPelicula;
        this.actor = actor;
    }

}