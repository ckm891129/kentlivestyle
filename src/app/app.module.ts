import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms';

// For Material Navigation
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module'
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
  ],
  imports: [
    AppRoutingModule,
     BrowserModule,
     BrowserAnimationsModule,
     MatToolbarModule,
     MatSidenavModule,
     MatButtonModule,
     MatIconModule,
     MatDividerModule,
     FormsModule
    ],
  bootstrap: [AppComponent],
  providers: []
})

export class AppModule { }
