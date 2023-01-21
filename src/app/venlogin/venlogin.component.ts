import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import{Router} from '@angular/router';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-venlogin',
  templateUrl: './venlogin.component.html',
  styleUrls: ['./venlogin.component.css']
})
export class VenloginComponent implements OnInit {

  user: string | undefined;
  password: string | undefined;

  // venlogin:any;
  venlogin:any={"VEN_ID":"","PASSWORD":""};
  constructor(private router:Router,private service: ServicesService ) {}

  ngOnInit(): void {
  }

  LoginUser1(pagename:string):void
  {
    if(this.user != '' && this.password != '')
    {
      // console.log("welcome dude");
      console.log(this.user);
      console.log(this.password);
      this.venlogin['VEN_ID']=this.user;
      this.venlogin['PASSWORD']=this.password;
      console.log(this.venlogin);
      this.service.onvenlogin(this.venlogin).subscribe((result)=>{
        if(result == "SUCCESS")
        {
          // alert("Valid User");
          this.service.VEN.VEN_ID = this.user;
          this.router.navigate([`${pagename}`]);
        }
        else
        {
          alert("Invalid User"+result);
        }
      console.log(result);
      })
    } 
  }
}
