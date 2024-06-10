import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Users } from '../../common/Users';

@Component({
  selector: 'app-body-web',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './body-web.component.html',
  styleUrl: './body-web.component.css',
})
export class BodyWebComponent {
 public user: Users[] = [
    {
      id: 1,
      name: 'John',
      email: 'john@example.com',
      date: '07/05/2002',
      address: 'Thái Bình',
    },
    {
      id: 2,
      name: 'Hải',
      email: 'dangthanhhai2k2.com',
      date: '07/05/2001',
      address: 'Nam Định',
    }, {
      id: 3,
      name: 'John',
      email: 'john@example.com',
      date: '07/05/2002',
      address: 'Thái Bình',
    },
    {
      id: 4,
      name: 'Hải',
      email: 'dangthanhhai2k2.com',
      date: '07/05/2001',
      address: 'Nam Định',
    }
  ];
  public age:number = 15;
}
