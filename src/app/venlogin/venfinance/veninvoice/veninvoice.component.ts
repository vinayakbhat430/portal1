import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-veninvoice',
  templateUrl: './veninvoice.component.html',
  styleUrls: ['./veninvoice.component.css']
})
export class VeninvoiceComponent implements OnInit {

  veninvoice:any;
  veninvoicedet:any;
  enteredSearchText:string = "";
  dn:any;
  yr:any;
  person:any;
  docnumber:any;
  year:any;
  companycode:any;
  entrydate:any;
  entrytime:any;
  currency:any;
  grossamt:any;
  status:any;
  constructor(private service: ServicesService) { }

  ngOnInit(): void {
    this.service.onveninvoice().subscribe((result)=>{
      console.log(result);
      this.veninvoice=result;
      console.log("veninvoice",this.veninvoice);
    })
  }

  displayStyle = "none";
  detail(person:any){
    this.openPopup();
    console.log(person);
    this.docnumber = person.BELNR;
    this.year=person.GJAHR;
    this.companycode = person.BUKRS;
    this.entrydate=person.BLDAT;
    this.entrytime=person.CPUTM;
    this.grossamt=person.WAERS;
    this.currency=person.RMWWR;
    this.status=person.RBSTAT;
    
  }
    openPopup() {
  
      this.displayStyle = "block";
  
    }
  
    closePopup() {
  
      this.displayStyle = "none";
  
    }
  
  
}
