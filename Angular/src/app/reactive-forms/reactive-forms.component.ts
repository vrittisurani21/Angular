import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  imports: [ReactiveFormsModule,FormsModule,NgIf],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css'
})
export class ReactiveFormsComponent {
  userform=new FormGroup({ 
    name:new FormControl('',[Validators.required,Validators.minLength(3)]),
    email: new FormControl('',[Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
    number: new FormControl('',[Validators.required,Validators.pattern("[0-9]{10}")])
  })

  save(){
    console.log(this.userform.value)
  }


}
