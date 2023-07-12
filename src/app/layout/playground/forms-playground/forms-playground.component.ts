import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms-playground',
  templateUrl: './forms-playground.component.html',
  styleUrls: ['./forms-playground.component.scss']
})
export class FormsPlaygroundComponent {
  emailFormControl = new FormControl('control example', [Validators.required, Validators.email]);

  exampleForm: FormGroup = new FormGroup({
    email: new FormControl('group example', [Validators.required, Validators.email])
  });

  submitFormControl(): void {
    console.log(this.emailFormControl)
  }

  submitFormGroup(): void {
    console.log(this.exampleForm)
  }
}
