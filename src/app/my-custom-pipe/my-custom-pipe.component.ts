import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-my-custom-pipe',
  templateUrl: './my-custom-pipe.component.html',
  styleUrls: ['./my-custom-pipe.component.css']
})
export class MyCustomPipeComponent {

  // power = 12
  // factor = '2'
  form: FormGroup;
  fb: FormBuilder = new FormBuilder

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      power: [''],
      factor: ['']
    })
  }
}
