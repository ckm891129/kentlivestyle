import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module'
import { AppComponent } from './app.component';


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
