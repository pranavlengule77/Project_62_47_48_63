import {} from 'googlemaps';
import { Component, OnInit, ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})


export class ContactUsComponent implements OnInit {

  @ViewChild('map',{ static: true }) mapElement: any;
  map: google.maps.Map;
  lat = 12.9925599;
  lng = 77.667901;
  coordinates = new google.maps.LatLng(this.lat, this.lng);
  marker = new google.maps.Marker({
    position: this.coordinates,
    map: this.map,
  });

  constructor() { }

  ngOnInit(): void {
    const mapProperties = {
         center: new google.maps.LatLng(12.9925599,77.667901),
         zoom: 15,
         mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement,    mapProperties);
    this.marker.setMap(this.map);
 }
}
