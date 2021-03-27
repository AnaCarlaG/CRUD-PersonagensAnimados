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
      img: '../../assets/Caroussel/demon-slayer-1920x450.jpg'
    },
    {
      img: '../../assets/Caroussel/Capa-Shirobako.jpg'
    },
    {
      img: '../../assets/Caroussel/src_assets_frozen.jpg'
    }
  ];
  constructor(private _config: NgbCarouselConfig) { }

  ngOnInit(): void {
    this._config.interval = 1000;
    this._config.pauseOnHover = true;
    this._config.showNavigationArrows = false;

  }

}
