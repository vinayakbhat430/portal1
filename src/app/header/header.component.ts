import { Component, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{Router} from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onhomelogo(pagename:string):void
  {
    this.router.navigate([`${pagename}`]);
  }

  onlogoutlogo(pagename:string):void
  {
    this.router.navigate([`${pagename}`],{replaceUrl:true});
    this.router.ngOnDestroy();
  }
}
