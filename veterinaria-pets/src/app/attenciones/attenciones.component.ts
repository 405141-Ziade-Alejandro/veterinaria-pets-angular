import {Component, inject} from '@angular/core';
import {MascotaService} from "../mascota.service";
import {FormsModule, NgForm} from "@angular/forms";
import {IvaPipe} from "../iva.pipe";
import {NgClass} from "@angular/common";
import {AddAttentionComponent} from "../add-attention/add-attention.component";

@Component({
  selector: 'app-attenciones',
  standalone: true,
  imports: [
    FormsModule,
    IvaPipe,
    NgClass,
    AddAttentionComponent
  ],
  templateUrl: './attenciones.component.html',
  styleUrl: './attenciones.component.css'
})
export class AttencionesComponent {

  private mascotaService = inject(MascotaService);


  attenciones: {atencion:string, costo:number, fecha:string, mascota:string}[] = []




  loading: boolean = false;

  ngOnInit() {

    this.attenciones = this.mascotaService.getAtentions()


  }

  removeAtencion(id:number) {
    if (confirm("do you want to delete this record?")){

      this.loading = true;

      setTimeout(()=> {
        this.attenciones.splice(id,1)

        this.loading = false;
      },200)
    }
  }

  showList() {
    this.mascotaService.setShowList(true);
  }


}
