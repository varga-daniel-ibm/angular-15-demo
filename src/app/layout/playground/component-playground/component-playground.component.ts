import { Component } from '@angular/core';

@Component({
  selector: 'app-component-playground',
  templateUrl: './component-playground.component.html',
  styleUrls: ['./component-playground.component.scss']
})
export class ComponentPlaygroundComponent {
  isLifeCycleDisplayed: boolean = false;

  onClick(): void {
    this.isLifeCycleDisplayed = !this.isLifeCycleDisplayed;
  }
}
