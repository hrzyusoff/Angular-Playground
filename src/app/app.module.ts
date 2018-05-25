import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { KufiComponent } from './dribbble/showcase/_misc/kufi/kufi.component';
import { MegamanComponent } from './dribbble/showcase/_misc/megaman/megaman.component';
import { MarioComponent } from './dribbble/showcase/_misc/mario/mario.component';
import { HomeComponent } from './dribbble/home.component';
import { ShowcaseComponent } from './dribbble/showcase/showcase.component';
import { UnderconstructionComponent } from './underconstruction/underconstruction.component';
import { SettingComponent } from './dribbble/showcase/setting/setting.component';
import { SignUpComponent } from './dribbble/showcase/sign-up/sign-up.component';
import { PaymentComponent } from './dribbble/showcase/payment/payment.component';
import { LandingPageComponent } from './dribbble/showcase/landing-page/landing-page.component';
import { CalculatorComponent } from './dribbble/showcase/calculator/calculator.component';
import { AppIconComponent } from './dribbble/showcase/app-icon/app-icon.component';
import { UserProfileComponent } from './dribbble/showcase/user-profile/user-profile.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ErrorPageComponent } from './dribbble/showcase/error-page/error-page.component';
import { MusicPlayerComponent } from './dribbble/showcase/music-player/music-player.component';
import { SocialShareComponent } from './dribbble/showcase/social-share/social-share.component';
import { FlashMessageComponent } from './dribbble/showcase/flash-message/flash-message.component';
import { ShopComponent } from './dribbble/showcase/shop/shop.component';
import { DirectMessageComponent } from './dribbble/showcase/direct-message/direct-message.component';
import { CountdownTimerComponent } from './dribbble/showcase/countdown-timer/countdown-timer.component';
import { AppRoutingModule } from './app.route';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShowcaseComponent,
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
    CountdownTimerComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
