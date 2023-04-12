import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent {

  @ViewChild('txtTermino') txtTermino!: ElementRef<HTMLInputElement>;

  constructor(private gifsServices: GifsService) {

  }

  buscar() {
    const valor = this.txtTermino.nativeElement.value;
    if( valor.trim().length === 0){
      return;
    }

    this.txtTermino.nativeElement.value = '';

    this.gifsServices.buscarGifs(valor);

  }
}
