import { HttpService } from './../../services/http.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit {

  public paises:[] | any = [];
  public pelis:[] | any = [];
  @Output() paisSeleccionado : EventEmitter<any>= new EventEmitter<any>(); 

  constructor(private http: HttpService) {
     http.getPaises().subscribe((listaPaises)=>{
      this.paises = listaPaises;

      console.log(this.paises);
    });

    // http.getPeliculas().subscribe((pelissss =>{
    //   this.pelis = pelissss;

    //   console.log(this.pelis);
    // }))
  }

  ngOnInit(): void {}
  

  getPaisSeleccionado(pais: [] | any){
    this.paisSeleccionado.emit(pais);
  }


}
