
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Actor } from 'src/app/clases/actor';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.css']
})
export class ActorAltaComponent implements OnInit {

  nacionalidad : {} | any;

  formGroup :  FormGroup | any;

  constructor(private fb : FormBuilder, public db : FirestoreService) { 
    this.formGroup = this.fb.group({
      'nombre' : '',
      'apellido' : '',
      'alias': '',
      'edad' :'',
      'sexo' : '',
      'nacionalidad' : ''
    });
  }

  ngOnInit(): void {}

  obtenerNacionalidadActor(paisSeleeccionado : any){
    this.nacionalidad = paisSeleeccionado;
    this.formGroup.controls.nacionalidad.setValue(paisSeleeccionado.translations.spa.common); 
  }

  async altaActor(){
    let actor : Actor = this.formGroup.value;
    
    let res = await this.db.alta(actor,'Actor');
    
    if(res){
      this.formGroup.reset();
    }

  }
  
}
