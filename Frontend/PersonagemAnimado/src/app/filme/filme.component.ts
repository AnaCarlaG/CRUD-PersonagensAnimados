import { Guid } from 'guid-typescript';
import { error } from '@angular/compiler/src/util';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { BsComponentRef } from 'ngx-bootstrap/component-loader';
import {
  BsModalRef,
  BsModalService,
  ModalContainerComponent,
} from 'ngx-bootstrap/modal';
import { empty, Observable, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Filme } from '../Model/Filme.model';
import { FilmeService } from '../Service/FilmeService/filme.service';
import { AlertComponent } from '../shared/alert/alert.component';
import { AlertService } from '../shared/alert.service';
import { waitForAsync } from '@angular/core/testing';

@Component({
  selector: 'app-filme',
  templateUrl: './filme.component.html',
  styleUrls: ['./filme.component.scss'],
  preserveWhitespaces: true,
})
export class FilmeComponent implements OnInit {
  filmes$: Observable<Filme[]> = new Observable();
  error$ = new Subject<Boolean>();
  deleModalRef: BsModalRef;
  @ViewChild('deleteModal') deleteModal: TemplateRef<any>;

  id: any;

  constructor(
    private filmeService: FilmeService,
    private router: Router,
    private route: ActivatedRoute,
    private alertService: AlertService,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {
    this.filmes$ = this.filmeService.ObterTodos().pipe(
      catchError((error) => {
        console.log(error);
        //this.error$.next(true);
        return empty();
      })
    );
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');

    });
  }

  onEdit(id: Guid) {
    this.router.navigate(['editarfilme', id]);
  }

  onDelete() {
    this.deleModalRef= this.modalService.show(this.deleteModal, {class: 'modal-sm'});
  }

  onConfirmDelete(){
      this.filmeService.Delete(this.id).subscribe(
        success => this.alertService.showAlertSuccess("Deletado com sucesso"),
        error => this.alertService.showAlertDanger("Erro ao tentar deletar")
      );
  }

  onDeclineDelete(){
    this.deleModalRef.hide();
  }
}
