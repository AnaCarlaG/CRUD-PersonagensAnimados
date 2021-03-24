import { Guid } from 'guid-typescript';
import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private filmeService: FilmeService, private router: Router, private route:  ActivatedRoute) { }

  ngOnInit(): void {

    this.filmes$ = this.filmeService.ObterTodos().pipe(catchError(error =>
      {
        console.log(error);
        //this.error$.next(true);
        return empty();
      }));

  }

  onEdit(id: Guid){
    this.router.navigate(["editarfilme",id]);
  }
}
