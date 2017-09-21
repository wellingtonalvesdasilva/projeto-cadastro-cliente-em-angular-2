import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ClienteIndexComponent } from './cliente/cliente-index/cliente-index.component';
import { ClienteFormComponent } from './cliente/cliente-form/cliente-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AppRoutingModule } from "./app-routing/app-routing.module";

import { ClienteService } from "./shared/service/cliente.service";
import { TelefonePipe } from './shared/pipe/telefone.pipe';
import { CnpjoucpfPipe } from './shared/pipe/cnpjoucpf.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ClienteIndexComponent,
    ClienteFormComponent,
    DashboardComponent,
    TelefonePipe,
    CnpjoucpfPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    ClienteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
