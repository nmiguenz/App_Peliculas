import { FirestoreService } from 'src/app/services/firestore.service';
import { Pelicula } from 'src/app/clases/pelicula';
import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/clases/actor';

@Component({
  selector: 'app-actor-pelicula',
  templateUrl: './actor-pelicula.component.html',
  styleUrls: ['./actor-pelicula.component.css']
})
export class ActorPeliculaComponent implements OnInit {

  listadoPeliculas : Pelicula[] = [];
  actorParaMostrar : Actor | any;
  datosPais : {} | any;
  pantalla = true;
  detalleActor : Actor | any;

  constructor(private db : FirestoreService) { }

  ngOnInit(): void {
  }

  
  tomarActorParaMostrar(data: any){
    this.actorParaMostrar = data.actor;

    
    switch (data.accion) {
      case 'peliculas':
        this.peliculasActor(this.actorParaMostrar.apellido);
        break;
      case 'pais':
        this.nacionalidadActor(this.actorParaMostrar);
        break;
      case 'actor':
        this.datosActor(this.actorParaMostrar);
        break;
    }
      // let nombreCompleto: string = this.actorParaMostrar.apellido;

  }

  peliculasActor(actor : string){
    this.db.getCollectionByField('peliculas', '==', 'actor.apellido', actor).then((response:any)=>{
      response.subscribe((resRef: any) =>{
        this.listadoPeliculas = resRef
        });
      });
  }

  nacionalidadActor(actor : Actor){
    this.datosPais = actor.nacionalidad;
  }

  datosActor(actor : Actor){
    this.detalleActor = actor;
  }

}
