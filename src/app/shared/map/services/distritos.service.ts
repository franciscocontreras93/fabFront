import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';

@Injectable({
  providedIn: 'root'
})
export class DistritosService {
  distritos: string = 'https://fabres2.herokuapp.com/rest/fabres/chaca'
  constructor(private http: HttpClient) { }

  makeDistritosPolygon(map:L.Map): void {
    this.http.get(this.distritos).subscribe((res:any) => {
      for ( const f of res.features) {
        const pol = new L.GeoJSON(f).addTo(map)
        
      }
      console.log(res)
    })
  }
} 
