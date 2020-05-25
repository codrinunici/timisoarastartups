import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-sidenav',
  templateUrl: './admin-sidenav.component.html',
  styleUrls: ['./admin-sidenav.component.scss']
})
export class AdminSidenavComponent implements OnInit {
  menuItems = [
    {
      name: 'Articles',
      path: 'articles'
    },
    {
      name: 'Startups',
      path: 'startups'
    },
    {
      name: 'People',
      path: 'people'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
