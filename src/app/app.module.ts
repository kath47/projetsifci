import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { MatRadioModule} from '@angular/material/radio';
import { MatDialogModule} from '@angular/material/dialog';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatStepperModule} from '@angular/material/stepper';
import { MatInputModule} from  '@angular/material/input' ;
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatCardModule} from '@angular/material/card';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatTableModule} from '@angular/material/table';
import { MatExpansionModule} from '@angular/material/expansion';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';
import { RechercheComponent } from './recherche/recherche.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { CartographieComponent } from './cartographie/cartographie.component';
import { StatistiquesComponent } from './statistiques/statistiques.component';
import { AdministrationComponent } from './administration/administration.component';
import { CertificationComponent } from './transactions/certification/certification.component';
import { DelimitationComponent } from './transactions/delimitation/delimitation.component';
import { ContratualisationComponent } from './transactions/contratualisation/contratualisation.component';
import { ConsolidationComponent } from './transactions/consolidation/consolidation.component';
import { CertificatfComponent } from './transactions/certification/certificatf/certificatf.component';
import { CertificatisoleeComponent } from './transactions/certification/certificatisolee/certificatisolee.component';
import { FusioncfComponent } from './transactions/certification/fusioncf/fusioncf.component';
import { MorcellementcfComponent } from './transactions/certification/morcellementcf/morcellementcf.component';
import { DialogCfopComponent } from './transactions/certification/dialog-cfop/dialog-cfop.component';
import { DialogVisaComponent } from './transactions/certification/certificatf/dialog-visa/dialog-visa.component';
import { DialogPvrdcComponent } from './transactions/certification/certificatf/dialog-pvrdc/dialog-pvrdc.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    HomeComponent,
    RechercheComponent,
    TransactionsComponent,
    CartographieComponent,
    StatistiquesComponent,
    AdministrationComponent,
    CertificationComponent,
    DelimitationComponent,
    ContratualisationComponent,
    ConsolidationComponent,
    CertificatfComponent,
    CertificatisoleeComponent,
    FusioncfComponent,
    MorcellementcfComponent,
    DialogCfopComponent,
    DialogVisaComponent,
    DialogPvrdcComponent,
    DashboardComponent
  ],
  
  

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //*MATERIAL IMPORTS
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule ,
    MatListModule,
    MatDividerModule,
    MatButtonToggleModule,
    MatExpansionModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatStepperModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatDialogModule,
    MatRadioModule,
    


  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
