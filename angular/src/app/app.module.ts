import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppitemComponent } from './appitem/appitem.component';
import { ItemlistComponent } from './itemlist/itemlist.component';
import { ViewlistComponent } from './viewlist/viewlist.component';
import { EditlistComponent } from './editlist/editlist.component';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AppitemComponent,
    ItemlistComponent,
    ViewlistComponent,
    EditlistComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
