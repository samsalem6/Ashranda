import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CruisesService } from '../cruises.service';
import { Cruises } from './cruises';
import { take } from 'rxjs/operators';
import  'rxjs/add/operator/map';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-cruises-details',
  templateUrl: './cruises-details.component.html',
  styleUrls: ['./cruises-details.component.css']
})
export class CruisesDetailsComponent implements OnInit {
  cruises$: Cruises;
  errorM: string;
  isFirstOpen = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private route: ActivatedRoute, private cruisesSrv: CruisesService) { }

  ngOnInit(){
    this.route.params.subscribe(params => {
      let slug = params['slug'];
      this.getPkgByCategoryDetails(slug);
    });
  }

  getPkgByCategoryDetails(slug: string) {
    this.cruisesSrv.getPkgByCategoryDetails(slug)
    .subscribe((res: any) => {
      console.log(res);
      this.cruises$ = res.item;

       //Itinerary
       const obj = this.cruises$.items[0].Description;
       const pased = JSON.parse(obj);
       console.log(pased)
       this.cruises$.items[0].Description = pased;
       // Inclusions
       const inc = this.cruises$.inclusions;
       if (inc === null) {
         document.getElementById("inc").style.display = "none";
       }
       //Exclusions
       const exc = this.cruises$.exclusions;
       if (exc === null) {
         document.getElementById("exc").style.display = "none";
         
       }
       if (inc || exc === null) {
        document.getElementById("gal").style.marginTop = "30px";

       }
       

    })
  }
}
