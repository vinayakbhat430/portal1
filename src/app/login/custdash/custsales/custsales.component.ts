import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';
@Component({
  selector: 'app-custsales',
  templateUrl: './custsales.component.html',
  styleUrls: ['./custsales.component.css']
})
export class CustsalesComponent implements OnInit {
  enteredSearchText:string = "";

  cussale:any;
  cussalests:any;
  dn:any;
  document:any;
  document1:any;
  document2:any;
  document3:any;
  document4:any;
  document5:any;
  document6:any;

  
  constructor(private service: ServicesService) { }

  ngOnInit(): void {
    this.service.oncussale().subscribe((result)=>{
      console.log(result);
      this.cussale=result;
      console.log("cussale",this.cussale);
    })
  }
  detail(d:any){
    this.openPopup();
    this.document=d.SD_DOC;
    this.document1=d.DOC_TYPE;
    this.document2=d.MATERIAL;
    this.document3=d.REQ_QTY;
    this.document4=d.PURCH_NO;
    this.document5=d.DLV_QTY;
    this.document6=d.NET_PRICE;
    
  }
  displayStyle = "none";
    openPopup() {
  
      this.displayStyle = "block";
  
    }
  
    closePopup() {
  
      this.displayStyle = "none";
  
    }
}
