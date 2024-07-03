import { Injectable } from '@angular/core';
import { LngLatLike, Map } from 'mapbox-gl';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  private map: Map | undefined;

  constructor() { }


  get isMapReady(){
    return !!this.map;
  }

  setMap(map: Map){
    this.map = map;
  }


  flyTo(coords: LngLatLike){
    if(!this.isMapReady){
      throw new Error('El mapa no está listo');
    }

    this.map?.flyTo({
      zoom: 9,
      center: coords
    })
  }
}
