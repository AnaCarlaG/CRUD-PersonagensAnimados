import { AlertService } from './../../shared/alert.service';
import { FilmeService } from './../../Service/FilmeService/filme.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Guid } from 'guid-typescript';
import { error } from 'selenium-webdriver';
import { Filme } from 'src/app/Model/Filme.model';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-filme-form',
  templateUrl: './filme-form.component.html',
  styleUrls: ['./filme-form.component.scss'],
})
export class FilmeFormComponent implements OnInit {
  filme = new Filme();
  form: FormGroup;
  submitted: boolean = false;

  public customPatterns = { '0': { pattern: new RegExp('[0-9]') } };

  constructor(
    private fb: FormBuilder,
    private filmeService: FilmeService,
    private alertService: AlertService,
    private location: Location,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      id:[null],
      nome: [null, [Validators.required]],
      genero: [null, [Validators.required]],
      descricao: [null, [Validators.required]],
      ano: [null],
    });

    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');
      const filme$ = this.filmeService.ObterPorId(
        Guid.parse(id ? id : Guid.create().toString())
      );
      filme$.subscribe((filme) => {
        this.updateForm(filme);
      });
    });
  }

  updateForm(filme: any) {
    this.form.patchValue({
      id: filme.id,
      nome: filme.nome,
      genero: filme.genero,
      descricao: filme.descricao,
      ano: filme.ano,
    });
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.form.value);
    if (this.form.valid) {
      this.filmeService.Cadastrar(this.form.value).subscribe(
        (success) => {
          this.alertService.showAlertSuccess('Cadastrado com sucesso');
          this.location.back();
        },
        (error) =>
          this.alertService.showAlertDanger('Erro ao cadastrar um novo filme')
      );
      console.log('submit');
    }
  }

  onCancel() {
    this.submitted = false;
    this.form.reset();
    this.location.back();
  }

  hasError(field: string) {
    return this.form.get(field)?.errors;
  }
}
