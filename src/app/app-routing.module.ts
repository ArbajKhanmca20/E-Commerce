import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { ProductInfoComponent } from './components/product-info/product-info.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {path:"",component:HomepageComponent},
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"product/:id",component:ProductInfoComponent,canActivate:[AuthGuard]},
  {path:"cart",component:CartComponent,canActivate:[AuthGuard]},
  {path:"checkout",component:CheckoutComponent,canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
