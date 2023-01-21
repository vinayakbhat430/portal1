import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-custinvoice',
  templateUrl: './custinvoice.component.html',
  styleUrls: ['./custinvoice.component.css']
})
export class CustinvoiceComponent implements OnInit {
  enteredSearchText:string = "";

  cusinv:any;
  docnumber:any;
  docnumber1:any;
  docnumber2:any;
  docnumber3:any;
  docnumber4:any;
  docnumber5:any;
  docnumber6:any;
  docnumber7:any;
  docnumber8:any;

  constructor(private service: ServicesService) { }

  ngOnInit(): void {
    this.service.oncusinv().subscribe((result)=>{
      console.log(result);
      this.cusinv=result;
      console.log("cusinv",this.cusinv);
    })
  }
  detail(d:any){
    this.openPopup();
    this.docnumber=d.MANDT;
    this.docnumber1=d.BUKRS;
    this.docnumber2=d.KUNNR;
    this.docnumber3=d.HKONT;
    this.docnumber4=d.BELNR;
    this.docnumber5=d.MWSKZ;
    this.docnumber6=d.BZDAT;
    this.docnumber7=d.GJAHR;
    this.docnumber8=d.DMBTR;
    
    
  }
  displayStyle = "none";
    openPopup() {
  
      this.displayStyle = "block";
  
    }
  
    closePopup() {
  
      this.displayStyle = "none";
  
    }

}