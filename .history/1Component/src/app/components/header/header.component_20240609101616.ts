import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  infor:string = 'Mời bạn nhập vào đây';
  warrming :string = 'Cảnh báo lỗi không được nhập vào đây'
 public resetAll():void{
    this.infor = '';
  }
}
