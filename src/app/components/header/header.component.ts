import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  visible: boolean = false;
  items: MenuItem[];

  constructor() { }

  ngOnInit(): void {
    this.items = [{
      label: 'Lista de Acesso',
      icon: 'pi pi-pw pi-user'
    }, {
      label: 'Cartões de Acesso',
      icon: 'pi pi-pw pi-id-card'
    }, {
      label: 'Documentos',
      icon: 'pi pi-pw pi-file'
    }, {
      label: 'Centro de Convenções',
      icon: 'pi pi-pw pi-star'
    }];
  }

}
