import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { Map, NavigationControl, Marker } from 'maplibre-gl';
import { element } from 'protractor';
@Component({
  selector: 'app-widget-maplibre',
  templateUrl: './widget-maplibre.component.html',
  styleUrls: ['./widget-maplibre.component.css']
})
export class WidgetMapLibreComponent implements OnInit, AfterViewInit, OnDestroy {
  map: Map | undefined;
  marker: Marker | undefined;

  @ViewChild('map')
  private mapContainer!: ElementRef<HTMLElement>;

  constructor() {
    console.log("-----map constructor");
  }

  ngOnInit(): void {
    console.log("-----map ngOnInit");
  }

  ngAfterViewInit() {
    console.log("-----map ngAfterViewInit");
    
    const myAPIKey = 'yRxU9pVJBWg9qynruk8Y';
    const mapStyle = 'https://api.maptiler.com/maps/streets/style.json';

    const initialState = { lng: 15.213, lat: 47.128, zoom: 14 };

    this.map = new Map({
      container: this.mapContainer.nativeElement,
      style: `${mapStyle}?key=${myAPIKey}`,
      center: [initialState.lng, initialState.lat],
      zoom: initialState.zoom
    });

    this.map.addControl(new NavigationControl({}), 'top-right');
    var el = document.createElement('div');

    this.marker = new Marker({
      element: el, //this.mapContainer.nativeElement,
      color: "#FF0000"
    })
      .setLngLat([15.213, 47.128])
      .addTo(this.map);
  }

  ngOnDestroy() {
    console.log("-----map ngOnDestroy");

   // this.map?.remove();
    // this.marker?.remove();
  }

}