import { ButtonModule, CalendarModule, PanelModule } from 'primeng/primeng';
import { NgModule } from '@angular/core';
@NgModule({
  imports: [
    ButtonModule,
    CalendarModule,
    PanelModule
  ],
  exports: [
    ButtonModule,
    CalendarModule,
    PanelModule
  ]
})

export class PrimeNgImports {}