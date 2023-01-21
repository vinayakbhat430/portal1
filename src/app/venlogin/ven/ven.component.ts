import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ven',
  templateUrl: './ven.component.html',
  styleUrls: ['./ven.component.css']
})
export class VenComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onProfile(pagename:string):void{
    this.router.navigate([`${pagename}`]);

  }
  onDash(pagename:string):void{
    this.router.navigate([`${pagename}`]);

  }
  onFinance(pagename:string):void{
    this.router.navigate([`${pagename}`]);

  }

}
