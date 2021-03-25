import { PersonagemComponent } from './personagem/personagem.component';
import { FilmeFormComponent } from './filme/filme-form/filme-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmeComponent } from './filme/filme.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path:'filmes', component: FilmeComponent
  },
  {
    path:'adicionarfilme', component: FilmeFormComponent
  },
  {
    path:'editarfilme/:id', component: FilmeFormComponent
  },
  {
    path:'personagens', component: PersonagemComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
