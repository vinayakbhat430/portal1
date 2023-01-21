import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';
@Component({
  selector: 'app-vencredit',
  templateUrl: './vencredit.component.html',
  styleUrls: ['./vencredit.component.css']
})
export class VencreditComponent implements OnInit {

  vencredit:any;
  enteredSearchText:string = "";
  vencreditrec:any;
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
    this.service.onvencredit().subscribe((result)=>{
      console.log(result);
      this.vencredit=result;
      // delete this.vencreditrec[1];
      // this.vencredit = this.vencreditrec;
      console.log("vencredit",this.vencredit);
    })
  }
  detail(d:any){
    this.openPopup();
    this.docnumber=d.KUNNR;
    this.docnumber1=d.BELNR;
    this.docnumber2=d.MATNR;
    this.docnumber3=d.WERKS;
    this.docnumber4=d.GJAHR;
    this.docnumber5=d.BUZEI;
    this.docnumber6=d.DMBTR;
    this.docnumber7=d.MENGE;
    
    
  }
  displayStyle = "none";
    openPopup() {
  
      this.displayStyle = "block";
  
    }
  
    closePopup() {
  
      this.displayStyle = "none";
  
    }


}
