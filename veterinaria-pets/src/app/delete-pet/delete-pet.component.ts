import {Component, inject, Input} from '@angular/core';
import {MascotaService} from "../mascota.service";

@Component({
  selector: 'app-delete-pet',
  standalone: true,
  imports: [],
  templateUrl: './delete-pet.component.html',
  styleUrl: './delete-pet.component.css'
})
export class DeletePetComponent {
  @Input() index: any

  private mascotaService = inject(MascotaService)

  deletePet() {
    this.mascotaService.removePet(this.index)
  }
}
