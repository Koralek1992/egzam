import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { FormService } from '../../services/form.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-form',
  styleUrls: ['./form.component.scss'],
  templateUrl: './form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent {
  readonly form: FormGroup = new FormGroup({
    login: new FormControl(null, [Validators.required]),
    email: new FormControl(null,[Validators.required]) });

  constructor(private _formService: FormService, private router: Router) {
  }

  onFormSubmitted(form: FormGroup): void {
    this._formService.create({
      login: form.get('email')?.value,
      email: form.get('email')?.value
    }).subscribe(); this.router.navigate(['/list'])
  }
}
