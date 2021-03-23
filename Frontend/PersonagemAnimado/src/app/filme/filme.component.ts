import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Filme } from '../Model/Filme.model';
import { FilmeService } from '../Service/FilmeService/filme.service';

@Component({
  selector: 'app-filme',
  templateUrl: './filme.component.html',
  styleUrls: ['./filme.component.scss'],
  preserveWhitespaces: true 
})
export class FilmeComponent implements OnInit {



  constructor(private filmeService: FilmeService) { }

  ngOnInit(): void {
    this.filmeService.ObterTodos().subscribe(filmes => 
      {
        console.log(filmes);
      },error =>
      {
        console.log(error);
      });
    
  }


}
