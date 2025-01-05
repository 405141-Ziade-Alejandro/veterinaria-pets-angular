import {Component, Input} from '@angular/core';
import {OpacidadComponent} from "../opacidad/opacidad.component";

@Component({
  selector: 'app-pet-card',
  standalone: true,
  imports: [
    OpacidadComponent
  ],
  templateUrl: './pet-card.component.html',
  styleUrl: './pet-card.component.css'
})
export class PetCardComponent {

  opacity:number = 1;

  @Input() pet: any

  // pet = {
  //   name: 'Rinko chan',
  //   race: 'Cow',
  //   sex: 99,
  //   age: '20',
  // }

  more() {
    ++this.pet.sex
  }

  onOpacityChange(newOpacity: number) {
    this.opacity = newOpacity;
  }
}
