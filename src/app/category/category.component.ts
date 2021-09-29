import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Navigation } from 'selenium-webdriver';
import { CategoriesService } from './categories.service';
import { Categorys } from './category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categorys : Categorys;

  constructor(private categoryApi: CategoriesService, private router: Router) { }

  ngOnInit(){
    this.getCategory();
  }

  getCategory() {
    this.categoryApi.getCategory()
    .subscribe((res: any)=>{
    //  console.log(res);
      this.categorys = res.items;

      
    }, err => {
      console.log(err);
     
    }
    )
  }

  routerBack() {
    const rout = this.categorys.title;
     //  console.log(rout)
     if (rout === "Nile Cruises") {
       window.location.href = "http://localhost:4200/cruises"
      
      }
  }




}
