import { Component, OnInit } from '@angular/core';
import { Galeria } from '../../models/galeria.models';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {
public galeria: Array <Galeria> = [];
public galeria1: Galeria;
public galeria2: Galeria;
public galeria3: Galeria;
  constructor(
    
  ) { }

  ngOnInit() {
    this.galeria1 = new Galeria("../../../assets/disertante.png","prueba");
    this.galeria2 = new Galeria("../../../assets/disertante2.jpg","prueba2");
    this.galeria3 = new Galeria("../../../assets/messi.jpg","prueba3");
    this.galeria = [this.galeria1, this.galeria2, this.galeria3];
  }

}
