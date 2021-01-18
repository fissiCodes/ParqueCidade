import { TitleCasePipe } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {

  user: string;
  email: string;
  msgVisible: boolean = false;
  fase1: boolean = true;
  visible: boolean = true;

  constructor() { }

  ngOnInit(): void {
    this.user = "";
    this.email = "";
  }

  getUserInput(value){
    this.user = value as string;
    if(this.user == "" || this.user == undefined){
      this.msgVisible = true;
    } else {
      this.msgVisible = false;
      this.visible = !this.visible;
    }
  }

  getEmailInput(value){
    this.email = value as string;
    if(this.email == "" || this.email == undefined){
      this.msgVisible = true;
    } else {
      this.msgVisible = false;
      this.visible = !this.visible;
    }
  }
  
  next(){
    console.log(this.user);
    // if(){
    //   .style.backgroundColor = "red";
    //   this.msgVisible = true;
    // } else {
    //   this.msgVisible = false;
    //   .style.backgroundColor = "white";
    //   this.fase1 = false;
    // }
  }

}
