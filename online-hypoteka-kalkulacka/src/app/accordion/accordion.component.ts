import {Component, OnInit} from '@angular/core';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  providers: [MessageService]
})
export class AccordionComponent implements OnInit {
  constructor(private messageService: MessageService) {
  }

  onTabOpen(event) {
    this.messageService.add({severity: 'info', summary: 'Tab Expanded', detail: 'Index: ' + event.index});
  }

  ngOnInit() {
  }

}
