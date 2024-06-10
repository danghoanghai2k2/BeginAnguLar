import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Users } from '../../common/Users';

@Component({
  selector: 'app-body-web',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './body-web.component.html',
  styleUrl: './body-web.component.css'
})
export class BodyWebComponent {
  user:Users[]  = [
    {id:1, name:"John", email:"john@example.com",date:'07/05/2002',address:'Thái Bình'},  
  ];
}
