import { PersonagemService } from './../../Service/PersonagemService/personagem.service';
import { Personagem } from './../../Model/Personagem.model';
import {
  Component,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'src/app/shared/alert.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Guid } from 'guid-typescript';
import { Location } from '@angular/common';

@Component({
  selector: 'app-personagem-form',
  templateUrl: './personagem-form.component.html',
  styleUrls: ['./personagem-form.component.scss'],
})
export class PersonagemFormComponent implements OnInit {
  personagem = new Personagem();
  form: FormGroup;
  submitted: boolean = false;

  constructor(
    private fb: FormBuilder,
    private personagemService: PersonagemService,
    private alertService: AlertService,
    private location: Location,
    private route: ActivatedRoute
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

      // this.route.paramMap.subscribe((params: ParamMap) => {
      //   const id = params.get('id');
      //   console.log(id);
      //   this.onSubmit(Guid.parse(id ? id : Guid.create().toString()));
      // });
  }

  public onSubmit() {
    this.submitted = true;
 //   console.log(filmeId);
    console.log(this.form.value);
    if (this.form.valid) {
    //  this.form.patchValue({filmeID: filmeId});
      console.log("preenchido"+this.form.value);
    console.log(this.form.value);
    //   this.personagemService.Cadastrar(this.form.value).subscribe(
    //     (success) => {
    //       this.alertService.showAlertSuccess('Cadastrado com sucesso');
    //       this.location.go('personagens');
    //     },
    //     (error) =>
    //       this.alertService.showAlertDanger('Erro ao cadastrar um novo filme')
    //   );
     }
    console.log("submit");
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
