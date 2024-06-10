import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BodyWebComponent } from './components/body-web/body-web.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,FooterComponent,BodyWebComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '1ComPoNent';
  infor: string = 'aaaaaaaaaaaaaaaaaaa';
  count: number = 0;

  public resetAll(): void {
    console.log(this.count++);
    this.infor = '';
  }
}