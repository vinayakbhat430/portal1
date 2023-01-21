import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';

@Component({
  selector: 'app-venfinance',
  templateUrl: './venfinance.component.html',
  styleUrls: ['./venfinance.component.css']
})
export class VenfinanceComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onveninvoice(pagename:string):void
  {
    this.router.navigate([`${pagename}`]);
  }

  onvenpay(pagename:string):void
  {
    this.router.navigate([`${pagename}`]);
  }

  onvencredit(pagename:string):void
  {
    this.router.navigate([`${pagename}`]);
  }

  onvendebit(pagename:string):void
  {
    this.router.navigate([`${pagename}`]);
  }

}
