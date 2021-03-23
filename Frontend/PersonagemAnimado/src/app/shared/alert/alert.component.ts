import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  @Input() message: string = "";
  @Input() type: string = "";
  constructor(public bsModal: BsModalRef) { }

  ngOnInit(): void {

  }

  onClose(){
    this.bsModal.hide();
  }
}
