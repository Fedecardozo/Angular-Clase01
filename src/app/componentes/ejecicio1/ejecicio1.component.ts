import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejecicio1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ejecicio1.component.html',
  styleUrl: './ejecicio1.component.css',
})
export class Ejecicio1Component {
  title = 'ejercicio01';

  edad1 = 0;
  edad2 = 0;

  suma = 0;
  promedio = 0;

  calcular() {
    this.suma = this.edad1 + this.edad2;
    this.promedio = this.suma / 2;
  }

  limpiar() {
    this.edad1 = 0;
    this.edad2 = 0;
    this.suma = 0;
    this.promedio = 0;
  }
}
