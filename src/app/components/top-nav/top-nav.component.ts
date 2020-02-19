import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {
  menuItems = [
    'Timisoara Startups',
    'Informatii despre etapele unui startup',
    'Startupuri din Timisoara',
    'Articole blog',
    'Contact'
  ];

  currentIndex = 0;
  showSmallScreen = false;

  constructor() { }

  ngOnInit(): void {
  }

  navigateTo(index): void {
    this.currentIndex = index;
  }

  toggleShowSmallScreen() {
    this.showSmallScreen = !this.showSmallScreen;
  }

}
