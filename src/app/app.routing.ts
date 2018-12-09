import { AddClientComponent } from './clients/add-client/add-client.component';
import {Routes} from '@angular/router';
import { RouterModule } from '@angular/router';
import { ListClientComponent } from './clients/list-client/list-client.component';

export const routes: Routes = [
  { path: 'add-client', component: AddClientComponent },
  { path: 'list-client', component: ListClientComponent },
  {path : '', component : ListClientComponent}
];

export const routing = RouterModule.forRoot(routes);
