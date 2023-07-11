import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaygroundComponent } from './playground.component';
import { Routes, RouterModule } from '@angular/router';

//Material
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';

import { ComponentPlaygroundComponent } from './component-playground/component-playground.component';
import { FormsPlaygroundComponent } from './forms-playground/forms-playground.component';
import { DataBindingPlaygroundComponent } from './data-binding-playground/data-binding-playground.component';
import { DefaultComponent } from './component-playground/default/default.component';
import { LifecycleComponent } from './component-playground/lifecycle/lifecycle.component';
import { InputComponent } from './data-binding-playground/input/input.component';
import { OutputComponent } from './data-binding-playground/output/output.component';
import { TwoWayComponent } from './data-binding-playground/two-way/two-way.component';

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
    LifecycleComponent,
    InputComponent,
    OutputComponent,
    TwoWayComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

    //Material
    MatExpansionModule,
    MatTabsModule,
    MatButtonModule
  ]
})
export class PlaygroundModule { }
