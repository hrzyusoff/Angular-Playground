import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
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
import { PetronasComponent } from './dribbble/_misc/petronas/petronas.component';
import { JeepComponent } from './dribbble/_misc/jeep/jeep.component';


const appRoute: Routes = [
  { path: '', component: HomeComponent },  
  { path: 'dribbble', component: DribbbleComponent },
  { path: 'kufi', component: KufiComponent},
  { path: 'megaman', component: MegamanComponent},
  { path: 'mario', component: MarioComponent },
  { path: 'petronas', component: PetronasComponent },
  { path: 'jeep', component: JeepComponent },    
  { path: 'signup', component: SignUpComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'landing-page', component: LandingPageComponent },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'app-icon', component: AppIconComponent },
  { path: 'user-profile', component: UserProfileComponent },
  { path: 'setting', component: SettingComponent },
  { path: 'error-page', component: ErrorPageComponent },
  { path: 'music-player', component: MusicPlayerComponent },
  { path: 'social-share', component: SocialShareComponent },
  { path: 'flash-message', component: FlashMessageComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'direct-message', component: DirectMessageComponent },
  { path: 'countdown-timer', component: CountdownTimerComponent },
  { path: 'switch', component: SwitchComponent }
]

@NgModule ({
    imports: [
        RouterModule.forRoot(appRoute)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}