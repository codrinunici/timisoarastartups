import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss'],
})
export class TopNavComponent implements OnInit {
  menuItems = [
    { name: 'Timisoara startups', path: '' },
    { name: 'Informatii despre etapele unui startup', path: 'startup-info' },
    { name: 'Startupuri din Timisoara', path: 'startups' },
    { name: 'Oameni cheie', path: 'people' },
    { name: 'Evenimente', path: 'events' },
  ];

  currentIndex = 0;
  showSmallScreen = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateTo(index): void {
    this.currentIndex = index;
    this.router.navigate([this.menuItems[index].path]);
  }

  toggleShowSmallScreen() {
    this.showSmallScreen = !this.showSmallScreen;
  }
}
