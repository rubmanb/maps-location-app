import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  public userLocation: [number, number] | undefined;

  get isUserLocationReady(): boolean{
    return !!this.userLocation;
  }

  constructor(){
    this.getUserLocation();
  }

  public getUserLocation(): Promise<[number, number]>{
    return new Promise( (resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        ({coords}) => {
          this.userLocation = [coords.longitude, coords.latitude];
          resolve(this.userLocation);
        },
        (err) => {
          alert(err);
          console.log(err);
          reject();
        }
      );
    });
  }
}
