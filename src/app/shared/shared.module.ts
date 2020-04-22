import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalPipe } from './pipes/total.pipe';
import { StateDirective } from './directives/state.directive';
import { TableLightComponent } from './table-light/table-light.component';
import { TableDarkComponent } from './table-dark/table-dark.component';



@NgModule({
  declarations: [TotalPipe, StateDirective, TableLightComponent, TableDarkComponent],
  exports: [TotalPipe, StateDirective, TableLightComponent, TableDarkComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
