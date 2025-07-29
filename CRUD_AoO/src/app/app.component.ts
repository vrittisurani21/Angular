import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgFor, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isEdit = -1;
  searchText = '';
  
  arr = [
    { Name: "Vritti", Surname: "Surani" },
    { Name: "Rajvi", Surname: "Sadatiya" },
    { Name: "Drashti", Surname: "Rathod" },
  ];

  filteredArr = [...this.arr];

  obj = {
    Name: "",
    Surname: ""
  };

  tempvalue = "";

  AddStudent() {
    if (this.isEdit == -1 && this.tempvalue != "") {
      this.arr.push({ ...this.obj });
    } else {
      this.arr[this.isEdit].Name = this.obj.Name;
      this.arr[this.isEdit].Surname = this.obj.Surname;
    }
    this.updateFilteredArray();
    this.obj.Name = "";
    this.obj.Surname = "";
    this.isEdit = -1;
  }

  DeleteStudent(i: any) {
    this.arr.splice(i, 1);
    this.updateFilteredArray();
  }

  EditStudent(i: any) {
    this.isEdit = i;
    this.obj.Name = this.arr[i].Name;
    this.obj.Surname = this.arr[i].Surname;
  }

  updateFilteredArray() {
    this.filteredArr = this.arr.filter(student =>
      student.Name.toLowerCase().includes(this.searchText.toLowerCase()) ||
      student.Surname.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  SearchStudent() {
    this.updateFilteredArray();
  }
}
