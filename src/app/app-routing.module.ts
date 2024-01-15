import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './infra/infra-adapters/pages/login/login.component';
import { HomeComponent } from './infra/infra-adapters/pages/home/home.component';
import { ListClientesComponent } from './core/adapters/components/cliente/list-clientes/list-clientes.component';

const routes: Routes = [
  { path: '', redirectTo:'login', pathMatch:'full'},
  { path:'login', component:LoginComponent},
  { path:'home', component: HomeComponent, children:[
    { path:'list-cliente', component: ListClientesComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
