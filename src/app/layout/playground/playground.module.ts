import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaygroundComponent } from './playground.component';
import { Routes, RouterModule } from '@angular/router';

//Material
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';

import { ComponentPlaygroundComponent } from './component-playground/component-playground.component';
import { FormsPlaygroundComponent } from './forms-playground/forms-playground.component';
import { DataBindingPlaygroundComponent } from './data-binding-playground/data-binding-playground.component';
import { DefaultComponent } from './component-playground/default/default.component';
import { LifecycleComponent } from './component-playground/lifecycle/lifecycle.component';

const routes: Routes = [
  {
    path: '',
    component: PlaygroundComponent
  }
];

@NgModule({
  declarations: [
    PlaygroundComponent,
    ComponentPlaygroundComponent,
    FormsPlaygroundComponent,
    DataBindingPlaygroundComponent,
    DefaultComponent,
    LifecycleComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

    //Material
    MatExpansionModule,
    MatTabsModule
  ]
})
export class PlaygroundModule { }
