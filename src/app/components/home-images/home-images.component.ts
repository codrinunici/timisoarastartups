import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-home-images',
  templateUrl: './home-images.component.html',
  styleUrls: ['./home-images.component.scss']
})
export class HomeImagesComponent implements OnInit {
  fireAnalytics: any;

  constructor() {
    this.fireAnalytics = firebase.analytics();
  }


  ngOnInit(): void {
  }


  logStartups() {
    this.fireAnalytics.logEvent('page_view', {page_title:'Startups'});
  }
}
