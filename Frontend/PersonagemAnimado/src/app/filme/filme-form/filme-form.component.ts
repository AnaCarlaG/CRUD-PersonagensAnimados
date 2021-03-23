import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-filme-form',
  templateUrl: './filme-form.component.html',
  styleUrls: ['./filme-form.component.scss']
})
export class FilmeFormComponent implements OnInit {

  form: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      nome:[null, [Validators.required]],
      genero:[null, [Validators.required]],
      descricao:[null, [Validators.required]],
      ano:[null, [Validators.required]]
    })
  }

}
