import {Component, inject} from '@angular/core';
import {MascotaService} from "../mascota.service";
import {FormsModule, NgForm, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-add-pet',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './add-pet.component.html',
  styleUrl: './add-pet.component.css'
})
export class AddPetComponent {
  //services

  private mascotaService = inject(MascotaService);

  //variables

  newPet= {
    name: '',
    sex:0,
    race:'',
    age:0,
    image:''
  }

  //methods

  addPet(myForm: NgForm) {
    if (myForm.valid){
      const petClone = {...this.newPet}

      this.mascotaService.addPet(petClone)

      this.newPet.name = '';
      this.newPet.race = '';
      this.newPet.image = '';
      this.newPet.age = 0;
      this.newPet.sex = 0;



    } else {
      console.log("something wrong buddy")
    }
  }
}
