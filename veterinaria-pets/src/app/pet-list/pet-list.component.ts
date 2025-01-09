import {Component, inject} from '@angular/core';
import {MascotaService} from "../mascota.service";
import {PetCardComponent} from "../pet-card/pet-card.component";

@Component({
  selector: 'app-pet-list',
  standalone: true,
  imports: [
    PetCardComponent
  ],
  templateUrl: './pet-list.component.html',
  styleUrl: './pet-list.component.css'
})
export class PetListComponent {
  //services
  private mascotaService = inject(MascotaService);

  //variables

  pets:{name:string,sex:number,race:string,age:number,image:string}[]=[];

  //methods

  ngOnInit(){
    this.pets = this.mascotaService.getPets();
  }

}
