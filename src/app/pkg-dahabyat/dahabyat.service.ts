import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Dahabyat } from './dahabyat-details/dahayat';

@Injectable({
  providedIn: 'root'
})
export class DahabyatService {
 

  constructor(private http: HttpClient) { }

  getDahabyat(): Observable<Dahabyat[]> {
    const url = environment.url;
    return this.http.get<Dahabyat[]>(`${url}/api/front/packages`);
  }
  getDetails(slug: string) {
    const url = environment.url;
    return this.http.get<Dahabyat>(`${url}/api/front/packages/${slug}`)
    // .map((res: any) => res.json());
  
  }
}
