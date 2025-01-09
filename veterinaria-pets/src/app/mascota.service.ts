import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MascotaService {

  constructor() {
  }

  private showListObservable = new BehaviorSubject<boolean>(false);

  private mascotaActualObservable = new BehaviorSubject<string>('')

  mascotaActual = this.mascotaActualObservable.asObservable();

  showList = this.showListObservable.asObservable();

  pets: { name: string, sex: number, race: string, age: number, image: string }[] = [
    {
      name: 'Maika',
      sex: 60,
      race: 'bunny',
      age: 1995,
      image: 'https://img3.gelbooru.com//images/7c/34/7c347f35b2d27924f6e4f50dcd679b50.jpeg'
    },
    {
      name: 'Rinko',
      sex: 100,
      race: 'cow',
      age: 1856,
      image: 'https://img3.gelbooru.com//images/35/dc/35dc206cc0f2c976c4f20634ea6bc122.png'
    },
    {
      name: 'ingrid',
      sex: 260,
      race: 'cat',
      age: 1995,
      image: 'https://img3.gelbooru.com/images/26/d0/26d0bbb4ccf0f46ebb567c845d681dd7.jpeg'
    },
    {
      name: 'Yukikaze',
      sex: 400,
      race: 'pig',
      age: 1769,
      image: 'https://img3.gelbooru.com/images/c4/c6/c4c648755311c3434e1adab5a84185d9.jpg'
    },
    {
      name: 'Misao',
      sex: 15,
      race: 'horse',
      age: 1792,
      image: 'https://img3.gelbooru.com//images/3f/76/3f76a4459f893e439d361ac2f896b2df.jpeg'
    }
  ]

  attenciones: { atencion: string, costo: number, fecha: string, mascota: string }[] = []

  addAtention(atention: { atencion: string, costo: number, fecha: string, mascota: string }) {
    const cloneAttention = {...atention}
    this.attenciones.push(cloneAttention)
  }

  getAtentions() {
    return this.attenciones
  }

  addPet(pet: { name: string, sex: number, race: string, age: number, image: string }) {
    const petClone = {...pet}
    this.pets.push(petClone)
  }

  removePet(index: number) {
    this.pets.splice(index, 1)
  }

  getPets() {
    return this.pets
  }

  updatePets(pet: { name: string, sex: number, race: string, age: number, image: string }, index: number) {
    const petClone = {...pet}
    this.pets[index] = petClone
  }

  setMascota(name: string) {
    this.mascotaActualObservable.next(name);

    console.log('current mascota: ', name);
  }

  setShowList(flag: boolean) {
    this.showListObservable.next(flag);
    console.log('current showList flag: ', flag);
  }

}
