import { NgClass, NgIf, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directives',
  imports: [NgIf,NgStyle,NgSwitch,NgSwitchCase,NgSwitchDefault,NgClass,FormsModule],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {

  name:any="true";

  tgValue(){
    this.name=!this.name
  }

  obj={};

  interval:any

  Start(){
    clearInterval(this.interval)
    this.interval=setInterval(()=>{
      let r=Math.ceil(Math.random()*255)
      let g=Math.ceil(Math.random()*255)
      let b=Math.ceil(Math.random()*255)
      this.obj={
        'background-color':"rgb("+r+","+g+","+b+")",
        'height':"25vh"
      }

    },500)
  }

  Stop(){
    clearInterval(this.interval)
  }

  dayInput:any = '';
  printDay() {
  } 

  classObj={
   first:true,
   second:false
  }

}
