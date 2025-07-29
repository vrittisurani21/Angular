import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  imports: [CommonModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {
  
  student:any={
    name:'',
    email:'',
    phone:'',
    address:'',
    education:'',
    skills:'',
    experience:'',
    projects:[ ],
    certificates:[]
  }

  datafill(e:any){
    this.student={...this.student,[e.target.name]:e.target.value}
  }

  certificate:any={
    certificate_name:'',
    institute_name:'',
    course_name:'',
    certificate_id:''
  }

  project:any={
    project_name:'',
    project_description:'',
    starting_date:'',
    ending_date:''
  }
  
  tempProject:any={}

  makeProject(e:any){
    this.tempProject={...this.tempProject,[e.target.name]:e.target.value}
  }

  addProject(e:any){
    e.preventDefault()
    this .student.projects.push(this.tempProject)
    console.log(this.tempProject)
  }

  tempCertificate:any={}

  makeCertificate(e:any){
    this.tempCertificate={...this.tempCertificate,[e.target.name]:e.target.value}
  }

  addCertificate(e:any){
    e.preventDefault()
    this .student.certificates.push(this.tempCertificate)
    console.log(this.tempCertificate)
  }

}
