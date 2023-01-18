import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';


@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})

export class ContadorComponent implements OnInit {

  //Propiedades
  nombre : string = "Armando";

  //Objecto con tipo de dato
  persona : Persona = {
    nombre: "Armando",
    edad: 30
  };

  numero : number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  onAdd (){
    this.numero++;
  }

  onDecres() {
    if(this.numero != 0)
      this.numero--;
  }

}
