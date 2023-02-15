import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InsertComponent } from './insert/insert.component';
import { ProjectlistComponent } from './projectlist/projectlist.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    InsertComponent,
    ProjectlistComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
