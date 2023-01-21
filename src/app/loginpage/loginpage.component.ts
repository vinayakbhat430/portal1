import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import{Router} from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  myfunction(pagename:string):void
  {
    // this.router.navigate([`${pagename}`]);
    this.router.navigate([`${pagename}`]);
    // this.router.navigate(['/login']);
  }

  myfunction1(pagename:string):void
  {
    // this.router.navigate([`${pagename}`]);
    this.router.navigate([`${pagename}`]);
    // this.router.navigate(['/login']);
  }

  myfunction2(pagename:string):void
  {
    // this.router.navigate([`${pagename}`]);
    this.router.navigate([`${pagename}`]);
    // this.router.navigate(['/login']);
  }


}
