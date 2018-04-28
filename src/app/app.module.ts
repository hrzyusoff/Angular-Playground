import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './dribbble/sign-up/sign-up.component';
import { PaymentComponent } from './dribbble/payment/payment.component';
import { LandingPageComponent } from './dribbble/landing-page/landing-page.component';

const appRoute: Routes = [
  { path: 'signup', component: SignUpComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'landing', component: LandingPageComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    PaymentComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
