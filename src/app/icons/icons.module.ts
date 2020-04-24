import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconNavComponent } from './components/icon-nav/icon-nav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDelComponent } from './components/icon-del/icon-del.component';
import { DeleteComponent } from './components/delete/delete.component';



@NgModule({
  declarations: [IconNavComponent, IconDelComponent, DeleteComponent],
  exports: [IconNavComponent, IconDelComponent, DeleteComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ]
})
export class IconsModule { }
