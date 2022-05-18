import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Actor } from 'src/app/clases/actor';
import { Pelicula } from 'src/app/clases/pelicula';
import { FirestoreService } from 'src/app/services/firestore.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Component({
  selector: 'app-pelicula-alta',
  templateUrl: './pelicula-alta.component.html',
  styleUrls: ['./pelicula-alta.component.css']
})
export class PeliculaAltaComponent implements OnInit {

  peliculaGroup :  FormGroup | any;
  actor : {} | any;
  imagenes : any[] = [];
  archivoImg : any;

  constructor(private fb : FormBuilder, private srv: FirestoreService, public fire : AngularFirestore, public storage: AngularFireStorage) {
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

    pelicula.actor = this.actor;
    pelicula.id = this.fire.createId();

    //Seccion subida de foto:
    if(this.archivoImg != ''){

      this.imagenes.push(this.archivoImg);
      await this.srv.uploadImage('peliculas',pelicula.id, this.archivoImg).then((srvUrlImagen:string | any) =>{
        pelicula.fotoPelicula = srvUrlImagen; 
      });
      
    }
    
    //Subida del objeto a Firestore
    let res = await this.srv.alta(pelicula, 'peliculas')

    if(res){
      //reset
      this.peliculaGroup.reset();
      this.archivoImg = null;
      this.imagenes = [];
    }  
    
  }

  //Obtengo la foto en la codificación aceptada por Storage
  obtnerImgBase64(event:any){  
    let archivos = event.target.files;   
    let reader = new FileReader();
    
    reader.readAsDataURL(archivos[0]);
    reader.onloadend = () => { 
      this.archivoImg = reader.result
    }
  }
  
  //Sube la foto a Storage de Firebase directamente (No se usa en esta app)
  cargarFoto(event:any){  

    let archivos = event.target.files;
    let reader = new FileReader();

    reader.readAsDataURL(archivos[0]);
    reader.onloadend = () => {
      this.imagenes.push(reader.result);
      this.srv.uploadImage('peliculas','lalalala',reader.result).then((srvUrlImagen:string | any) =>{
        console.log(srvUrlImagen);
      });

    }
  }


}
