import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaygroundComponent } from './playground.component';
import { Routes, RouterModule } from '@angular/router';

//Material
import { MatExpansionModule } from '@angular/material/expansion';
const routes: Routes = [
  {
    path: '',
    component: PlaygroundComponent
  }
];

@NgModule({
  declarations: [
    PlaygroundComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

    //Material
    MatExpansionModule
  ]
})
export class PlaygroundModule { }
