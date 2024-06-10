import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Users } from '../../common/Users';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-body-web',
  standalone: true,
  imports: [FormsModule,CommonModule],
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
  number1: number = 0;
  number2: number = 0;
  result:number = 0;

  calculate(operation: string) {
    switch (operation) {
      case 'add':
        this.result = this.number1 + this.number2;
        break;
      case 'subtract':
        this.result = this.number1 - this.number2;
        break;
      case 'multiply':
        this.result = this.number1 * this.number2;
        break;
      case 'divide':
        if (this.number2 !== 0) {
          this.result = this.number1 / this.number2;
        } else {
          this.result = NaN; // or handle division by zero error
        }
        break;
      default:
        this.result = NaN;
        break;
    }
  }
}
