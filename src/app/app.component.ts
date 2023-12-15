import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Componente1Component } from "./componente1/componente1.component";
import { Componente2Component } from "./componente2/componente2.component";

/*  Angular Materials  */
import {MatButtonModule} from '@angular/material/button';
//=======================
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, MatButtonModule,Componente1Component, Componente2Component]
})
export class AppComponent {
  title = 'projeto-angular';
}
