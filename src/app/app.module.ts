import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { HeaderComponent } from './header/header.component';
import { CustdashComponent } from './login/custdash/custdash.component';
import { CustComponent } from './login/cust/cust.component';
import { CustprofileComponent } from './login/custprofile/custprofile.component';
import { CustfinanceComponent } from './login/custfinance/custfinance.component';
import { CustinquiryComponent } from './login/custdash/custinquiry/custinquiry.component';
import { CustsalesComponent } from './login/custdash/custsales/custsales.component';
import { CustlistComponent } from './login/custdash/custlist/custlist.component';
import { VenloginComponent } from './venlogin/venlogin.component';
import { EmploginComponent } from './emplogin/emplogin.component';
import { VenComponent } from './venlogin/ven/ven.component';
import { VenprofileComponent } from './venlogin/venprofile/venprofile.component';
import { VendashComponent } from './venlogin/vendash/vendash.component';
import { VenfinanceComponent } from './venlogin/venfinance/venfinance.component';
import { EmpdashComponent } from './emplogin/empdash/empdash.component';
import { EmpsalpayslipComponent } from './emplogin/empdash/empsalpayslip/empsalpayslip.component';
import { EmpprofileComponent } from './emplogin/empdash/empprofile/empprofile.component';
import { EmpleaveComponent } from './emplogin/empdash/empleave/empleave.component';
import { CustinvoiceComponent } from './login/custfinance/custinvoice/custinvoice.component';
import { CustpayComponent } from './login/custfinance/custpay/custpay.component';
import { CustcreditComponent } from './login/custfinance/custcredit/custcredit.component';
import { VenreqComponent } from './venlogin/vendash/venreq/venreq.component';
import { VenpurchaseComponent } from './venlogin/vendash/venpurchase/venpurchase.component';
import { VengoodsComponent } from './venlogin/vendash/vengoods/vengoods.component';
import { VeninvoiceComponent } from './venlogin/venfinance/veninvoice/veninvoice.component';
import { VenpayComponent } from './venlogin/venfinance/venpay/venpay.component';
import { VencreditComponent } from './venlogin/venfinance/vencredit/vencredit.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { CustdebitComponent } from './login/custfinance/custdebit/custdebit.component';
import { VendebitComponent } from './venlogin/venfinance/vendebit/vendebit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { PdfViewerModule } from 'ng2-pdf-viewer';
// import { PopupModule } from 'ng2-opd-popup';
import {Component} from '@angular/core';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { PdfPayslipComponent } from './emplogin/pdf-payslip/pdf-payslip.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
    LoginpageComponent,
    HeaderComponent,
    CustdashComponent,
    CustComponent,
    CustprofileComponent,
    CustfinanceComponent,
    CustinquiryComponent,
    CustsalesComponent,
    CustlistComponent,
    VenloginComponent,
    EmploginComponent,
    VenComponent,
    VenprofileComponent,
    VendashComponent,
    VenfinanceComponent,
    EmpdashComponent,
    EmpsalpayslipComponent,
    EmpprofileComponent,
    EmpleaveComponent,
    CustinvoiceComponent,
    CustpayComponent,
    CustcreditComponent,
    VenreqComponent,
    VenpurchaseComponent,
    VengoodsComponent,
    VeninvoiceComponent,
    VenpayComponent,
    VencreditComponent,
    CustdebitComponent,
    VendebitComponent,
    ForgotpasswordComponent,
    PdfPayslipComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    BrowserAnimationsModule,
    PdfViewerModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
