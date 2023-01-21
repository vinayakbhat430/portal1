import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';
@Component({
  selector: 'app-venpay',
  templateUrl: './venpay.component.html',
  styleUrls: ['./venpay.component.css']
})
export class VenpayComponent implements OnInit {

  venpay:any;
  docnumber:any;
  enteredSearchText:string = "";
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
    this.service.onvenpay().subscribe((result)=>{
      console.log(result);
      this.venpay=result;
      const now = new Date();

          console.log(typeof(now));

          for (var i = 0; i < this.venpay.length; i++) {

            const backdate = new Date(this.venpay[i].BLINE_DATE);

            const diff = getDayDiff(now,backdate);

            this.venpay[i].DUEDAYS = diff;

          }
      console.log("venpay",this.venpay);
    })
  }
  detail(d:any){
    this.openPopup();
    this.docnumber=d.VENDOR;
    this.docnumber1=d.DOC_NO;
    this.docnumber2=d.FISC_YEAR;
    this.docnumber3=d.ITEM_NUM;
    this.docnumber4=d.DOC_TYPE;
    this.docnumber5=d.AMOUNT;
    this.docnumber6=d.ENTRY_DATE;
    this.docnumber7=d.CURRENCY;
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
function getDayDiff(startDate: Date, endDate: Date): number {

  const msInDay = 24 * 60 * 60 * 1000;



  return Math.round(Math.abs(Number(endDate) - Number(startDate)) / msInDay);

}
