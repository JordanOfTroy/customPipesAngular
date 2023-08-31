import { Component } from '@angular/core';

@Component({
  selector: 'app-birthdaycomponent',
  templateUrl: './birthdaycomponent.component.html',
  styleUrls: ['./birthdaycomponent.component.css']
})
export class BirthdaycomponentComponent {
  birthday = new Date(1988, 1, 13); 
  now = new Date(); 
}
