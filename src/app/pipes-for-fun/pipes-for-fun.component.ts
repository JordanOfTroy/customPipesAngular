import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes-for-fun',
  templateUrl: './pipes-for-fun.component.html',
  styleUrls: ['./pipes-for-fun.component.css']
})
export class PipesForFunComponent {
  birthday = new Date(1988, 3, 15); // April 15, 1988
  lowerCasePipe = 'LOWERCASE';
  upperCasePipe = 'uppercase';
  munny = 1234.56;
}
