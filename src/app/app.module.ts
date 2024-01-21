import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { JobPortalComponent } from './components/job-portal/job-portal.component';

@NgModule({
  imports: [CommonModule, BrowserModule, HttpClientModule, AppRoutingModule],
  declarations: [AppComponent, JobPortalComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
