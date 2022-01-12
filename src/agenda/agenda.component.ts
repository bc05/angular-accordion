import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

import { NgbAccordion, NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css'],
})
export class AgendaComponent {
  private _onePanelHasBeenOpen: boolean;

  @ViewChild('acc') accordion: NgbAccordion;
  @Output() hasOpenPanelItem = new EventEmitter<boolean>();
  @Input() set onePanelHasBeenOpen(value: boolean) {
    this._onePanelHasBeenOpen = value;
    this.handleWithFatherChangePanel();
  }
  get onePanelHasBeenOpen(): boolean {
    return this._onePanelHasBeenOpen;
  }

  constructor(config: NgbAccordionConfig) {
    config.closeOthers = true;
  }

  handleWithFatherChangePanel(): void {
    if (this.onePanelHasBeenOpen) {
      this.accordion.collapseAll();
    }
  }

  onPanelChange($event): void {
    if ($event.nextState) {
      this.hasOpenPanelItem.emit(true);
    }
  }
}
