import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  
CUS:any={"CUST_NO":"12"};
VEN:any={"VEN_ID":"MOHANRAJ"};
VENN:any={"VEN_ID":"5"};
EMP:any={"EMP_ID":"3"};
ChangePasswordUser:any;
payslipdata:any;
empProfile:any;

  constructor(private http: HttpClient) { }

  onPassForgot(username:string,password:string){
    var data = {"USER":username,"PASS":password};
    return this.http.post("http://localhost:3001/forg",data);
  }
  oncuscredit()
  {
    return this.http.post("http://localhost:3001/cust_credit", this.CUS);
  }

  oncusinv()
  {
    return this.http.post("http://localhost:3001/cust_inv", this.CUS);
  }

  oncuspay()
  {
    return this.http.post("http://localhost:3001/cust_pay_age", this.CUS);
  }

  oncusinq()
  {
    return this.http.post("http://localhost:3001/cust_inq", this.CUS);
  }
  oncusinqdet(docno:any)
  {
    console.log(docno);
    return this.http.post("http://localhost:3001/cust_inq_det",{docno});

  }

  oncuslist()
  {
    return this.http.post("http://localhost:3001/cust_delivery", this.CUS);
  }

  oncussale()
  {
    return this.http.post("http://localhost:3001/cust_sale_ord", this.CUS);
  }

  oncussalests(docno:any)
  {
    console.log(docno);
    return this.http.post("http://localhost:3001/cust_sale_status", {docno});
  }

  oncusprofile()
  {
    return this.http.post("http://localhost:3001/cust_info", this.CUS);
  }

  onvengoods()
  {
    return this.http.post("http://localhost:3001/ven_gr_list", this.VEN);
  }

  onvengoodsdet(docno:any)
  {
    return this.http.post("http://localhost:3001/ven_goods_receipt", {docno});
  }
  onvenpurchase()
  {
    return this.http.post("http://localhost:3001/ven_po_list", this.VEN);
  }
  onvenpurchasedet(docno:any)
  {
    return this.http.post("http://localhost:3001/ven_po_det", {docno});
  }

  onvenreq()
  {
    return this.http.post("http://localhost:3001/ven_rfq_list", this.VENN);
  }
  onvenreqdet(docno:any)
  {
    return this.http.post("http://localhost:3001/ven_rfq_det", {docno});
  }

  onvencredit()
  {
    return this.http.post("http://localhost:3001/ven_credit", this.VEN);
  }

  onveninvoice()
  {
    return this.http.post("http://localhost:3001/ven_inv_list", this.VEN);
  }

  onveninvoicedet(FISC_YR:any,INV_NO:any)
  {
    return this.http.post("http://localhost:3001/ven_inv_det", {yr:FISC_YR,no:INV_NO});
  }

  onvenpay()
  {
    return this.http.post("http://localhost:3001/ven_pay_aging", this.VEN);
  }

  onvenprofile()
  {
    return this.http.post("http://localhost:3001/ven_profile", this.VEN);
  }

  onempleave()
  {
    return this.http.post("http://localhost:3001/emp_leave", this.EMP);
  }

  onempprofile()
  {
    return this.http.post("http://localhost:3001/emp_profile", this.EMP);
  }

  onemppay()
  {
    return this.http.post("http://localhost:3001/emp_pay", this.EMP);
  }

  onemppayslip(data:any)
  {
    console.log(data);
    return this.http.post("http://localhost:3001/emp_payslip",data, { responseType: 'text' });
  }

  oncusdebit()
  {
    return this.http.post("http://localhost:3001/cust_debit", this.CUS);
  }

  onvendebit()
  {
    return this.http.post("http://localhost:3001/ven_debit", this.VEN);
  }

  onvenlogin(data: any) {
    return this, this.http.post("http://localhost:3001/ven_login", data, { responseType: 'text' })
  }

  oncuslogin(data: any) {
    return this, this.http.post("http://localhost:3001/cust_login", data, { responseType: 'text' })
  }

  onemplogin(data: any) {
    return this, this.http.post("http://localhost:3001/emp_login", data, { responseType: 'text' })
  }

}
