import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-spinner',
  templateUrl: './progress-spinner.component.html',
  styleUrls: ['./progress-spinner.component.css']
})
export class ProgressSpinnerComponent implements OnInit {
  showspinner = false;

  constructor() { }

  ngOnInit() {
  }

  loadData(){
    this.showspinner = true;
    setTimeout(()=>
    {
      this.showspinner = false;
    },5000)
  }

}
