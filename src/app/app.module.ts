import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './dribbble/home.component';
import { SignUpComponent } from './dribbble/sign-up/sign-up.component';
import { PaymentComponent } from './dribbble/payment/payment.component';
import { LandingPageComponent } from './dribbble/landing-page/landing-page.component';
import { CalculatorComponent } from './dribbble/calculator/calculator.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const appRoute: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'landing-page', component: LandingPageComponent },
  { path: 'calculator', component: CalculatorComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignUpComponent,
    PaymentComponent,
    LandingPageComponent,
    CalculatorComponent,
    SidebarComponent
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
