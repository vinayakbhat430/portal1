import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';

@Component({
  selector: 'app-custfinance',
  templateUrl: './custfinance.component.html',
  styleUrls: ['./custfinance.component.css']
})
export class CustfinanceComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  oncustinvoice(pagename:string):void
  {
    this.router.navigate([`${pagename}`]);
  }

  oncustpay(pagename:string):void
  {
    this.router.navigate([`${pagename}`]);
  }

  oncustcredit(pagename:string):void
  {
    this.router.navigate([`${pagename}`]);
  }

  oncustdebit(pagename:string):void
  {
    this.router.navigate([`${pagename}`]);
  }

}
