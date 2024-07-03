import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MapService, PlacesService } from '../../services';
import { Marker, Map, Popup } from 'mapbox-gl';


@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrl: './map-view.component.css'
})
export class MapViewComponent implements AfterViewInit{

  constructor(private placesService: PlacesService, private mapService: MapService){}

  @ViewChild('mapdiv')
  mapDivElement!: ElementRef;


  ngAfterViewInit(): void {
    // console.log(this.placesService.userLocation)

    if(!this.placesService.userLocation){
      throw new Error('No hay localización');
    }

    const map = new Map({
      container: this.mapDivElement.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.placesService.userLocation,
      zoom: 9,
    });

    const popup = new Popup()
      .setHTML(
        `
        <h6>Here</h6>
        <span>In this place</span>
        `
      );

    new Marker({color: 'red'})
      .setLngLat(this.placesService.userLocation)
      .setPopup(popup)
      .addTo(map)

      this.mapService.setMap(map);

  }
}
