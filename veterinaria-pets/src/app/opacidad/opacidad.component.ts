import {Component, EventEmitter, Output, output} from '@angular/core';

@Component({
  selector: 'app-opacidad',
  standalone: true,
  imports: [],
  templateUrl: './opacidad.component.html',
  styleUrl: './opacidad.component.css'
})
export class OpacidadComponent {
  @Output() opacityChange: EventEmitter<number> = new EventEmitter<number>();

  onRangeChange(event:any) {
    const opacity = event.target.valueAsNumber

    this.opacityChange.emit(opacity)
  }
}
