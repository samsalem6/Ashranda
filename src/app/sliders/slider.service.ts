import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sliders } from './slider';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SliderService {
  

  constructor(private http: HttpClient) { }



getSlider() {
  const url = environment.url;
  return this.http.get(`${url}api/front/sliders`);
}

}
