import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { BsComponentRef } from 'ngx-bootstrap/component-loader';
import { BsModalRef, BsModalService, ModalContainerComponent } from 'ngx-bootstrap/modal';
import { empty, Observable, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Filme } from '../Model/Filme.model';
import { FilmeService } from '../Service/FilmeService/filme.service';
import { AlertComponent } from '../shared/alert/alert.component';

@Component({
  selector: 'app-filme',
  templateUrl: './filme.component.html',
  styleUrls: ['./filme.component.scss'],
  preserveWhitespaces: true
})
export class FilmeComponent implements OnInit {

  filmes$: Observable<Filme[]> = new Observable();
  error$ = new Subject<Boolean>();
  bsModalRef: BsModalRef = new BsModalRef();

  constructor(private filmeService: FilmeService, private modalService: BsModalService) { }

  ngOnInit(): void {

    this.filmes$ = this.filmeService.ObterTodos().pipe(catchError(error => 
      {
        console.log(error);
        //this.error$.next(true);
        this.hadlerError();
        return empty();
      }));

  }
hadlerError(){
this.bsModalRef = this.modalService.show(AlertComponent);
this.bsModalRef.content.type = 'danger';
this.bsModalRef.content.message = 'Erro ao tentar carregar os filmes';
}

}
