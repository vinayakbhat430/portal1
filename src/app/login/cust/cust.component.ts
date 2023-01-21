import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';

@Component({
  selector: 'app-cust',
  templateUrl: './cust.component.html',
  styleUrls: ['./cust.component.css']
})
export class CustComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onacclogo(pagename:string):void
  {
    this.router.navigate([`${pagename}`]);
  }
}
