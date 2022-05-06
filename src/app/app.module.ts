import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module'
import { AppComponent } from './app.component';
import { WeightComponent } from './weight/weight.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar/sidebar.component';
// import { ComponentsModule } from './components/components.module';


// All replace to routingComponents
// import { WeightCalcComponent } from './weight-calc/weight-calc.component';
import { TestimonialComponent } from './testimonial/testimonial.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    // TestimonialComponent,
    //  WeightCalcComponent
  ],
  imports: [AppRoutingModule, BrowserModule],
  bootstrap: [AppComponent],
  providers: []
})

export class AppModule { }
