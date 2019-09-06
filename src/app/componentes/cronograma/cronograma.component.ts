import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cronograma',
  templateUrl: './cronograma.component.html',
  styleUrls: ['./cronograma.component.css']
})
export class CronogramaComponent implements OnInit {

  carreras: any[];
  

  constructor() { }

  ngOnInit() {
    this.carreras = ['Diseño de Indumentaria', 'Diseño Gráfico', 'Diseño Digital',
    'Desarrollo de Software', 'Relaciones Públicas','Gestión de las Organizaciones',
     'Periodismo Integral y Deportivo'];
  }

}
