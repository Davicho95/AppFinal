import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { GifsModule } from './pages/gifs/gifs.module';
import { HttpClientModule } from '@angular/common/http';
import { PaisesModule } from './pages/paises/paises.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

    SharedModule,
    GifsModule,
    PaisesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
