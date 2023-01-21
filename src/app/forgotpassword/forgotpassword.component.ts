import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  username:any | string;
  newPassword:any | string;
  confirmPassword:any | string;

  constructor(private router:Router, private service:ServicesService) { }

  ngOnInit(): void {
    this.username = this.service.ChangePasswordUser;
  }

  Redir(pagename:string){
    if (this.username != '' && this.newPassword != '' && this.confirmPassword!=''){
      if(this.newPassword === this.confirmPassword){
        this.service.onPassForgot(this.username,this.newPassword).subscribe((result)=>{
          console.log(result);
          if(result === "S"){
            this.router.navigate([`${pagename}`]);
            console.log(result);

          }
          else{
            alert('Password Change Unsuccessful');
          }
         
        })
        // this.router.navigate([`${pagename}`]);

      }
      else{
        alert('Passwords not Matching');
      }
    }
  }

}
