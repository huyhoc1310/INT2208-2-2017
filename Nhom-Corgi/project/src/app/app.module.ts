import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { OnlineTestComponent } from './onlinetest.component';
import {appRoutes} from './app.routes';
import { BaigiangListComponent } from "./baigianglist.component";

import { BaigiangComponent, SafePipe } from "./baigiang.component";
import { VideoListComponent } from "./videolist.component";
import{ BaigiangtoanComponent} from './baigiangtoan.component';

import {BaigiangService} from './services/baigiang.service';
@NgModule({
  declarations: [
    AppComponent,
    OnlineTestComponent,
    HomeComponent,
    BaigiangtoanComponent,
    BaigiangListComponent,
    BaigiangComponent,
    VideoListComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    appRoutes
  ],
  providers: [ BaigiangService],
  bootstrap: [AppComponent]
})
export class AppModule { }
