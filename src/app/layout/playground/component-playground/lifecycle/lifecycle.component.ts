import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss']
})
export class LifecycleComponent implements OnInit, OnDestroy {

  ngOnInit(): void {
    console.log('Component created');
  }

  ngOnDestroy(): void {
    console.log('Component destroyed');
  }

}
