import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';
@Component({
  selector: 'app-vendebit',
  templateUrl: './vendebit.component.html',
  styleUrls: ['./vendebit.component.css']
})
export class VendebitComponent implements OnInit {

  vendebit:any;
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
    this.service.onvendebit().subscribe((result)=>{
      console.log(result);
      this.vendebit=result;
      console.log("vendebit",this.vendebit);
    })
  }

  detail(d:any){
    this.openPopup();
    this.docnumber=d.CUSTOMER;
    this.docnumber1=d.DOC_NO;
    this.docnumber2=d.COMP_CODE;
    this.docnumber3=d.DOC_TYPE;
    this.docnumber4=d.AMOUNT;
    this.docnumber5=d.FISC_YEAR;
    this.docnumber6=d.CURRENCY;
    this.docnumber7=d.DUEDAYS;
    this.docnumber8=d.TAX_CODE;
    
    
  }
  displayStyle = "none";
    openPopup() {
  
      this.displayStyle = "block";
  
    }
  
    closePopup() {
  
      this.displayStyle = "none";
  
    }

}
