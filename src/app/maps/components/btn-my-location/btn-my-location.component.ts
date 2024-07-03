import { MapService } from '../../services';
import { PlacesService } from './../../services/places.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-btn-my-location',
  templateUrl: './btn-my-location.component.html',
  styleUrl: './btn-my-location.component.css'
})
export class BtnMyLocationComponent {

  constructor(private placesService: PlacesService, private mapService: MapService){}


    goToMyLocation() {
      if(!this.placesService.userLocation) {
        throw new Error('No hay ubicación')
      }
      if(!this.mapService.isMapReady){
        throw new Error('No hay mapa')
      }


      this.mapService.flyTo(this.placesService.userLocation)
    }

}
