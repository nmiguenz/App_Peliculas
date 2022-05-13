import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Actor } from 'src/app/clases/actor';
import { Pelicula } from 'src/app/clases/pelicula';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-pelicula-alta',
  templateUrl: './pelicula-alta.component.html',
  styleUrls: ['./pelicula-alta.component.css']
})
export class PeliculaAltaComponent implements OnInit {

  peliculaGroup :  FormGroup | any;

  actor : {} | any;

  constructor(private fb : FormBuilder, private srv: FirestoreService) {
    this.peliculaGroup = this.fb.group({
      'nombre' : '',
      'tipo' : '',
      'cantidadPublico': '',
      'fechaEstreno' :'',
      'fotoPelicula' : '',
      'actor' : ''
    });
   }

  ngOnInit(): void {
    
  }

  obtenerActorSeleccionado(actorSeleccionado : Actor){
    this.actor = actorSeleccionado;
    this.peliculaGroup.controls.actor.setValue(actorSeleccionado.nombre + ' ' + actorSeleccionado.apellido); 
  }

  async altaPelicula(){
    let pelicula : Pelicula = this.peliculaGroup.value;

    let res = await this.srv.alta(pelicula, 'peliculas')

    if(res){
      this.peliculaGroup.reset();
    }
  }

}
