import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms-playground',
  templateUrl: './forms-playground.component.html',
  styleUrls: ['./forms-playground.component.scss']
})
export class FormsPlaygroundComponent {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  submitForm(): void {
    console.log(this.emailFormControl)
  }
}
