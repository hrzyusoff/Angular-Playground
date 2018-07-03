import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { KufiComponent } from './dribbble/_misc/kufi/kufi.component';
import { MegamanComponent } from './dribbble/_misc/megaman/megaman.component';
import { MarioComponent } from './dribbble/_misc/mario/mario.component';
import { DribbbleComponent } from './dribbble/dribbble.component';
import { UnderconstructionComponent } from './underconstruction/underconstruction.component';
import { SettingComponent } from './dribbble/setting/setting.component';
import { SignUpComponent } from './dribbble/sign-up/sign-up.component';
import { PaymentComponent } from './dribbble/payment/payment.component';
import { LandingPageComponent } from './dribbble/landing-page/landing-page.component';
import { CalculatorComponent } from './dribbble/calculator/calculator.component';
import { AppIconComponent } from './dribbble/app-icon/app-icon.component';
import { UserProfileComponent } from './dribbble/user-profile/user-profile.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ErrorPageComponent } from './dribbble/error-page/error-page.component';
import { MusicPlayerComponent } from './dribbble/music-player/music-player.component';
import { SocialShareComponent } from './dribbble/social-share/social-share.component';
import { FlashMessageComponent } from './dribbble/flash-message/flash-message.component';
import { ShopComponent } from './dribbble/shop/shop.component';
import { DirectMessageComponent } from './dribbble/direct-message/direct-message.component';
import { CountdownTimerComponent } from './dribbble/countdown-timer/countdown-timer.component';
import { SwitchComponent } from './dribbble/switch/switch.component';
import { PricingComponent } from './dribbble/pricing/pricing.component';
import { AppRoutingModule } from './app.route';
import { HttpClientModule } from '@angular/common/http';
import { NewsService } from './_services/news/news.service';
import { CountryService } from './_services/country/country.service';
import { PetronasComponent } from './dribbble/_misc/petronas/petronas.component';
import { JeepComponent } from './dribbble/_misc/jeep/jeep.component';
import { InstagramComponent } from './dribbble/_misc/instagram/instagram.component';
import { JsplayComponent } from './dribbble/_misc/jsplay/jsplay.component';
import { DropdownComponent } from './dribbble/dropdown/dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DribbbleComponent,
    KufiComponent,
    MegamanComponent,
    MarioComponent,
    SidebarComponent,
    UnderconstructionComponent,
    SignUpComponent,
    PaymentComponent,
    LandingPageComponent,
    CalculatorComponent,
    AppIconComponent,
    UserProfileComponent,
    SettingComponent,
    ErrorPageComponent,
    MusicPlayerComponent,
    SocialShareComponent,
    FlashMessageComponent,
    ShopComponent,
    DirectMessageComponent,
    CountdownTimerComponent,
    SwitchComponent,
    PetronasComponent,
    JeepComponent,
    InstagramComponent,
    JsplayComponent,
    PricingComponent,
    DropdownComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
