import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  updateCount = 0
  toUpdate: any;
  toUpdateCount: any;
  wantToSeeUpdates: boolean = false
  checkedUpdates: boolean = false
  buttonClicked: boolean = false
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }


  getService() {
    this.dataService.setElementsToUpdate()
    this.toUpdate = this.dataService.getElementsToUpdate()
    this.toUpdateCount = this.toUpdate.length
    this.wantToSeeUpdates = false;
    this.buttonClicked = false
    this.checkedUpdates = true;
  }

  NotWantSee() {
    this.toUpdateCount = false
    this.buttonClicked = true
  }
  WantSee() {
    this.toUpdateCount = false
    this.buttonClicked = true
  }


}
