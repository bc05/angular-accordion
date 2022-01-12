import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgendaComponent } from '../agenda/agenda.component';

import { NgbdAccordionBasic } from './accordion-basic';

@NgModule({
  imports: [BrowserModule, NgbModule],
  declarations: [NgbdAccordionBasic, AgendaComponent],
  exports: [NgbdAccordionBasic],
  bootstrap: [NgbdAccordionBasic],
})
export class NgbdAccordionBasicModule {}
