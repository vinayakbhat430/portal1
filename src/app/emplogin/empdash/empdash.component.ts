import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';

@Component({
  selector: 'app-empdash',
  templateUrl: './empdash.component.html',
  styleUrls: ['./empdash.component.css']
})
export class EmpdashComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onempprofile(pagename:string):void
  {
    this.router.navigate([`${pagename}`]);
  }

  onsalary(pagename:string):void
  {
    this.router.navigate([`${pagename}`]);
  }

  onleave(pagename:string):void
  {
    this.router.navigate([`${pagename}`]);
  }

}
