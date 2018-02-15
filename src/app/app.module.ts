import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { GooglemapsComponent } from './googlemaps/googlemaps.component';
import { LinkedeventsComponent } from './linkedevents/linkedevents.component';
import { TopnavComponent } from './topnav/topnav.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';


@NgModule({
    imports: [
        HttpClientModule,
        BrowserModule,
        CommonModule,
        FormsModule,
        AgmCoreModule.forRoot({
            apiKey: ' AIzaSyDs6oPVEcApR3Gxsg9WI_fWgEM8wMiEDdA '
        })
    ],
    providers: [],
    declarations: [ AppComponent, GooglemapsComponent, LinkedeventsComponent, TopnavComponent, FooterComponent, MainComponent],
    bootstrap: [ AppComponent ]
})
export class AppModule {}
