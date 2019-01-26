import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TypesComponent } from './components/types/types.component';

const routes: Routes = [
  { path: 'types', component: TypesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
