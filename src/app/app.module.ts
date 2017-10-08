import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { IonicAudioModule, defaultAudioProviderFactory } from 'ionic-audio';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SurveyPage } from '../pages/survey/survey';
import { EpisodeServiceProvider } from '../providers/episode-service/episode-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SurveyPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicAudioModule.forRoot(defaultAudioProviderFactory),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SurveyPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EpisodeServiceProvider
  ]
})
export class AppModule {}
