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
  disertante4: Disertante;
  disertante5: Disertante;
  disertante6: Disertante;

  constructor() { }

  ngOnInit() {
    this.disertante1 = new Disertante('Angel', 'Letteriello', '../../../assets/fotos/disertante_angel.jpg', 'Presentación del libro "Un futuro posible" y una charla magistral, en la Sede IES. Entrada libre y gratuita. Cupos limitados.', 'Lunes 4/11', 'Sede IES, Tucumán 2721');
    this.disertante2 = new Disertante('Brenda', 'Mignola', '../../../assets/fotos/disertante_brenda.jpg', 'Charla "Asesoramiento de imagen y dress code", en la Sede IES. Entrada libre y gratuita. Cupos limitados.', 'Martes 5/11', 'Sede IES, Tucumán 2721');
    this.disertante3 = new Disertante('Pedro', 'Prez', '../../../assets/fotos/disertante_pedroprez.jpg', 'Charla "Programate para emprender: elegí tu propia aventura". Entrada libre y gratuita. Cupos limitados.', 'Jueves 7/11', 'Sala UPCN');
    this.disertante4 = new Disertante('Dolores', 'Arriola', '../../../assets/fotos/disertante_dolores.jpg', 'Charla "Evolución de las RRPP y nuevas prácticas profesionales". Entrada libre y gracias, cupos limitados.', 'Miércoles 6/11', 'Sede IES, Tucumán 2721');
    this.disertante5 = new Disertante('Macarena', 'Agostini', '../../../assets/fotos/disertante_macarena.jpg', 'Charla "Evolución de las RRPP y nuevas prácticas profesionales". Entrada libre y gracias, cupos limitados.', 'Miércoles 6/11', 'Sede IES, Tucumán 2721');
    this.disertante6 = new Disertante('Rocío', 'Peña', '../../../assets/fotos/disertante_rocio.jpg', 'Charla "Planes de Negocios: hoy un sueño, mañana tu empresa". Entrada libre y gratuita. Cupos limitados.', 'Lunes 4/11', 'Sede IES, Tucumán 2721');

    this.disertantes = [this.disertante1,this.disertante4, this.disertante6, this.disertante5,this.disertante2,this.disertante3];
  }

}
