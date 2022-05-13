import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  listadoPeliculas : [] | any = [];
  peliculaParaMostrar:Pelicula | any;
  
  constructor(private db : FirestoreService) {

    this.peliculaParaMostrar = new Pelicula(0,'El Cabellero de la noche','Accion','13/08/2008',1500000,'https://image.tmdb.org/t/p/original/tSIH3DTA4oFQDhPaJgHxxQZoqHh.jpg','Christian Bale');

    //this.listadoPeliculas= [
      // {id:1, nombre: "It", tipo: "Terror", fechaEstreno:"18/11/1990", cantidadPublico:500, fotoPelicula:"https://es.web.img3.acsta.net/medias/nmedia/18/87/80/19/19961693.jpg"},
      // {id:2, nombre: "Milagros inesperados", tipo: "Drama", fechaEstreno:"18/02/2000", cantidadPublico:1000, fotoPelicula:"https://pelisenhd.net/wp-content/uploads/2020/11/1EFS40uFzv5ZVLSpu3xqYqnou67.jpg"},
      // {id:3, nombre: "Matrix", tipo: "Ficción", fechaEstreno:"23/06/1999", cantidadPublico:30000, fotoPelicula:"https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/950/public/media/image/2016/11/matrix.jpg?itok=y_D1-7f-"}
    //];

   }

  ngOnInit(): void {
    this.getPeliculas();
  }

  tomarPeliculaParaDetalle(peliculaMostrar: Pelicula){
    this.peliculaParaMostrar = peliculaMostrar;
  }

  getPeliculas(){
    this.db.getCollection('peliculas').then( (ref:any) => ref.subscribe((listadoRef:any) => {
      listadoRef.forEach((element : any) => {
        console.log(element.payload.doc.data());
        this.listadoPeliculas.push(element.payload.doc.data());
      });
     }));
  }

}
