import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Cruises } from './cruises-details/cruises';

@Injectable({
  providedIn: 'root'
})
export class CruisesService {

  constructor(private http: HttpClient) { }

  getPkgByCategory() {
    const url = environment.url;
    return this.http.get(`${url}/api/front/packageByCategory/nile-cruises`);
  }

  getPkgByCategoryDetails(slug: string) {
    const url = environment.url;
    // return this.http.get<Cruises>(`${url}/api/front/packageByCategory/nile-cruises/${slug}`);
    return this.http.get<Cruises>(`${url}/api/front/packages/${slug}`)

  }
}
