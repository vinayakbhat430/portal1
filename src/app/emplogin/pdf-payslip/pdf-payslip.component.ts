import { Component, OnInit ,ViewChild, ElementRef } from '@angular/core'
import { jsPDF } from 'jspdf'
import 'jspdf-autotable'
import html2canvas from 'html2canvas'
import { ServicesService } from 'src/app/services.service';
import { TEXT_TRANSFORM } from 'html2canvas/dist/types/css/property-descriptors/text-transform';

@Component({
  selector: 'app-pdf-payslip',
  templateUrl: './pdf-payslip.component.html',
  styleUrls: ['./pdf-payslip.component.css'],
})
export class PdfPayslipComponent implements OnInit {
  @ViewChild('image',{static:false}) el!: ElementRef;
  constructor(private service:ServicesService) {}
  paydate:any = this.service.payslipdata.PAYDATE;
  employeename:any = this.service.empProfile[0].ENAME;
  designation:any = this.service.empProfile[0].PLANS_TXT;
  department:any = this.service.empProfile[0].ORGEH_TXT;
  email:any = this.service.empProfile[0].TELNR;
  eid:any = this.service.EMP.EMP_ID;

  ngOnInit(): void {}
  public captureScreen() {
    var data = document.getElementById('image')!
    html2canvas(data).then((canvas) => {
      // Few necessary setting options
      var imgWidth = 265
      var imgHeight = (canvas.height * imgWidth) / canvas.width
      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jsPDF('p', 'mm', 'a4') // A4 size page of PDF
      var position = 0
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
      pdf.save('Payslip.pdf') // Generated PDF
    })
  }
}
