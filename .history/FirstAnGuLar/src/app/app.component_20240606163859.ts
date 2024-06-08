import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './common/User';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // tạo ra thẻ tiêu đề
  lists = 'Danh sách các bạn học sinh';
  users:User  = {
    id: 1,
    name: 'Nguyễn Văn A',
    email:'',
    address:"";

  }
}
