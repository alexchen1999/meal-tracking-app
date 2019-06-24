import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AngularMaterialsModule } from './angularMaterial.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import all modules used by the component here
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularMaterialsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }