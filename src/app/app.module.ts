import { ErrorHandler, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { SplashScreen } from "@awesome-cordova-plugins/splash-screen/ngx";
//import {Statusbar} from '@ionic-native/status-bar';
import {
  IonicModule,
  IonicRouteStrategy,
  NavController,
  NavParams,
  ActionSheetController,
  AnimationController
} from "@ionic/angular";

//import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";
import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS,
} from "@angular/common/http";
import { RestApiService } from "./services/rest-api/rest-api.service";
import { SignalingService } from "./services/signaling/signaling.service";
//import { HomePage } from './pages/home/home.page';
import { DeviceOrientation } from "@awesome-cordova-plugins/device-orientation/ngx";
import { Geolocation } from "@awesome-cordova-plugins/geolocation/ngx";
import { File } from "@awesome-cordova-plugins/file/ngx";
import { Geofence } from "@ionic-native/geofence";
import { FormsModule } from "@angular/forms";
import { Events } from "./services/events/events.service";
import { Vibration } from "@awesome-cordova-plugins/vibration/ngx";
import { AndroidPermissions } from "@ionic-native/android-permissions";
import { SocialSharing } from "@awesome-cordova-plugins/social-sharing/ngx";
import { OpenNativeSettings } from "@awesome-cordova-plugins/open-native-settings/ngx";
import { Network } from "@awesome-cordova-plugins/network/ngx";
import { StatusBar } from "@awesome-cordova-plugins/status-bar/ngx";
import { TripproposalsPage } from "./pages/tripproposals/tripproposals.page";
//import { TripPage } from './pages/trip/trip.page';
import { AppConfig } from "./services/app-config";
import { Storage } from "@ionic/storage";
import { AppComponent } from "./app.component";
import { NativeGeocoder } from "@awesome-cordova-plugins/native-geocoder/ngx";

//import { MmirProvider, VoiceUIProvider } from './mmir/ng-provider';
import { SpeechRecognition } from "@awesome-cordova-plugins/speech-recognition/ngx";
import { TextToSpeech } from "@ionic-native/text-to-speech";
import { Diagnostic } from "@awesome-cordova-plugins/diagnostic/ngx";
import { TransferService } from "./services/transferdata/transfer.service";
import { BLE } from "@awesome-cordova-plugins/ble/ngx";
import { BluetoothLEService } from "./services/bluetoothLE/bluetooth-le.service";
import { ServerErrorInterceptor } from "./class/ServerErrorInterceptor/server-error-interceptor";
import { GlobalErrorHandler } from "./class/-global-error-handler";
import { MatSnackBar } from "@angular/material/snack-bar";
import { OverlayModule } from "@angular/cdk/overlay";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppCenterAnalytics } from "@awesome-cordova-plugins/app-center-analytics/ngx";
import { AppCenterCrashes } from "@ionic-native/app-center-crashes";
import { CodePush } from "@awesome-cordova-plugins/code-push/ngx";
import { IonicStorageModule } from "@ionic/storage-angular";
import { StorageService } from "./services/storage/storage.service";
import { NgxGauge, NgxGaugeModule } from "ngx-gauge";
import { AlertControlService } from "./services/alertControl/alert-control.service";
import { OutputControllerService } from "./services/outputController/output-controller.service";
import { SharedModuleModule } from "./modules/sharedModule/shared-module/shared-module.module";
import { FCM } from "plugins/cordova-plugin-fcm-with-dependecy-updated/ionic/ngx/FCM"

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    OverlayModule,
    NgxGaugeModule,
    BrowserAnimationsModule,
    IonicStorageModule.forRoot(),
    SharedModuleModule
  ],
  providers: [
    
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ServerErrorInterceptor,
      multi: true,
    },
    Geofence,
    MatSnackBar,
    HttpClient,
    RestApiService,
    NativeGeocoder,
    Geolocation,
    SignalingService,
    SplashScreen,
    Geolocation,
    NavController,
    NavParams,
    DeviceOrientation,
    File,
    Events,
    Vibration,
    SocialSharing,
    OpenNativeSettings,
    Network,
    StatusBar,
    AndroidPermissions,
    AppConfig,
    Storage,
    SpeechRecognition,
    TextToSpeech,
    Diagnostic,
    TransferService,
    BLE,
    BluetoothLEService,
    AppCenterAnalytics,
    AppCenterCrashes,
    CodePush,
    StorageService,
    AlertControlService,
    OutputControllerService,
    ActionSheetController,
    NgxGauge,
    AnimationController,
    Animation,
    FCM
  ],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
