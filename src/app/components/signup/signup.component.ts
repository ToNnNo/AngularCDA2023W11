import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {signupConstraint} from "../../constraints/signup.constraint";
import {CustomValidators} from "../../validators/custom-validators";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  // FormControl( default value, [validators], [async validators] )
  form = new FormGroup({
    email: new FormControl(null, [
      Validators.required,
      CustomValidators.email()
    ]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(8)
    ]),
    confirm: new FormControl(null, [
      Validators.required
    ]),
    terms: new FormControl(false, [
      Validators.requiredTrue
    ])
  }, {
    validators: [
      CustomValidators.checkPasswords()
    ]
  });

  public inscription(): void {
    this.form.markAllAsTouched();

    if( this.form.valid) {
      console.log(this.form.getRawValue());
    }
  }

  /*public emailValidator(): string | null {
    const field = this.form.get('email');

    if( field?.touched ) {
      if(field?.hasError('required')) {
        return `L'adresse email est obligatoire`;
      }
    }
    return null;
  }*/

  public validate(name: string): string | null {
    const field = this.form.get(name);

    const constraints = signupConstraint[name];

    if( field?.touched ) {
      for(let constraint in constraints){
        if(field?.hasError(constraint)) {
          return constraints[constraint];
        }
      }

    }
    return null;
  }

}
