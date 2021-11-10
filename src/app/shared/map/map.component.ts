import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as L from 'leaflet'
import { DistritosService } from './services/distritos.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
  
  private map:any;
  private initMap() {
    this.map = L.map('map', {
      center: [-12.90402, -74.26936],
      zoom: 13
    });

    const osmTiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    osmTiles.addTo(this.map);
    

  }



  constructor(private polService: DistritosService) { }

  ngAfterViewInit(): void {

    this.initMap()
    this.polService.makeDistritosPolygon(this.map)

    
    

    



  }

  
}
