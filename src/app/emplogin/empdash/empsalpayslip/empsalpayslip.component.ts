import { Component, OnInit } from '@angular/core'
import { ServicesService } from 'src/app/services.service'
import { Router } from '@angular/router'
@Component({
  selector: 'app-empsalpayslip',
  templateUrl: './empsalpayslip.component.html',
  styleUrls: ['./empsalpayslip.component.css'],
})
export class EmpsalpayslipComponent implements OnInit {
  emppay: any
  emppayslip: any
  emppp: any = { EMP_ID: '3', SEQ_NO: '' }
  sn: any
  src!: any
  data: any
  sno: any
  sd: any
  ed: any
  pd: any
  pt: any
  constructor(private service: ServicesService, private router: Router) {}

  ngOnInit(): void {
    this.service.onemppay().subscribe((result) => {
      console.log(result)
      this.emppay = result
      console.log('emppay', this.emppay)
    })
  }
  detail(pg: any) {
    this.openPopup();
    this.sno = pg.SEQUENCENUMBER
    this.sd = pg.FPBEGIN
    this.ed = pg.FPEND
    this.pd = pg.PAYDATE
    this.pt = pg.PAYTYPE_TEXT
  }

  displayStyle = 'none'

  openPopup() {
    this.displayStyle = 'block'
  }

  closePopup() {
    this.displayStyle = 'none'
  }

  pdfsender(row:any):void{
    this.service.payslipdata  = row;
  }
}
