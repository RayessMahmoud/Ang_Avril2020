import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFountComponent } from './pages/page-not-fount/page-not-fount.component';
const routes: Routes = [
  { path: '', component: PageNotFountComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageNotFountRoutingModule { }
