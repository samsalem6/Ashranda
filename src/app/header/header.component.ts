import { Component, OnInit , HostListener} from '@angular/core';
import { Router } from '@angular/router';
import { element } from 'protractor';





@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @HostListener('window:scroll', ['$event'])
  scrollHed() {
    let nav = document.querySelector(".background-header");
    let colp = document.querySelector(".navbar-collapse");
    window.scrollY > 50 ? nav.classList.add("scroll") : nav.classList.remove("scroll");
    // window.scrollTo({
    //   behavior: "smooth",
    // })
    window.scrollX > 50 ? colp.classList.add("color") : colp.classList.remove("color")


   

    
  }

}
