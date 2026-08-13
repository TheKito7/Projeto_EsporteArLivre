import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MenuComponent } from './component/menu-component/menu-component'; // ADICIONA o primeiro arquivo criado AQUI 
import { AtletaComponent } from './component/atleta-component/atleta-component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuComponent, AtletaComponent], // ADICIONA AQUI 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('esporte_ar_livre');
}
