import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NgFor,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CRUD_A';
  tempValue='';
  arr=["Vritti","Drashti","Rajvi"];
  isEditable=-1;
  btnValue="Add";

  addStudent(e:any){
    if(this.isEditable==-1&&this.tempValue!="") 
      {
        this.arr.push(this.tempValue)
        this.tempValue=''
        this.btnValue="Add"
        return
      }
      this.arr[this.isEditable]=this.tempValue
      this.isEditable=-1
      this.tempValue=""
  }

  deleteValue(i:any){
    this.arr.splice(i,1);
  }

  editValue(i:any){
    this.tempValue=this.arr[i]
    this.isEditable=i
    this.btnValue="Edit"
  }
}
