import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'playground', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('src/app/layout/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'playground',
    loadChildren: () => import('src/app/layout/playground/playground.module').then(m => m.PlaygroundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
