import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {VeterinariaPetsComponent} from "./veterinaria-pets/veterinaria-pets.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, VeterinariaPetsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'veterinaria-pets';
}
