import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-ng-iF-for',
  standalone: true,
  imports: [CommonModule,HeaderComponent],
  templateUrl: './ng-iF-for.component.html',
  styleUrl: './ng-iF-for.component.css'
})
export class NgIngForComponent {
  age:number = 15;
  name:string = '';
  fruit:any = ['balala','apple','orgain','chery','lemon']
}
