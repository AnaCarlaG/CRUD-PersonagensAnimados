import { PersonagemFormComponent } from './../personagem/personagem-form/personagem-form.component';
import { Guid } from 'guid-typescript';
import { Component, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
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
  persoModalRef: BsModalRef;

  @ViewChild('deleteModal') deleteModal: TemplateRef<any>;
  @ViewChild('adicionarPersonagem') adicionarPersonagem: TemplateRef<any>;

  form:PersonagemFormComponent;

  id: any;

  constructor(
    private filmeService: FilmeService,
    private router: Router,
    private route: ActivatedRoute,
    private alertService: AlertService,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {

    this.filmes$ = this.filmeService.ObterTodos();

    this.onRefresh();
  }

  onEdit(id: Guid) {

    this.router.navigate(['editarfilme', id]);
  }
  onDelete(id: Guid) {
    this.id = id;
    this.deleModalRef= this.modalService.show(this.deleteModal, {class: 'modal-sm'});
  }
  onAdicionarPersonagem(){
    this.persoModalRef= this.modalService.show(this.adicionarPersonagem, {class: 'modal-sm'});
  }
  onRefresh(){
    this.filmes$ = this.filmeService.ObterTodos();
    }

  onConfirmDelete(){
      this.filmeService.Delete(this.id).subscribe(
        success => {
          this.deleModalRef.hide();
          this.onRefresh();
        },
        error => {
          this.alertService.showAlertDanger("Erro ao tentar deletar");
          this.deleModalRef.hide();
        }
      );
  }

  onDeclineDelete(){
    this.deleModalRef.hide();
  }
  onSavePersonagem(){
    this.form.onSubmit(this.id);
    this.persoModalRef.hide();
  }
  onCancel(){
    this.form.onCancel();
    this.persoModalRef.hide();
  }
}
