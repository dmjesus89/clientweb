import { RiskService } from './service/chargesrates.service';
import { ClientsService } from './service/clients.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { AddClientComponent } from './clients/add-client/add-client.component';
import { ListClientComponent } from './clients/list-client/list-client.component';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import {TableModule} from 'primeng/table';
import {AccordionModule} from 'primeng/accordion';
import {MenuItem} from 'primeng/api';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    AddClientComponent,
    ListClientComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    TableModule
  ],
  providers: [ClientsService, RiskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
