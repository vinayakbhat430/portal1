import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';

@Component({
  selector: 'app-custdash',
  templateUrl: './custdash.component.html',
  styleUrls: ['./custdash.component.css']
})
export class CustdashComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  oninquiry(pagename:string):void
  {
    this.router.navigate([`${pagename}`]);
  }

  onsales(pagename:string):void
  {
    this.router.navigate([`${pagename}`]);
  }

  onlist(pagename:string):void
  {
    this.router.navigate([`${pagename}`]);
  }

}
