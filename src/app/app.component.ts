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

  genders = ['male', 'female'];

  suggestUserName() {
    const suggestedName = 'Superuser';

    // it is not the best approach because
    // setValue you use to set your whole form
/*    this.form.setValue(
      {
        userData: {
          username: suggestedName,
          email: ''
        },
        secret: 'pet',
        questionAnswer: '',
        gender: 'male'
      }
    );*/

    // patchValue you use to overwrite parts of the form
    this.form.form.patchValue(
      {
        userData: {
          username: suggestedName
        }
      }
    );

  }

/*  onSubmit(form: NgForm) {
    console.log(form);
  }*/

  onSubmit() {
    console.log(this.form);
  }
}
