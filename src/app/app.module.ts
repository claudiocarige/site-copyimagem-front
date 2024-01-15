import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './infra/infra-adapters/pages/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './infra/infra-adapters/pages/home/home.component';
import { HeaderComponent } from './core/adapters/components/header/header.component';
import { SideMenuComponent } from './core/adapters/components/side-menu/side-menu.component';
import { FooterComponent } from './core/adapters/components/footer/footer.component';
import { ListClientesComponent } from './core/adapters/components/cliente/list-clientes/list-clientes.component';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CreateClienteComponent } from './core/adapters/components/cliente/create-cliente/create-cliente.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    SideMenuComponent,
    FooterComponent,
    ListClientesComponent,
    CreateClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatPaginatorModule,


ToastrModule.forRoot({
      easeTime: 500,
      timeOut: 3200,
      positionClass:  'toast-top-right',
      closeButton: true
   })
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[]
})
export class AppModule { }
