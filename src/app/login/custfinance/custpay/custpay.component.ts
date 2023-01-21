import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-custpay',
  templateUrl: './custpay.component.html',
  styleUrls: ['./custpay.component.css']
})
export class CustpayComponent implements OnInit {

  cuspay:any;
  docnumber:any;
  docnumber1:any;
  docnumber2:any;
  docnumber3:any;
  docnumber4:any;
  docnumber5:any;
  docnumber6:any;
  docnumber7:any;
  docnumber8:any;
  enteredSearchText:string = "";

  constructor(private service: ServicesService) { }

  ngOnInit(): void {
    this.service.oncuspay().subscribe((result)=>{
      console.log(result);

      this.cuspay=result;
      const now = new Date();

          console.log(typeof(now));

          for (var i = 0; i < this.cuspay.length; i++) {

            const backdate = new Date(this.cuspay[i].BLINE_DATE);

            const diff = getDayDiff(now,backdate);

            this.cuspay[i].DUEDAYS = diff;

          }
      console.log("cuspay",this.cuspay);
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
  round(num:any){
    const factor = 10 ** 2;
    return Math.round(num * factor)/factor;
  }
  displayStyle = "none";
    openPopup() {
  
      this.displayStyle = "block";
  
    }
  
    closePopup() {
  
      this.displayStyle = "none";
  
    }


}

function getDayDiff(startDate: Date, endDate: Date): number {

  const msInDay = 24 * 60 * 60 * 1000;



  return Math.round(Math.abs(Number(endDate) - Number(startDate)) / msInDay);

}

