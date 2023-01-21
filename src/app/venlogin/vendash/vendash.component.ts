import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';

@Component({
  selector: 'app-vendash',
  templateUrl: './vendash.component.html',
  styleUrls: ['./vendash.component.css']
})
export class VendashComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onrequest(pagename:string):void
  {
    this.router.navigate([`${pagename}`]);
  }

  onpurchase(pagename:string):void
  {
    this.router.navigate([`${pagename}`]);
  }

  ongoods(pagename:string):void
  {
    this.router.navigate([`${pagename}`]);
  }

}
