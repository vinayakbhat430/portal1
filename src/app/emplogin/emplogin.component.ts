import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import{Router} from '@angular/router';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-emplogin',
  templateUrl: './emplogin.component.html',
  styleUrls: ['./emplogin.component.css']
})
export class EmploginComponent implements OnInit {

  user: string | undefined;
  password: string | undefined;

  emplogin:any={"EMP_ID":"","PASSWORD":""};
  constructor(private router:Router,private service: ServicesService ) {}

  ngOnInit(): void {
  }

  LoginUser2(pagename:string):void
  {
    if(this.user != '' && this.password != '')
    {
      // console.log("welcome dude");
      console.log(this.user);
      console.log(this.password);
      this.emplogin['EMP_ID']=this.user;
      this.emplogin['PASSWORD']=this.password;
      console.log(this.emplogin);
      this.service.onemplogin(this.emplogin).subscribe((result)=>{
        if(result=="SUCCESS")
        {
          // alert("Valid User");
          this.service.EMP.EMP_ID = this.user;
          this.service.onempprofile().subscribe((result)=>{
            this.service.empProfile = result;
            console.log(this.service.empProfile);
            this.router.navigate([`${pagename}`]);
          });
          
          
        }
        else if(result=="INVALID PASSWORD")
        {
          alert("Invalid Password");
        }
        else
        {
          alert("Invalid User");
        }
      console.log(result);
      })
    } 
  }

}
