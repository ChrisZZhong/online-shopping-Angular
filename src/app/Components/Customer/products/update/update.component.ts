import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit{
  @Input() value: number = 1;
  @Output() valueChange = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {

  }

  add() {
    this.valueChange.emit(this.value + 1);
  }

  subtract() {
    if (this.value > 1){
      this.valueChange.emit(this.value - 1);
    } else {
      this.valueChange.emit(1);
    }
  }
}
