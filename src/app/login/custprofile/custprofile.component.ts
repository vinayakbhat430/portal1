import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-custprofile',
  templateUrl: './custprofile.component.html',
  styleUrls: ['./custprofile.component.css']
})
export class CustprofileComponent implements OnInit {

  cusprofile:any;

  constructor(private service: ServicesService,private router:Router) { }

  ngOnInit(): void {
    this.service.oncusprofile().subscribe((result)=>{
      console.log(result);
      this.cusprofile=result;
      console.log("cusprofile",this.cusprofile);
    })
  }
  backButton(){
    this.router.navigate(['cust']);

  }

}
