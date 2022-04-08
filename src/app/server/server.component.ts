import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  username = '';
  activeButton = false;
  displayStyle = 'visibility: hidden;';

  constructor() { }

  ngOnInit(): void {
  }

  resetName(){
    this.username = '';
    this.displayStyle = 'visibility: hidden;';
  }

  onUpdateUsername(event){
    this.displayStyle = 'visibility: visible;';
  }
}
