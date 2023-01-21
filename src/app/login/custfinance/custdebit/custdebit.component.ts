import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';
@Component({
  selector: 'app-custdebit',
  templateUrl: './custdebit.component.html',
  styleUrls: ['./custdebit.component.css']
})
export class CustdebitComponent implements OnInit {

  cusdebit:any;
  docnumber:any;
  docnumber1:any;
  docnumber2:any;
  docnumber3:any;
  constructor(private service: ServicesService) { }

  ngOnInit(): void {
    this.service.oncusdebit().subscribe((result)=>{
      console.log(result);
      this.cusdebit=result;
      console.log("cusdebit",this.cusdebit);
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
