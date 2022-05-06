import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { WeightCalcComponent } from './weight-calc/weight-calc.component';

 const routes : Routes = [
  //  Define component for routing
   {path:'weight', component: WeightCalcComponent},
   {path:'testimonial', component: TestimonialComponent}
 ]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }

// Export all component here
export const routingComponents = [WeightCalcComponent, TestimonialComponent]
