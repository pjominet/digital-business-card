import {BrowserModule, Title} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {QRCodeModule} from 'angularx-qrcode';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DeviceDetectorModule} from 'ngx-device-detector';
import {ClipboardModule} from 'ngx-clipboard';

import {AppComponent} from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        QRCodeModule,
        NgbModule,
        DeviceDetectorModule.forRoot(),
        ClipboardModule
    ],
    providers: [
        Title
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
