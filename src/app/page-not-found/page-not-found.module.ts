import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFountComponent } from './pages/page-not-fount/page-not-fount.component';
import { PageNotFountRoutingModule } from './page-not-found-routing.module';



@NgModule({
  declarations: [PageNotFountComponent],
  imports: [
    CommonModule,
    PageNotFountRoutingModule
  ]
})
export class PageNotFoundModule { }
