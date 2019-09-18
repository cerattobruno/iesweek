import { Component, OnInit } from '@angular/core';
import { Disertante } from 'src/app/models/disertante.model';

@Component({
  selector: 'app-disertantes',
  templateUrl: './disertantes.component.html',
  styleUrls: ['./disertantes.component.css']
})
export class DisertantesComponent implements OnInit {

  disertantes: Array<Disertante> = [];

  disertante1: Disertante;
  disertante2: Disertante;
  disertante3: Disertante;

  constructor() { }

  ngOnInit() {
    this.disertante1 = new Disertante('Lionel', 'Messi', '../../../assets/disertante2.jpg');
    this.disertante2 = new Disertante('Luis', 'Suarez', '../../../assets/disertante2.jpg');
    this.disertante3 = new Disertante('Neymar', 'Junior', '../../../assets/disertante2.jpg');

    this.disertantes = [this.disertante1, this.disertante2, this.disertante3];
  }

}
