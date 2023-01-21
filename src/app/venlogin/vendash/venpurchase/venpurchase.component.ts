import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';
@Component({
  selector: 'app-venpurchase',
  templateUrl: './venpurchase.component.html',
  styleUrls: ['./venpurchase.component.css'],
})
export class VenpurchaseComponent implements OnInit {
  venpurchase: any;
  enteredSearchText: string = '';
  venpurchasedet: any;
  dn: any;
  docnumber: any;
  docnumber1: any;
  docnumber2: any;
  docnumber3: any;
  docnumber4: any;
  docnumber5: any;
  docnumber6: any;
  docnumber7: any;
  docnumber8: any;
  loading: boolean = true;
  constructor(private service: ServicesService) {}

  ngOnInit(): void {
    this.service.onvenpurchase().subscribe((result) => {
      this.loading = false;
      console.log(result);
      this.venpurchase = result;
      console.log('venpurchase', this.venpurchase);
    });
  }

  detail(d: any) {
    this.openPopup();
    this.docnumber = d.PO_NUMBER;
    this.docnumber1 = d.PURCH_ORG;
    this.docnumber2 = d.PUR_GROUP;
    this.docnumber3 = d.DOC_CAT;
    this.docnumber4 = d.DOC_TYPE;
    this.docnumber5 = d.STATUS;
    this.docnumber6 = d.CURRENCY;
    this.docnumber7 = d.CREATED_ON;
    this.docnumber8 = d.VENDOR;
  }
  displayStyle = 'none';
  openPopup() {
    this.displayStyle = 'block';
  }

  closePopup() {
    this.displayStyle = 'none';
  }
}
