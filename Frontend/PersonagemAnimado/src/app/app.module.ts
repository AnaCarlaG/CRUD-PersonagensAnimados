import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
//Component
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FilmeComponent } from './filme/filme.component';
import { PersonagemComponent } from './personagem/personagem.component';
import { PersonagemFormComponent } from './personagem/personagem-form/personagem-form.component';
import { FilmeFormComponent } from './filme/filme-form/filme-form.component';

//Service
import { FilmeService } from './Service/FilmeService/filme.service';
import { PersonagemService } from './Service/PersonagemService/personagem.service';

//imports
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ModalModule} from 'ngx-bootstrap/modal';
import { SharedModule } from './shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import {NgxMaskModule, IConfig} from 'ngx-mask';
import {IvyCarouselModule} from 'angular-responsive-carousel';

const maskConfig: Partial<IConfig> = {
  validation: false,
};
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    FilmeComponent,
    FilmeFormComponent,
    PersonagemComponent,
    PersonagemFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule,
    HttpClientModule,
    ModalModule.forRoot(),
    SharedModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(maskConfig),
    IvyCarouselModule
  ],
  providers: [FilmeService, PersonagemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
