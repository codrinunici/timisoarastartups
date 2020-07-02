import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss'],
})
export class TopNavComponent implements OnInit {
  menuItems = [
    { name: 'Timisoara startups', path: 'main' },
    { name: 'Heroes', path: 'heroes' },
    { name: 'Startup Stages Guidelines', path: 'startup-info' },
    { name: 'Products made in TM', path: 'products' },
    { name: 'Startups in Timisoara', path: 'startups' },
    { name: 'Key Persons', path: 'people' },
    { name: 'Events', path: 'events' },
    { name: 'Articles', path: 'articles' },
    {name: 'Meet the team', path: 'team'}
  ];

  showSmallScreen = false;

  constructor() { }

  ngOnInit(): void { }

  toggleShowSmallScreen() {
    this.showSmallScreen = !this.showSmallScreen;
  }
}
