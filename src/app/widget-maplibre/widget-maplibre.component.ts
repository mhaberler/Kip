import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget-maplibre',
  templateUrl: './widget-maplibre.component.html',
  styleUrls: ['./widget-maplibre.component.css'],
  template: `
    <mgl-map
      [style]="'https://demotiles.maplibre.org/style.json'"
      [zoom]="[9]"
      [center]="[-74.5, 40]"
    >
    </mgl-map>
  `,
  styles: [
    `
      mgl-map {
        height: 100%;
        width: 100%;
      }
    `,
  ],
})
export class DisplayMapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

// export class DisplayMapComponent {}
