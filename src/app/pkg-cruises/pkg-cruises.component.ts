import { Component, OnInit } from '@angular/core';
import { CruisesService } from './cruises.service';

@Component({
  selector: 'app-pkg-cruises',
  templateUrl: './pkg-cruises.component.html',
  styleUrls: ['./pkg-cruises.component.css']
})
export class PkgCruisesComponent implements OnInit {

  crusises: any;


  constructor(private pkgByCategoryApi: CruisesService) { }

  ngOnInit() {
    this.getPkgByCategory();
  }

  getPkgByCategory() {
    this.pkgByCategoryApi.getPkgByCategory()
    .subscribe((res: any) => {
      console.log(res);
      this.crusises = res.items;
    }, err => {
      console.log(err);
    })
  }

}
