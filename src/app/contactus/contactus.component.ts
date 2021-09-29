import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit, ɵɵqueryRefresh } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  submit() {
    // document.getElementById("red").style.display = "block";
     const denger = document.getElementById("red");
     const sucssess = document.getElementById("green");
     const theInput = <HTMLInputElement>document.getElementById("form-control");
    //  const textarea =  <HTMLInputElement>document.getElementById("exampleFormControlTextarea1");
     if (theInput.value  === "") {
       denger.style.display = "block";
       
     }else {
         sucssess.style.display = "block";

     }
     
    if (!closed) {
      setTimeout(() => {

        this.close()
      }, 20000)
    }
    

  }
  close() {
    // let fom =<HTMLFormElement><Element>document.querySelector(".contact-form");
    document.getElementById("red").remove();
    document.getElementById("green").remove();
  

  }

}
