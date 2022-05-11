import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment20_4Demo';
  m1:string='50';
  p1:string='50';
  c1:string='50';
  result:number=50;
  
  calculatePer(m1:string,p1:string,c1:string){

     this.result= ((parseInt(m1)+parseInt(p1)+parseInt(c1))/300)*100;
  

  }

}
