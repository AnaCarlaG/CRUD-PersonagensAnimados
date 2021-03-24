import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Injectable } from '@angular/core';
import { AlertComponent } from './alert/alert.component';

export enum AlertTypes {
  DANGER = 'danger',
  SUCCESS = 'success',
}
@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor(private modalService: BsModalService) {}

  private showAlert(message: string, type: AlertTypes, dismissTimeout?: number) {
    const bsModalRef: BsModalRef = this.modalService.show(AlertComponent);
    bsModalRef.content.type = type;
    bsModalRef.content.message = message;

    if(dismissTimeout){
      setTimeout(()=>bsModalRef.hide(),dismissTimeout);
    }
  }

  showAlertDanger(message: string) {
    this.showAlert(message, AlertTypes.DANGER,3000);
  }
  showAlertSuccess(message: string) {
    this.showAlert(message, AlertTypes.SUCCESS),3000;
  }
}
