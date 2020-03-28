import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.css']
})
export class AutoCompleteComponent implements OnInit {

  options: string[] = ['Angular', 'React','Vue'];
  objectOptions = [
    {name:'Angular'},
    {name:'Angular Material'},
    {name: 'React'},
    {name:'Vue'}
  ];
  
  myControl = new FormControl();
  filteredOptions: Observable<string[]>;

  displayFn(subject){
    return subject ? subject.name : undefined;
  }
  constructor() { }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)) 
    );
  }
  private _filter(value : string) : string[] {
    const filterValue = value.toLowerCase()
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}
