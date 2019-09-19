import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, 
         MatInputModule,
         MatCardModule, MatToolbarModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { SuperadminPanelHomeComponent } from './superadmin-panel-home/superadmin-panel-home.component';
import { SuperadminPanelCreditorsComponent } from './superadmin-panel-creditors/superadmin-panel-creditors.component';
import { SuperadminPanelDebitorsComponent } from './superadmin-panel-debitors/superadmin-panel-debitors.component';
import { AgencyHomePageComponent } from './agency-home-page/agency-home-page.component';
import { LazyLoadScriptService } from './lazy-load-scripts.service';
import { AgencyDebitorsComponent } from './agency-debitors/agency-debitors.component';
import { AgencyDisputesComponent } from './agency-disputes/agency-disputes.component';
import { LoginComponent } from './login/login.component';
import {MatTabsModule} from '@angular/material/tabs';
import { AgencyClientsComponent } from './agency-clients/agency-clients.component';

@NgModule({
  declarations: [
    AppComponent,
    SuperadminPanelHomeComponent,
    SuperadminPanelCreditorsComponent,
    SuperadminPanelDebitorsComponent,
    AgencyHomePageComponent,
    AgencyDebitorsComponent,
    AgencyDisputesComponent,
    LoginComponent,
    AgencyClientsComponent,   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatTabsModule
  ],
  providers: [LazyLoadScriptService],
  bootstrap: [AppComponent]
})
export class AppModule { }
