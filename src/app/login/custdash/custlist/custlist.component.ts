import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';
@Component({
  selector: 'app-custlist',
  templateUrl: './custlist.component.html',
  styleUrls: ['./custlist.component.css']
})
export class CustlistComponent implements OnInit {
  enteredSearchText:string = "";
  cuslist:any;
  document:any;
  document1:any;
  document2:any;
  document3:any;
  document4:any;
  document5:any;
  document6:any;
  document7:any;
  document8:any;
  constructor(private service: ServicesService) { }

  ngOnInit(): void {
    this.service.oncuslist().subscribe((result)=>{
      console.log(result);
      this.cuslist=result;
      console.log("cuslist",this.cuslist);
    })
  }
  detail(d:any){
    this.openPopup();
    this.document=d.KUNNR;
    this.document1=d.ERDAT;
    this.document2=d.VBELN;
    this.document3=d.ERZET;
    this.document4=d.ERDAT;
    this.document5=d.VKORG;
    this.document6=d.LFART;
    this.document7=d.LFDAT_V;
    this.document8=d.LFUHR;
    
  
    
    
  }
  displayStyle = "none";
    openPopup() {
  
      this.displayStyle = "block";
  
    }
  
    closePopup() {
  
      this.displayStyle = "none";
  
    }

}
