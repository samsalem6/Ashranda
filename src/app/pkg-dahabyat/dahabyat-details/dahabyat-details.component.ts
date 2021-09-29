import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { DahabyatService } from '../dahabyat.service';
import { Dahabyat } from './dahayat';
import { take } from 'rxjs/operators';
import  'rxjs/add/operator/map';
import { FormGroup } from '@angular/forms';
import { removeData } from 'jquery';
import { Lightbox } from 'ngx-lightbox';




@Component({
  selector: 'app-dahabyat-details',
  templateUrl: './dahabyat-details.component.html',
  styleUrls: ['./dahabyat-details.component.css']
})
export class DahabyatDetailsComponent implements OnInit {
  packages$: Dahabyat;
  errorM: string;
  isFirstOpen = true;
  customClass = 'customClass';
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  
  constructor(private route: ActivatedRoute, private dahabyatsrv: DahabyatService) { }

 



  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let slug = params['slug'];
      this.getDetails(slug);
    });
    
    // this.route.params.pipe( take(1)).subscribe((params) => {
    //   const slug = params['slug'];
    //   this.packages$ = this.dahabyatsrv.getDetails(slug);
    //   // console.log(this.packages$);
      
    // })
    // this.slug = this.route.snapshot.params.slug;
    // this.getDetails();
  }

  getDetails(slug: string) {
    
  
    this.dahabyatsrv.getDetails(slug)
    .subscribe(
      (res: any) => {
        console.log(res);
        this.packages$ = res.item;

        //Itinerary
        const obj = this.packages$.items[0].Description;
        const pased = JSON.parse(obj);
        console.log(pased)
        this.packages$.items[0].Description = pased;


         // Inclusions
       const inc = this.packages$.inclusions;
       if (inc === null) {
         document.getElementById("inc").style.display = "none";
       }
       //Exclusions
       const exc = this.packages$.exclusions;
       if (exc === null) {
         document.getElementById("exc").style.display = "none";
         
       }
       if (inc || exc === null) {
        document.getElementById("gal").style.marginTop = "30px";
       }
      
        
      }, err => {
        console.log(err)
      } )
    
  
 }
 
}
