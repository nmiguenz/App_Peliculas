import { FirestoreService } from 'src/app/services/firestore.service';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.css']
})
export class DetallePeliculaComponent implements OnInit {

  @Input() inputDetallePelicula : Pelicula | any;
  listadoPeliculas : Pelicula[] = [];
  peliculaInicial : Pelicula | any;

  constructor(private db : FirestoreService) { 
    this.obtenerPeliculaInicial();
  }

  ngOnInit(): void { }

  //Hardcode de la película inicial.
  obtenerPeliculaInicial(){
    this.db.getCollectionByField('peliculas', '==' , 'nombre' ,'Matrix').then((response:any)=>{
      response.subscribe((resRef: any) =>{
        this.inputDetallePelicula = resRef[0]
        });
      });
    }

}
