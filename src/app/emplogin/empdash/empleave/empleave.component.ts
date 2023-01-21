import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';
@Component({
  selector: 'app-empleave',
  templateUrl: './empleave.component.html',
  styleUrls: ['./empleave.component.css']
})
export class EmpleaveComponent implements OnInit {

  empleave:any;
  emp:any;
  eno:any;
  lco:any;
  tol:any;
  noa:any;
  nha:any;
  fr:any;
  to:any;
  constructor(private service: ServicesService) { }

  ngOnInit(): void {
    this.service.onempleave().subscribe((result)=>{
      console.log(result);
      this.empleave=result;
      console.log("empleave",this.empleave);
    })
  }

  displayStyle = "none";
  detail(person:any){
    this.openPopup();
    console.log(person);
    this.eno=person.EMPLOYEENO;
    this.lco=person.ABSENCETYPE;
    this.tol=person.NAMEOFABSENCETYPE;
    this.noa = person.ABSENCEDAYS;
    this.nha=person.ABSENCEHOURS;
    this.fr = person.VALIDBEGIN;
    this.to = person.VALIDEND;
    
  }
    openPopup() {
  
      this.displayStyle = "block";
  
    }
  
    closePopup() {
  
      this.displayStyle = "none";
  
    }

}
