import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaygroundComponent } from './playground.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

//Material
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { ComponentPlaygroundComponent } from './component-playground/component-playground.component';
import { FormsPlaygroundComponent } from './forms-playground/forms-playground.component';
import { DataBindingPlaygroundComponent } from './data-binding-playground/data-binding-playground.component';
import { DefaultComponent } from './component-playground/default/default.component';
import { LifecycleComponent } from './component-playground/lifecycle/lifecycle.component';
import { ChildComponent } from './data-binding-playground/child/child.component';

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
    ChildComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),

    //Material
    MatExpansionModule,
    MatTabsModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class PlaygroundModule { }
