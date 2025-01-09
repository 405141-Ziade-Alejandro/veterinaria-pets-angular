import {Component, inject} from '@angular/core';
import {PetCardComponent} from "../pet-card/pet-card.component";
import {DecimalPipe} from "@angular/common";
import {TitleComponent} from "../title/title.component";
import {AttencionesComponent} from "../attenciones/attenciones.component";
import {MascotaService} from "../mascota.service";
import {FormsModule, NgForm, ReactiveFormsModule} from "@angular/forms";
import {PetListComponent} from "../pet-list/pet-list.component";
import {AddPetComponent} from "../add-pet/add-pet.component";

@Component({
  selector: 'app-veterinaria-pets',
  standalone: true,
  imports: [
    PetCardComponent,
    DecimalPipe,
    TitleComponent,
    AttencionesComponent,
    ReactiveFormsModule,
    FormsModule,
    PetListComponent,
    AddPetComponent
  ],
  templateUrl: './veterinaria-pets.component.html',
  styleUrl: './veterinaria-pets.component.css'
})
export class VeterinariaPetsComponent {

  private mascotaSercive = inject(MascotaService);


  show:boolean = false;

  load:boolean = false;

  progress:number = 0;

  newPet= {
    name: '',
    sex:0,
    race:'',
    age:0,
    image:''
  }

  pets:{name:string,sex:number,race:string,age:number,image:string}[]=[];
  unchecked: boolean = true;

  check() {
    this.mascotaSercive.setShowList(!this.show)
    this.unchecked = false;
  }

  simulateLoading() {
    const interval = setInterval(() => {
      if(this.progress<100){
        this.progress += 100/this.pets.length;
      } else {
        clearInterval(interval);
        this.load = true;
      }
    }, 500)
  }

  ngOnInit() {
    this.pets = this.mascotaSercive.getPets();

    this.mascotaSercive.showList.subscribe(flag=>{
      this.show = flag;
    })
    this.simulateLoading()
  }


  addPet(myForm: NgForm) {
    if (myForm.valid){
      const petClone = {...this.newPet}

      this.mascotaSercive.addPet(petClone)

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
