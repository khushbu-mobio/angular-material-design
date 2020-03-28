import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogExampleComponent } from '../dialog-example/dialog-example.component';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor( public dialog: MatDialog) { }

  ngOnInit() {
  }
  openDialog(){
    this.dialog.open(DialogExampleComponent);
  }

  openDialog2(){
    let dialogRef = this.dialog.open(DialogExampleComponent, {data: {name: 'Kshah '}});
    dialogRef.afterClosed().subscribe(result =>{
      console.log(`dialog result: ${result}`);
    });
  }
}
