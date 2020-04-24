import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalPipe } from './pipes/total.pipe';
import { StateDirective } from './directives/state.directive';
import { TableLightComponent } from './table-light/table-light.component';
import { TableDarkComponent } from './table-dark/table-dark.component';
import { TemplatesModule } from '../templates/templates.module';
import { BtnComponent } from './components/btn/btn.component';
import { RouterModule } from '@angular/router';
import { IconsModule } from '../icons/icons.module';



@NgModule({
  declarations: [TotalPipe, StateDirective, TableLightComponent, TableDarkComponent, BtnComponent],
  exports: [TotalPipe, StateDirective, TableLightComponent, TableDarkComponent, TemplatesModule, BtnComponent, IconsModule],
  imports: [
    CommonModule,
    TemplatesModule,
    RouterModule,
    IconsModule
  ]
})
export class SharedModule { }
