import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  filmes: any[] =
    [{
      img: '../../assets/Caroussel/Animações Juntas.jpg'
    },
    {
      img: '../../assets/Caroussel/Animações Juntas 2.jpg'
    },
    {
      img: '../../assets/Caroussel/capa-series-animadas-disney.jpg'
    },
    {
      img: '../../assets/Caroussel/Disney-Pixar-Easter-Eggs-Video-Connected-Universe.jpg'
    }];
  constructor(private _config: NgbCarouselConfig) { }

  ngOnInit(): void {
  }

}
