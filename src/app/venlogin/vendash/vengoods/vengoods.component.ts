import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';
@Component({
  selector: 'app-vengoods',
  templateUrl: './vengoods.component.html',
  styleUrls: ['./vengoods.component.css']
})
export class VengoodsComponent implements OnInit {

  vengoods:any;
  vengoodsdet:any;
  enteredSearchText:string = "";
  dn:any;
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
    this.service.onvengoods().subscribe((result)=>{
      console.log(result);
      this.vengoods=result;
      console.log("vengoods",this.vengoods);
    })
  }
  detail(d:any){
    this.openPopup();
    this.docnumber=d.MAT_DOC;
    this.docnumber1=d.DOC_YEAR;
    this.docnumber2=d.VENDOR;
    this.docnumber3=d.MATERIAL;
    this.docnumber4=d.PO_NUMBER;
    this.docnumber5=d.PO_PR_QNT;
    
    
  }
  displayStyle = "none";
    openPopup() {
  
      this.displayStyle = "block";
  
    }
  
    closePopup() {
  
      this.displayStyle = "none";
  
    }

  
  
}
