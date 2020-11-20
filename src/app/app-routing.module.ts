import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SolicitudComponent } from './components/pages/solicitud/solicitud.component';
import { SolicitudesComponent } from './components/pages/solicitudes/solicitudes.component';

const routes: Routes = [
  { path: 'solicitudes', component: SolicitudesComponent },
  { path: 'solicitud/:numeroSolicitud', component: SolicitudComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'solicitudes'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
