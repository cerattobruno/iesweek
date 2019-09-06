import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-disertantes',
  templateUrl: './disertantes.component.html',
  styleUrls: ['./disertantes.component.css']
})
export class DisertantesComponent implements OnInit {

  disertantes: any[];

  constructor() { }

  ngOnInit() {
    this.disertantes = ['Leo Messi', 'Diego Maradona', 'Oscar Ruggeri'];
  }

}
