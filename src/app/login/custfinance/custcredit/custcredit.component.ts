import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-custcredit',
  templateUrl: './custcredit.component.html',
  styleUrls: ['./custcredit.component.css']
})
export class CustcreditComponent implements OnInit {

  cuscredit:any;
  docnumber:any;
  docnumber1:any;
  docnumber2:any;
  docnumber3:any;

  constructor(private service: ServicesService) { }

  ngOnInit(): void {
    this.service.oncuscredit().subscribe((result)=>{
      console.log(result);
      this.cuscredit=result;
      console.log("cuscredit",this.cuscredit);
    })
  }
  detail(d:any){
    this.openPopup();
    this.docnumber=d.GJAHR;
    this.docnumber1=d.AUGDT;
    this.docnumber2=d.PSWBT;
    this.docnumber3=d.PSWSL;
    
    
  }
  displayStyle = "none";
    openPopup() {
  
      this.displayStyle = "block";
  
    }
  
    closePopup() {
  
      this.displayStyle = "none";
  
    }

}
