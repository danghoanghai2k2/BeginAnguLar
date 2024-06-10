import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FooterComponent,FormsModule],
  template: `
    <div class="search">
        <input type="text" placeholder="infor" [(ngModel)]="infor">
        <input type="text" placeholder="infor" [value]="infor">
        <div class="btnSubmet"><button (click)="resetAll();">Click me</button></div>
    </div>
  `,
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  infor: string = 'aaaaaaaaaaaaaaaaaaa';
  count: number = 0;

  public resetAll(): void {
    console.log(this.count++);
    this.infor = '';
  }}

