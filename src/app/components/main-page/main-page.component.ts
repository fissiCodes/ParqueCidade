import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  apresentation: string;

  constructor(
    private route: Router
  ) { }

  ngOnInit(): void {
    this.apresentation = "Parque Cidade Corporate é um projeto singular que chega à Capital Federal," +
     "grande centro político e de negócios do país, um empreendimento que aplica o conceito internacional TRIPLE A em Brasília."
  }

}
