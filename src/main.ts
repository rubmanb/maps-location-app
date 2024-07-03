import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './app/environments/environment';

import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = environment.api;


if(!navigator.geolocation){
  alert('El navegador no tiene geolocalización');
  throw new Error('El navegador no tiene geolocalización');
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
