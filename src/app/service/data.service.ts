import { Injectable } from '@angular/core';
//import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  rndNumber = 0
  mockUpdateElements = [
    { name: "AudioApp", size: this.getRandomNumber(10, 99), status: "ok", progress: "20%" },
    { name: "Graph3", size: 10, status: "m", progress: "00%" },
    { name: "SystemOptima", size: 30, status: "n", progress: "40%" },
    { name: "MailSpam", size: 20, status: "n", progress: "60%" },
    { name: "DocumentsSelector", size: this.getRandomNumber(3, 99), status: "ok", progress: "20%" },
    { name: "CPUController3", size: 10, status: "m", progress: "00%" },
    { name: "DXDiags", size: 30, status: "n", progress: "40%" },
    { name: "NetWire", size: this.getRandomNumber(2, 90), status: "n", progress: "60%" },
    { name: "NetWireless", size: 20, status: "ok", progress: "20%" },
    { name: "UfoSpy", size: 10, status: "m", progress: "00%" }

  ]
  updateElements: any

  constructor() { }

setElementsToUpdate() {
    this.getRandomNumber(0, 10)
    for(let i of this.mockUpdateElements){
      i.status="old"
      i.progress="0 %"
    }
    this.updateElements=[]
    this.updateElements = this.mockUpdateElements.slice(0, this.rndNumber)
    this.updateElements.length < 4 ? this.updateElements : this.updateElements.reverse()
  }

  getElementsToUpdate(){
    return this.updateElements
  }

  clearElementsToUpdate(){
    this.updateElements=[]
  }

  getRandomNumber(min: number, max: number) {
    const minValue = Math.min(min, max)
    const maxValue = Math.max(min, max)
    const RndCount = Math.round(Math.random() * (max - min) + min)
    console.log("zaok ", RndCount)
    this.rndNumber = RndCount
    return RndCount
  }
}