import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageListClientsComponent } from './pages/page-list-clients/page-list-clients.component';
import { PageAddClientComponent } from './pages/page-add-client/page-add-client.component';
import { PageEditClientComponent } from './pages/page-edit-client/page-edit-client.component';
const routes: Routes = [
  {
    path: '', component: PageListClientsComponent,
    data: { title: 'clinets', subtitle: 'All clients' },
  },
  { path: 'add', component: PageAddClientComponent },
  { path: 'edit/:id', component: PageEditClientComponent },
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
