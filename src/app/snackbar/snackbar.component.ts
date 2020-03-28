import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css']
})
export class SnackbarComponent implements OnInit {

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit() {
  }
 openSnackBar(message,action){
   this.snackBar.open(message, action);
 }
 openSnackBar2(message,action){
   let snackBarRef = this.snackBar.open(message, action);
   snackBarRef.afterDismissed().subscribe(() =>
   {
    console.log('The SnackBar Was Dismissed')  
   });
   snackBarRef.onAction().subscribe(() =>{
     console.log("The snackbar action was triggered!");
   });
 }

}
