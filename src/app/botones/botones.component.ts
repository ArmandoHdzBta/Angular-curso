import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html',
  styleUrls: ['./botones.component.css'],
})
export class BotonesComponent implements OnInit {
  bgColor: string = '';

  constructor() {}

  ngOnInit(): void {}

  setBgColorAzul() {
    this.bgColor = 'bg-primary';
  }

  setBgColorRojo() {
    this.bgColor = "bg-danger";
  }

  setBgColorVerde() {
    this.bgColor = "bg-success";
  }
}
