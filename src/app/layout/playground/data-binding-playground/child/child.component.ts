import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit{
  @Input() favoriteCity: string = 'test';
  @Output() onChangeFavoriteCountry: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {}

  emitFavoriteCountry(): void {
    this.onChangeFavoriteCountry.emit('Thailand');
  }

}
