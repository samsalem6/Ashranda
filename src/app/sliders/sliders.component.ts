import { Component, OnInit } from '@angular/core';
import { SliderService } from './slider.service';
import { Sliders} from './slider';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-sliders',
  templateUrl: './sliders.component.html',
  styleUrls: ['./sliders.component.css']
})
export class SlidersComponent implements OnInit {

  sliders: any;
 
  
  constructor(private api: SliderService) {
    
   }
   
   
  ngOnInit() {
    this.getSlider();
  }

  getSlider() {
    this.api.getSlider()
      .subscribe((res: any) => {
       // console.log(res);
        this.sliders = res.items;
        // console.log(this.sliders);

      
      }, err => {
        console.log(err);
       
      })
  }

}
