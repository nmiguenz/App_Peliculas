import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})
export class TablaPeliculaComponent implements OnInit {

  @Input() inputTablaPeliculas!: Pelicula[];
  @Output() peliculaSeleccionada : EventEmitter<any>= new EventEmitter<any>(); 

  constructor() { }

  ngOnInit(): void {
  }

  mostrarDetallePelicula(detallePelicula : Pelicula){
    this.peliculaSeleccionada.emit(detallePelicula)
  }

}
