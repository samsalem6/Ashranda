import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
import { Cruises } from '../pkg-cruises/cruises-details/cruises';
import { CruisesService } from '../pkg-cruises/cruises.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  cruises$: Cruises;

  constructor( private _lightBox: Lightbox, private srv: CruisesService ) {}

  
  ngOnInit(): void {
  }

}
