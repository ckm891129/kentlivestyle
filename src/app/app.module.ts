import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeightComponent } from './weight/weight.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar/sidebar.component';
// import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [
    AppComponent,
    WeightComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    // ComponentsModule,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
