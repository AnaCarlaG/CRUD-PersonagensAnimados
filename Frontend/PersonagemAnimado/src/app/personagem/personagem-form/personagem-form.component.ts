import { PersonagemService } from './../../Service/PersonagemService/personagem.service';
import { Personagem } from './../../Model/Personagem.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'src/app/shared/alert.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Guid } from 'guid-typescript';
import { Location } from '@angular/common';
import { BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-personagem-form',
  templateUrl: './personagem-form.component.html',
  styleUrls: ['./personagem-form.component.scss'],
})
export class PersonagemFormComponent implements OnInit {
  personagem = new Personagem();
  form: FormGroup;
  submitted: boolean = false;
  genero: any = localStorage
    .getItem('genero')
    ?.replace('"', '')
    .replace('"', '');

  constructor(
    private fb: FormBuilder,
    private personagemService: PersonagemService,
    private alertService: AlertService,
    private location: Location,
    private route: ActivatedRoute,
    private modalService: BsModalService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      id: Guid.EMPTY,
      nome: [null, [Validators.required]],
      genero: [null],
      descricao: [null, [Validators.required]],
      poderes: [null],
      filmeID: [Guid.EMPTY, Validators.required],
    });

    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');
      const personagem$ = this.personagemService.ObterPorId(
        Guid.parse(id ? id : Guid.create().toString())
      );
      personagem$.subscribe((personagem) => {
        this.updateForm(personagem);
      });
    });
  }

  updateForm(personagem: any) {
    this.form.patchValue({
      id: personagem.id,
      nome: personagem.nome,
      genero: personagem.genero,
      descricao: personagem.descricao,
      ano: personagem.ano,
    });
  }

  public onSubmit() {
    this.submitted = true;
    const filmeId = localStorage
      .getItem('filmeId')
      ?.replace('"', '')
      .replace('"', '');

    if (this.form.valid) {
      this.form.patchValue({ filmeID: filmeId });
      this.personagemService.Cadastrar(this.form.value).subscribe(
        (success) => {
          this.alertService.showAlertSuccess('Operação feita com sucesso');

          if(this.router.url == ("/editarPersonagem/"+this.form.get('id')?.value)) return this.location.back();
          this.modalService.hide();
        },
        (error) =>
          this.alertService.showAlertDanger('Erro na operação')
      );
    }
    console.log('submit');
  }

  onCancel() {
    this.submitted = false;
    if(this.router.url == ("/editarPersonagem/"+this.form.get('id')?.value)) return this.location.back();
    this.form.reset();
    this.modalService.hide();


  }

  hasError(field: string) {
    return this.form.get(field)?.errors;
  }
}
