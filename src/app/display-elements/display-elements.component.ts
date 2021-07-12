import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-display-elements',
  templateUrl: './display-elements.component.html',
  styleUrls: ['./display-elements.component.css']
})
export class DisplayElementsComponent implements OnInit {
  numberToUpdate: number = 1
  elementsToUpdate: any
  zmienna=1

  constructor(private activatedRoute: ActivatedRoute, private service: DataService) { }

  ngOnInit(): void {
    this.numberToUpdate = this.activatedRoute.snapshot.params['id']
    this.elementsToUpdate=this.service.getElementsToUpdate()
  }
}
