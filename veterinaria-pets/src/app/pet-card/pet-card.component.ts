import { Component } from '@angular/core';

@Component({
  selector: 'app-pet-card',
  standalone: true,
  imports: [],
  templateUrl: './pet-card.component.html',
  styleUrl: './pet-card.component.css'
})
export class PetCardComponent {

  pet = {
    name: 'Rinko chan',
    race: 'Cow',
    sex: 'over 100',
    age: '20',
  }
}
