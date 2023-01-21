import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';
@Component({
  selector: 'app-venreq',
  templateUrl: './venreq.component.html',
  styleUrls: ['./venreq.component.css']
})
export class VenreqComponent implements OnInit {

  venreq:any;
  venreqdet:any;
  dn:any;
  enteredSearchText:string = "";
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
    this.service.onvenreq().subscribe((result)=>{
      console.log(result);
      this.venreq=result;
      console.log("venreq",this.venreq);
    })
  }
  detail(d:any){
    this.openPopup();
    this.docnumber=d.VEND_NAME;
    this.docnumber1=d.PO_NUMBER;
    this.docnumber2=d.VENDOR;
    this.docnumber3=d.CO_CODE;
    this.docnumber4=d.ITEM_INTVL;
    this.docnumber5=d.CREATED_ON;
    this.docnumber6=d.PURCH_ORG;
    this.docnumber7=d.EXCH_RATE;
  }
  displayStyle = "none";
    openPopup() {
  
      this.displayStyle = "block";
  
    }
  
    closePopup() {
  
      this.displayStyle = "none";
  
    }

  

}
