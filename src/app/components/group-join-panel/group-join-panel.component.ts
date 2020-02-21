import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-group-join-panel',
  templateUrl: './group-join-panel.component.html',
  styleUrls: ['./group-join-panel.component.scss']
})
export class GroupJoinPanelComponent implements OnInit {
  facebookGroupLink = 'https://www.facebook.com/groups/196454194891791/';
  constructor() { }

  ngOnInit(): void {
  }

}
