import { Component } from '@angular/core';
import {PetCardComponent} from "../pet-card/pet-card.component";
import {DecimalPipe} from "@angular/common";

@Component({
  selector: 'app-veterinaria-pets',
  standalone: true,
  imports: [
    PetCardComponent,
    DecimalPipe
  ],
  templateUrl: './veterinaria-pets.component.html',
  styleUrl: './veterinaria-pets.component.css'
})
export class VeterinariaPetsComponent {

  show:boolean = false;

  load:boolean = false;

  progress:number = 0;

  pets:{name:string,sex:number,race:string,age:string,image:string}[]=[
    {
      name: 'Maika',
      sex: 60,
      race: 'bunny',
      age: '24',
      image: 'https://img3.gelbooru.com//images/7c/34/7c347f35b2d27924f6e4f50dcd679b50.jpeg'
    },
    {
      name: 'Rinko',
      sex: 100,
      race: 'cow',
      age: '19',
      image: 'https://img3.gelbooru.com//images/35/dc/35dc206cc0f2c976c4f20634ea6bc122.png'
    },
    {
      name: 'ingrid',
      sex: 260,
      race: 'cat',
      age: '30',
      image: 'https://img3.gelbooru.com/images/26/d0/26d0bbb4ccf0f46ebb567c845d681dd7.jpeg'
    },
    {
      name: 'Yukikaze',
      sex: 400,
      race: 'pig',
      age: '16',
      image: 'https://img3.gelbooru.com/images/c4/c6/c4c648755311c3434e1adab5a84185d9.jpg'
    },
    {
      name: 'Misao',
      sex: 15,
      race: 'horse',
      age: '31',
      image: 'https://img3.gelbooru.com//images/3f/76/3f76a4459f893e439d361ac2f896b2df.jpeg'
    }
  ];

  check() {
    this.show = !this.show;
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
    this.simulateLoading()
  }

}
