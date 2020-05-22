import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss'],
})
export class TopNavComponent implements OnInit {
  menuItems = [
    { name: 'Timisoara startups', path: 'main' },
    { name: 'Startup Stages Guidelines', path: 'startup-info' },
    { name: 'Startups in Timisoara', path: 'startups' },
    { name: 'Key Persons', path: 'people' },
    { name: 'Events', path: 'events' },
  ];

  showSmallScreen = false;

  constructor() { }

  ngOnInit(): void { }

  toggleShowSmallScreen() {
    this.showSmallScreen = !this.showSmallScreen;
  }
}
