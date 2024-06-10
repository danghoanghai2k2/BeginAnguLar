import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-iF-for',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-iF-for.component.html',
  styleUrl: './ng-iF-for.component.css'
})
export class NgIngForComponent {
  age:number = 15;
}
