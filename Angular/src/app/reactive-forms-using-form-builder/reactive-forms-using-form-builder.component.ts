import { NgIf } from '@angular/common';
import { Component,inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms-using-form-builder',
  imports: [ReactiveFormsModule,NgIf,FormsModule],
  templateUrl: './reactive-forms-using-form-builder.component.html',
  styleUrl: './reactive-forms-using-form-builder.component.css'
})
export class ReactiveFormsUsingFormBuilderComponent {
  private_fb = inject(FormBuilder)
  userForm:FormGroup=this.private_fb.group({
    Name:['',[Validators.required,Validators.minLength(3)]],
    Age:['',[Validators.required]],
    Email:['',[Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
    Contact:['',[Validators.required,Validators.pattern("[0-9]{10}")]],
    SPI:['',[Validators.required,Validators.max(10), Validators.pattern('^\\d{1,2}(\\.\\d{1,4})?$')]]
  })

  save(){
    console.log(this.userForm.value)
  }
}
