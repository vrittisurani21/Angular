import { Routes } from '@angular/router';
import { ResumeComponent } from './resume/resume.component';
import { DirectivesComponent } from './directives/directives.component';
import { CrudArrayComponent } from './crud-array/crud-array.component';
import { CrudArrayOfObjectComponent } from './crud-array-of-object/crud-array-of-object.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { ReactiveFormsUsingFormBuilderComponent } from './reactive-forms-using-form-builder/reactive-forms-using-form-builder.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { LoginFormComponent } from './login-form/login-form.component';

export const routes: Routes = [
    {path:'',component:SignUpFormComponent},
    {path:'login-form',component:LoginFormComponent},
    {path:'resume',component:ResumeComponent},
    {path:'directives',component:DirectivesComponent},
    {path:'crud-array',component:CrudArrayComponent},
    {path:'crud-array-of-object',component:CrudArrayOfObjectComponent},
    {path:'template-driven-forms',component:TemplateDrivenFormsComponent},
    {path:'reactive-forms',component:ReactiveFormsComponent},
    {path:'reactive-forms-using-form-builder',component:ReactiveFormsUsingFormBuilderComponent}
];
