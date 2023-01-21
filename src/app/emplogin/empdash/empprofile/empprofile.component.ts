import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';
@Component({
  selector: 'app-empprofile',
  templateUrl: './empprofile.component.html',
  styleUrls: ['./empprofile.component.css']
})
export class EmpprofileComponent implements OnInit {

  empprofile:any;
  constructor(private service: ServicesService) { }

  ngOnInit(): void {
    this.service.onempprofile().subscribe((result)=>{
      console.log(result);
      this.empprofile=result;
      console.log("empprofile",this.empprofile);
    })
  }

}
