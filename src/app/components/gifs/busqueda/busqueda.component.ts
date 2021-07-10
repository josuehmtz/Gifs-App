import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {

 @ViewChild('txtbuscar')  txtBuscar!: ElementRef;

  constructor(private gifsservice: GifsService) {}
  buscar(){
    const valor = this.txtBuscar.nativeElement.value;
     if ( valor.trim().lenght == 0) {
       return;
     }
    this.gifsservice.buscarGifs( valor );
    this.txtBuscar.nativeElement.value = '';
  }

}
