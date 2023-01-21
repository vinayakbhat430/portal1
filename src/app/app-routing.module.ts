import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { VenloginComponent } from './venlogin/venlogin.component';
import { VendashComponent } from './venlogin/vendash/vendash.component';
import { VenComponent } from './venlogin/ven/ven.component';
import { VendebitComponent } from './venlogin/venfinance/vendebit/vendebit.component';
import { VengoodsComponent } from './venlogin/vendash/vengoods/vengoods.component';
import { VenpurchaseComponent } from './venlogin/vendash/venpurchase/venpurchase.component';
import { VenreqComponent } from './venlogin/vendash/venreq/venreq.component';
import { VencreditComponent } from './venlogin/venfinance/vencredit/vencredit.component';
import { VeninvoiceComponent } from './venlogin/venfinance/veninvoice/veninvoice.component';
import { VenpayComponent } from './venlogin/venfinance/venpay/venpay.component';
import { EmpsalpayslipComponent } from './emplogin/empdash/empsalpayslip/empsalpayslip.component';
import { EmpprofileComponent } from './emplogin/empdash/empprofile/empprofile.component';
import { EmpleaveComponent } from './emplogin/empdash/empleave/empleave.component';
import { EmpdashComponent } from './emplogin/empdash/empdash.component';
import { VenprofileComponent } from './venlogin/venprofile/venprofile.component';
import { VenfinanceComponent } from './venlogin/venfinance/venfinance.component';
import { EmploginComponent } from './emplogin/emplogin.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import{CustdashComponent} from './login/custdash/custdash.component';
import{CustComponent} from './login/cust/cust.component';
import{CustdebitComponent} from './login/custfinance/custdebit/custdebit.component';
import{CustinvoiceComponent} from './login/custfinance/custinvoice/custinvoice.component';
import{CustpayComponent} from './login/custfinance/custpay/custpay.component';
import{CustcreditComponent} from './login/custfinance/custcredit/custcredit.component';
import {CustprofileComponent} from "./login/custprofile/custprofile.component";
import{CustfinanceComponent} from "./login/custfinance/custfinance.component";
import{CustinquiryComponent} from "./login/custdash/custinquiry/custinquiry.component";
import{CustsalesComponent} from "./login/custdash/custsales/custsales.component";
import{CustlistComponent} from "./login/custdash/custlist/custlist.component";
import { HeaderComponent } from './header/header.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { PdfPayslipComponent } from './emplogin/pdf-payslip/pdf-payslip.component';

const routes: Routes = [
  {
    component:HomepageComponent,
    path:''
  },
  {
    component:PdfPayslipComponent,
    path:'pdfviewer'
  },
  {
    component:HeaderComponent,
    path:'header'
  },
  {
    component:CustcreditComponent,
    path:'custcredit'
  },
  {
    component:CustcreditComponent,
    path:'custcredit'
  },
  {
    component:CustinvoiceComponent,
    path:'custinvoice'
  },
  {
    component:CustpayComponent,
    path:'custpay'
  },
  {
    component:VenreqComponent,
    path:'venreq'
  },
  {
    component:VenpurchaseComponent,
    path:'venpurchase'
  },
  {
    component:VengoodsComponent,
    path:'vengoods'
  },
  {
    component:LoginComponent,
    path:'login'
  },
  {
    component:VenloginComponent,
    path:'venlogin'
  },
  {
    component:VenComponent,
    path:'ven'
  },
  {
    component:VeninvoiceComponent,
    path:'veninvoice'
  },
  {
    component:VenpayComponent,
    path:'venpay'
  },
  {
    component:VencreditComponent,
    path:'vencredit'
  },
  {
    component:CustdebitComponent,
    path:'custdebit'
  },
  {
    component:VendashComponent,
    path:'vendash'
  },
  {
    component:VenprofileComponent,
    path:'venprofile'
  },
  {
    component:VenfinanceComponent,
    path:'venfinance'
  },
  {
    component:EmploginComponent,
    path:'emplogin'
  },
  {
    component:EmpprofileComponent,
    path:'empprofile'
  },
  {
    component:EmpleaveComponent,
    path:'empleave'
  },
  {
    component:EmpsalpayslipComponent,
    path:'empsalpayslip'
  },
  {
    component:EmpdashComponent,
    path:'empdash'
  },
  {
    component:VendebitComponent,
    path:'vendebit'
  },
  {
    component:LoginpageComponent,
    path:'loginpage'
  },
  {
    component:CustComponent,
    path:'cust'
  },
  {
    component:CustprofileComponent,
    path:'custprofile'
  },
  {
    component:CustdashComponent,
    path:'custdash'
  },
  {
    component:CustfinanceComponent,
    path:'custfinance'
  },
  {
    component:CustinquiryComponent,
    path:'custinquiry'
  },
  {
    component:CustsalesComponent,
    path:'custsales'
  },
  {
    component:CustlistComponent,
    path:'custlist'
  },
  {
    component:ForgotpasswordComponent,
    path:'forgot'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
