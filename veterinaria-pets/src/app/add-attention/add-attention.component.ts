import {Component, inject} from '@angular/core';
import {MascotaService} from "../mascota.service";
import {FormsModule, NgForm, ReactiveFormsModule} from "@angular/forms";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-add-attention',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgClass
  ],
  templateUrl: './add-attention.component.html',
  styleUrl: './add-attention.component.css'
})
export class AddAttentionComponent {
  private mascotaService = inject(MascotaService);

  currentDate: string = new Date().toLocaleDateString();


  newAtencion= {
    atencion: '',
    costo: 0,
    fecha: this.currentDate,
    mascota: ''
  }


  addAtention(atencionForm: NgForm) {
    if (atencionForm.valid) {
      const atencion = {...this.newAtencion};
      this.mascotaService.addAtention(atencion);
    }
  }

  ngOnInit() {
    this.mascotaService.mascotaActual.subscribe(name=>{
      this.newAtencion.mascota = name;
    })
  }

}
