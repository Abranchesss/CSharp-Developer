import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NewOrderComponent } from './pages/new-order/new-order.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { SuccessComponent } from './pages/success/success.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'new-order', component:NewOrderComponent},
  {path:'orders', component:OrdersComponent},
  {path:'success', component:SuccessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
