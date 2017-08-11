import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // You can use ngModel in 3 forms:
  // 1- No binding (ex: just use ngModel, tell angular to control the input value)
  // 2- One way binding (ex: [ngModel] and defaultQuestion )
  // 3- Two way binding (ex: [(ngModel)] and answer)

  // It's is useful if you need to access the form early than submitted
  @ViewChild('f') form: NgForm;
  defaultQuestion = 'pet';
  answer = '';

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

/*  onSubmit(form: NgForm) {
    console.log(form);
  }*/

  onSubmit() {
    console.log(this.form);
  }
}
