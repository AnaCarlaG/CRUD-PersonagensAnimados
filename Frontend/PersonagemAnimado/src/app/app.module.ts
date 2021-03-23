import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './home/home.component';
//import { SlickCarouselModule } from 'ngx-slick-carousel';
//import {IvyCarouselModule} from 'angular-responsive-carousel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FilmeComponent } from './filme/filme.component';
import { GeneroComponent } from './genero/genero.component';
import { HttpClientModule } from '@angular/common/http';
import { FilmeService } from './Service/FilmeService/filme.service';
import { PersonagemService } from './Service/PersonagemService/personagem.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    FilmeComponent,
    GeneroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [FilmeService, PersonagemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
