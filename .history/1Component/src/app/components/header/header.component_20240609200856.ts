import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FooterComponent,FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  infor: string = 'Đặng Thanh Hải';
  count: number = 0;

  public resetAll(): void {
    console.log(this.count++);
    this.infor = '';
  }}

