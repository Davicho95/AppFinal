import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-buscar-pais',
  templateUrl: './buscar-pais.component.html',
  styleUrls: ['./buscar-pais.component.css']
})
export class BuscarPaisComponent {
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  @Input() placeholder: string = '';

  debounce: Subject<string> = new Subject();

  termino: string = "";

  ngOnInit(): void {
    this.debounce
      .pipe(debounceTime(500))
      .subscribe(termino => {
        this.onDebounce.emit(termino);
        //this.onEnter.emit(this.termino);
      })
  }

  Buscar() {
    this.onEnter.emit(this.termino);
  }

  teclaPresionada() {
    this.debounce.next(this.termino);
  }
}
