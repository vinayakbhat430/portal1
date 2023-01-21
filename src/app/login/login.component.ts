import { Component, OnInit } from '@angular/core'
import { RouterLink } from '@angular/router'
import { Router } from '@angular/router'
import { ServicesService } from 'src/app/services.service'
import { ReactiveFormsModule } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  ngOnInit() {}

  user: string | undefined
  password: string | undefined

  cuslogin: any = { CUST_NO: '', PASSWORD: '' }
  constructor(private router: Router, private service: ServicesService) {}

  ForgotPassword(pagename: string):void {
    console.log('Forgot password clickee');
    this.service.ChangePasswordUser = this.user;

    this.router.navigate([`${pagename}`]);
  }

  LoginUser(pagename: string): void {
    if (this.user != '' && this.password != '') {
      // console.log("welcome dude");
      console.log(this.user)
      console.log(this.password)
      this.cuslogin['CUST_NO'] = this.user
      this.cuslogin['PASSWORD'] = this.password
      console.log(this.cuslogin)
      this.service.oncuslogin(this.cuslogin).subscribe((result) => {
        if (result == 'S') {
          // alert("Valid User");
          this.service.CUS.CUST_NO = this.user
          this.router.navigate([`${pagename}`])
          console.log(this.service.CUS)
          this.user = ''
          this.password = ''
        } else if (result == 'E') {
          alert('Incorrect Password')
        } else {
          alert('Invalid User')
        }
        console.log(result)
      })
    }
  }
}
