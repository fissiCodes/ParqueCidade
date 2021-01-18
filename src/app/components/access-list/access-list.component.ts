import { Component, OnInit } from '@angular/core';
import { AccessList} from '../../resources/models/accessList';

@Component({
  selector: 'app-access-list',
  templateUrl: './access-list.component.html',
  styleUrls: ['./access-list.component.scss']
})
export class AccessListComponent implements OnInit {

  accessList: any[];
  lists: AccessList[];
  selectedList: AccessList;
  confirm: boolean = false;
  reprove: boolean = false;

  constructor() { 
  }

  ngOnInit(): void {
    this.lists = [{id: 1,list: ['one', 'two', 'three'], length: 3, tenant: 'ANAC', date: '18/01/2021', deleted: false}, 
                  {id: 2,list: ['one', 'two', 'three'], length: 3, tenant: 'MDH', date: '18/01/2021', deleted: false},
                  {id: 2,list: ['one', 'two', 'three'], length: 3, tenant: 'COOPERFORT', date: '18/01/2021', deleted: false}];
    this.selectedList = new AccessList;
  }

}
