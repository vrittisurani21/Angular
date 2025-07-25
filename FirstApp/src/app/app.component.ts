import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule,HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // title = 'FirstApp';

  // amount=48000;

  // number=8.40;
  // name="Vritti Surani";

  // stuName={
  //   name:"Vritti Surani",
  //   semester:4,
  //   course:"BTech",
  //   rollno:427
  // }
  // TodaysDate=new Date();

  // spi=8.3

  // temp="";

  // DisplayEvent(e:any){
  //   console.log(e.target.value)
  //   this.temp=e.target.value
  // }

  // print(){
  //   console.log("Hello!")
  // }


  keydownMessage="";
  keyupMessage="";
  keypressMessage="";

  handleKeydown(){ 
    this.keydownMessage = "Key down:"; 
  } 
  
  handleKeyup(){ 
    this.keyupMessage ="Key up:"; 
  } 
  
  handleKeypress(){
     this.keypressMessage ="Key press:"; 
    }
}
