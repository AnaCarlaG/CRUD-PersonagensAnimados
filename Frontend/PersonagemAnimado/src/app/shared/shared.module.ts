import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';



@NgModule({
  declarations: [AlertComponent],
  exports:[AlertComponent],
  entryComponents: [AlertComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
