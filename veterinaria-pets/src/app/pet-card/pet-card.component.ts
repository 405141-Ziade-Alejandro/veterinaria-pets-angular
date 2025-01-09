import {Component, inject, Input} from '@angular/core';
import {OpacidadComponent} from "../opacidad/opacidad.component";
import {AgePipe} from "../age.pipe";
import {MascotaService} from "../mascota.service";
import {DeletePetComponent} from "../delete-pet/delete-pet.component";

@Component({
  selector: 'app-pet-card',
  standalone: true,
  imports: [
    OpacidadComponent,
    AgePipe,
    DeletePetComponent
  ],
  templateUrl: './pet-card.component.html',
  styleUrl: './pet-card.component.css'
})
export class PetCardComponent {

  private atencionService = inject(MascotaService)

  opacity:number = 1;

  @Input() pet: any

  @Input() index: any

  more() {
    ++this.pet.sex
  }

  onOpacityChange(newOpacity: number) {
    this.opacity = newOpacity;
  }

  addAtencion() {
    this.atencionService.setMascota(this.pet.name)
    this.atencionService.setShowList(false);
  }


}
