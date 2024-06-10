import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BodyWebComponent } from './components/body-web/body-web.component';
import { FormsModule } from '@angular/forms';
import { NgIngForComponent } from './components/ng-iF-for/ng-iF-for.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,HeaderComponent,FooterComponent,BodyWebComponent,NgIngForComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
