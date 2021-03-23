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
    path:'adicionar-filme', component: FilmeFormComponent
  },
  {
    path:'editar-filme/:id', component: FilmeFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
