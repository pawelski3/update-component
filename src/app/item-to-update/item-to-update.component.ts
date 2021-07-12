import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-item-to-update',
  templateUrl: './item-to-update.component.html',
  styleUrls: ['./item-to-update.component.css']
})
export class ItemToUpdateComponent implements OnInit {
  numberOfElement: any
  toUpdateElement: any
  buttonDisabled = false
  progressVisible = true
  constructor(private activatedRoute: ActivatedRoute,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.numberOfElement = this.activatedRoute.snapshot.params['id']
    this.toUpdateElement = 0
    this.toUpdateElement = this.dataService.getElementsToUpdate()[this.numberOfElement - 1]
    console.log("numb of el ", this.numberOfElement, "to upda ", this.toUpdateElement)
  }

  runUpdate() {
    this.buttonDisabled = true
    let timeInfo = (<HTMLInputElement>document.getElementById("timeInfo"))
    timeInfo.innerHTML = "Please wait a moment"
    let progressBar = (<HTMLInputElement>document.getElementById("progressBar"))
    progressBar.value = "0";
    progressBar.max = "5";
    let count = 0
    let interval = setInterval(() => {
      count = count + 0.004
      progressBar.value = count.toString()
      this.toUpdateElement.progress = Math.round(count * 20) + " %"
    }, 1)
    setTimeout(() => {
      this.toUpdateElement.status = "Updated"
      this.toUpdateElement.progress = "100%"
      timeInfo.innerHTML = ""
      this.buttonDisabled = true
      this.progressVisible = false
      clearInterval(interval)
    }, 5000);
  }

}
