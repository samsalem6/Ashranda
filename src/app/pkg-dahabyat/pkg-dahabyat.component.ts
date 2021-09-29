import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Dahabyat } from './dahabyat-details/dahayat';
import { DahabyatService } from './dahabyat.service';

@Component({
  selector: 'app-pkg-dahabyat',
  templateUrl: './pkg-dahabyat.component.html',
  styleUrls: ['./pkg-dahabyat.component.css']
})
export class PkgDahabyatComponent implements OnInit {

  packages: Observable<Dahabyat[]> ;

  constructor(private packageApi: DahabyatService) { }

  ngOnInit(){
    this.getDahabyat();
  }
  getDahabyat() {
    this.packageApi.getDahabyat()
    .subscribe((res: any) => {
      console.log(res);
      this.packages = res.items.slice(0,3);
    }, err => {
      console.log(err);
    }
    )
  }
  

}
