import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';
@Component({
  selector: 'app-venprofile',
  templateUrl: './venprofile.component.html',
  styleUrls: ['./venprofile.component.css']
})
export class VenprofileComponent implements OnInit {

  venprofile:any;
  bd:any;
  cd:any;
  gd:any;
  vendorno: any;

  formo: any;

  name: any;
  ven:any;

  street: any;

  city: any;

  postl: any;

  country: any;

  telephone: any;

  comp: any;

  paymt: any;

  bank: any;

  bkey: any;

  bacc: any;

  iban: any;
  constructor(private service: ServicesService) { }

  ngOnInit(): void {
    this.service.onvenprofile().subscribe((result)=>{
      console.log(result);
      this.venprofile=result;
//       this.bd=this.venprofile['BANKDETAIL'][0]['item'][0]['BANK_ACCT'][0];
//       this.cd=this.venprofile['COMPANYDETAIL'][0];
//       this.gd=this.venprofile['GENERALDETAIL'][0];
//       console.log("venprofile",this.venprofile);
//       this.name = this.venprofile.GENERALDETAIL[0].NAME[0];
//       console.log(this.name);
// this.comp =  this.venprofile.COMPANYDETAIL[0].COMP_CODE[0];
//   this.paymt =  this.venprofile.COMPANYDETAIL[0].PAYMENT_METHODS[0];


// this.bacc =  this.venprofile.BANKDETAIL[0]["item"][0].BANK_ACCT[0];
//   this.ven =  this.venprofile.BANKDETAIL[0]["item"][0].VENDOR[0];
//   this.bkey =  this.venprofile.BANKDETAIL[0]["item"][0].BANK_KEY[0];
//   this.bank =  this.venprofile.BANKDETAIL[0]["item"][0].BANK_CTRY[0];


// this.vendorno =  this.venprofile.GENERALDETAIL[0].VENDOR[0];
//   this.formo =  this.venprofile.GENERALDETAIL[0].FORMOFADDR[0];
  
//   this.street =  this.venprofile.GENERALDETAIL[0].STREET[0];
//   this.city =  this.venprofile.GENERALDETAIL[0].CITY[0];
//   this.postl =  this.venprofile.GENERALDETAIL[0].POSTL_CODE[0];
//   this.country =  this.venprofile.GENERALDETAIL[0].COUNTRY[0];
//   this.telephone =  this.venprofile.GENERALDETAIL[0].TELEPHONE[0];


    })
  }

}
