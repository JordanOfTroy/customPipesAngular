import { Component } from '@angular/core';

@Component({
  selector: 'app-my-custom-pipe',
  templateUrl: './my-custom-pipe.component.html',
  styleUrls: ['./my-custom-pipe.component.css']
})
export class MyCustomPipeComponent {
  power = 12
  factor = '2'
}
