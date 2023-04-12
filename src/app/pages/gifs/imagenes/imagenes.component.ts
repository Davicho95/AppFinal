import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.component.html',
  styleUrls: ['./imagenes.component.css']
})
export class ImagenesComponent {
  get resultados() {
    return this.gifsService.resultados;
  }

  constructor(private gifsService: GifsService) {

  }
}
