import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageListOrdersComponent } from './pages/page-list-orders/page-list-orders.component';
import { PageAddOrderComponent } from './pages/page-add-order/page-add-order.component';
const routes: Routes = [
  {
    path: '', component: PageListOrdersComponent,
    data: { title: 'orders', subtitle: 'All orders' }
  },
  { path: 'add', component: PageAddOrderComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
