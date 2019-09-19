import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SuperadminPanelHomeComponent } from './superadmin-panel-home/superadmin-panel-home.component';
import { SuperadminPanelCreditorsComponent } from './superadmin-panel-creditors/superadmin-panel-creditors.component';
import { SuperadminPanelDebitorsComponent } from './superadmin-panel-debitors/superadmin-panel-debitors.component';
import { AgencyHomePageComponent } from './agency-home-page/agency-home-page.component';
import { AgencyDebitorsComponent } from './agency-debitors/agency-debitors.component';
import { AgencyDisputesComponent } from './agency-disputes/agency-disputes.component';
import { LoginComponent } from './login/login.component';
import { AgencyClientsComponent } from './agency-clients/agency-clients.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'adminHome', component: SuperadminPanelHomeComponent},
  { path: 'adminCreditors', component: SuperadminPanelCreditorsComponent},
  { path: 'adminDebitors', component: SuperadminPanelDebitorsComponent},
  { path: 'agencyHome', component: AgencyHomePageComponent},
  { path: 'agencyDebitors', component: AgencyDebitorsComponent},
  { path: 'agencyDisputes', component: AgencyDisputesComponent},
  { path: 'login', component: LoginComponent},
  { path: 'agencyClients', component: AgencyClientsComponent},
  { path: '404', redirectTo:'login'},
  { path: '**', redirectTo: '/404'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
