import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ashranda-prj';
  constructor() { }

  ngOnInit(): void {
    this.scrollTop();
  }

  
  
  scrollTop() {
    let span = document.querySelector(".up");
    onscroll = () => {
      scrollY >= 500 ? span.classList.add("show") : span.classList.remove("show");
     }
    
    span.addEventListener("click", function()  {
      scrollTo({
        top: 0,
        behavior: "smooth",
      })
    })
  }
  
}
