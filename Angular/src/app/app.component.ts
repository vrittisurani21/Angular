import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { DirectivesComponent } from "./directives/directives.component";
import { ResumeComponent } from "./resume/resume.component";
import { CrudArrayComponent } from "./crud-array/crud-array.component";
import { CrudArrayOfObjectComponent } from "./crud-array-of-object/crud-array-of-object.component";
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { ReactiveFormsUsingFormBuilderComponent } from './reactive-forms-using-form-builder/reactive-forms-using-form-builder.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DirectivesComponent, ResumeComponent, CrudArrayComponent, CrudArrayOfObjectComponent,ReactiveFormsComponent,ReactiveFormsUsingFormBuilderComponent,TemplateDrivenFormsComponent,RouterLink,RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular';
}
