import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {

  @Input() rating : number=4;
  starWidth:number;
  @Output() ratingClicked:EventEmitter<number>=new EventEmitter<number>();
  ngOnChanges(): void {
    this.starWidth=this.rating*75/5;
  }

  onClick():void{
    this.ratingClicked.emit(this.rating);
  }
  constructor() { }

 

}
