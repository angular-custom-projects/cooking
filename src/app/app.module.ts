import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AngularFontAwesomeModule} from 'angular-font-awesome';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {VideoFilterPipe} from './video-filter.pipe';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        VideoFilterPipe
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule,
        FlexLayoutModule,
        AngularFontAwesomeModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
