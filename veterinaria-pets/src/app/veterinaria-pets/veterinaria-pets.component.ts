import { Component } from '@angular/core';
import {PetCardComponent} from "../pet-card/pet-card.component";

@Component({
  selector: 'app-veterinaria-pets',
  standalone: true,
  imports: [
    PetCardComponent
  ],
  templateUrl: './veterinaria-pets.component.html',
  styleUrl: './veterinaria-pets.component.css'
})
export class VeterinariaPetsComponent {

}
