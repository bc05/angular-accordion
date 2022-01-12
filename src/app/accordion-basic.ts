import { Component, ViewChild } from '@angular/core';
import { NgbAccordionConfig, NgbAccordion } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-accordion-basic',
  templateUrl: './accordion-basic.html',
  providers: [NgbAccordionConfig],
})
export class NgbdAccordionBasic {
  @ViewChild('acc') accordion: NgbAccordion;
  hasOnePanelOpen: boolean = false;

  constructor(config: NgbAccordionConfig) {
    config.closeOthers = true;
  }

  onHasOpenPanelItem($event): void {
    this.hasOnePanelOpen = false;
    this.accordion.collapseAll();
  }

  handlePanelChange($event): void {
    this.hasOnePanelOpen = $event.nextState;
  }
}
