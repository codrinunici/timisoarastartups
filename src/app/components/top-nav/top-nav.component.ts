import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss'],
})
export class TopNavComponent implements OnInit {
  menuItems = [
    { name: 'Timisoara startups', path: 'main' },
    { name: 'Informatii despre etapele unui startup', path: 'startup-info' },
    { name: 'Startupuri din Timisoara', path: 'startups' },
    { name: 'Oameni cheie', path: 'people' },
    { name: 'Evenimente', path: 'events' },
  ];

  showSmallScreen = false;

  constructor() { }

  ngOnInit(): void { }

  toggleShowSmallScreen() {
    this.showSmallScreen = !this.showSmallScreen;
  }
}
