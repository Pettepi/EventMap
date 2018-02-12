import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { AgmCoreModule } from '@agm/core';
import { GooglemapsComponent } from './googlemaps/googlemaps.component';

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        AgmCoreModule.forRoot({
            apiKey: ' AIzaSyDs6oPVEcApR3Gxsg9WI_fWgEM8wMiEDdA '
        })
    ],
    providers: [],
    declarations: [ AppComponent, GooglemapsComponent ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}
