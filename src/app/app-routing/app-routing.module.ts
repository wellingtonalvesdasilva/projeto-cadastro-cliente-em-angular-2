import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from "../dashboard/dashboard.component";
import { ClienteIndexComponent } from "../cliente/cliente-index/cliente-index.component";
import { ClienteFormComponent } from "../cliente/cliente-form/cliente-form.component";

const routes: Routes = [
    {
      path: 'cliente',
      component: ClienteIndexComponent,
    },
    {
      path: 'cliente/editar/:id',
      component: ClienteFormComponent,
    },
    {
      path: 'cliente/criar',
      component: ClienteFormComponent,
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }