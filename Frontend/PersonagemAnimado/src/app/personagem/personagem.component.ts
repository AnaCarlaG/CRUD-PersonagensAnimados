import { Personagem } from './../Model/Personagem.model';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { empty, Observable, Subject } from 'rxjs';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormBuilder } from '@angular/forms';
import { PersonagemService } from '../Service/PersonagemService/personagem.service';
import { AlertService } from '../shared/alert.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { catchError } from 'rxjs/internal/operators';
import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-personagem',
  templateUrl: './personagem.component.html',
  styleUrls: ['./personagem.component.scss']
})
export class PersonagemComponent implements OnInit {
  personagem$: Observable<Personagem[]> = new Observable();
  error$ = new Subject<Boolean>();
  deleModalRef: BsModalRef;
  @ViewChild('deleteModal') deleteModal: TemplateRef<any>;

  id: any;
  constructor(
    private personagemService: PersonagemService,
    private router: Router,
    private route: ActivatedRoute,
    private alertService: AlertService,
    private modalService: BsModalService) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');
      console.log(id);
      const filme$ = this.personagemService.ObterPersonagensFilme(
        Guid.parse(id ? id : Guid.create().toString())
      );
    });

    this.onRefresh();
  }

  onEdit(id: Guid) {
    this.router.navigate(['editarPersonagem', id]);
  }

  onDelete(id: Guid) {
    this.id = id;
    this.deleModalRef= this.modalService.show(this.deleteModal, {class: 'modal-sm'});
  }
  onRefresh(){
   // this.personagem$ = this.personagemService.ObterTodos();
    }

  onConfirmDelete(){
      this.personagemService.Delete(this.id).subscribe(
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

}
