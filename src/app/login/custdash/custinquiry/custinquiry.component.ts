import { Component, OnInit,EventEmitter } from '@angular/core';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-custinquiry',
  templateUrl: './custinquiry.component.html',
  styleUrls: ['./custinquiry.component.css']
})
export class CustinquiryComponent implements OnInit {
  enteredSearchText:string = "";
  cusinq:any;
  cusinqdet:any;
  dn:any;
  cid:any;
  sno:any;
  co:any;
  name:any;
  nv:any;
  cr:any;
  so:any;

  constructor(private service: ServicesService) { }

  ngOnInit(): void {
    this.service.oncusinq().subscribe((result)=>{
      console.log(result);
      this.cusinq=result;
      console.log("cusinq",this.cusinq);
    })
  }
  onSearchTextChanged(){
    console.log(this.enteredSearchText);
  }
  displayStyle = "none";

 
detail(doc:any){
  this.openPopup();
  this.cid = doc.KUNNR;
  this.dn=doc.VBELN;
  this.co=doc.ERDAT;
  this.name=doc.ERNAM;
  this.nv=doc.NETWR;
  this.cr = doc.WAERK;
  this.so = doc.VKORG;
}
  openPopup() {

    this.displayStyle = "block";

  }

  closePopup() {

    this.displayStyle = "none";

  }


}
