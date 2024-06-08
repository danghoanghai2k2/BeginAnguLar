import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { User } from './common/User';
import { User } from '../../../.history/FirstAnGuLar/src/app/common/User_20240606154825';

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
  users:User  = new User(1,'hải','hảiaaaaaaaa','thái bình');
    
    getName() {
        return this.users.name;
    }

}
