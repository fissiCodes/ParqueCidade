import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {

  user: string;
  msgVisible: boolean = false;
  fase1: boolean = true;
  @ViewChild("username") username: ElementRef;

  constructor() { }

  ngOnInit(): void {
    this.user = "";
  }

  ngAfterViewInit(): void{
    console.log(this.username.nativeElement.value);
  }

  next(){
    console.log(this.user);
    console.log(this.username.nativeElement.value);
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
