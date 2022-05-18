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

  constructor(private db : FirestoreService) { }

  ngOnInit(): void {
  }

  tomarActorParaMostrar(actor: Actor){
    this.actorParaMostrar = actor;
    
    if(this.actorParaMostrar){
      let nombreCompleto: string = this.actorParaMostrar.apellido;
      
      this.peliculasActor(nombreCompleto);
      this.nacionalidadActor(this.actorParaMostrar)

    }
    else
      console.log('No están bien cargados los datos');
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

}
