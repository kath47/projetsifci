import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdministrationComponent } from './administration/administration.component';
import { RechercheComponent } from './recherche/recherche.component';
import { StatistiquesComponent } from './statistiques/statistiques.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { CartographieComponent } from './cartographie/cartographie.component';
import { CertificationComponent } from './transactions/certification/certification.component';
import { DelimitationComponent } from './transactions/delimitation/delimitation.component';
import { ContratualisationComponent } from './transactions/contratualisation/contratualisation.component';
import { ConsolidationComponent } from './transactions/consolidation/consolidation.component';
import { CertificatfComponent } from './transactions/certification/certificatf/certificatf.component';
import { CertificatisoleeComponent } from './transactions/certification/certificatisolee/certificatisolee.component';
import { FusioncfComponent } from './transactions/certification/fusioncf/fusioncf.component';
import { MorcellementcfComponent } from './transactions/certification/morcellementcf/morcellementcf.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TbCfComponent } from './tb-cf/tb-cf.component';
import { TbDtvComponent } from './tb-dtv/tb-dtv.component';

const routes: Routes = [
  {path:'',redirectTo:'dashboard', pathMatch: 'full'},
  {path:'dashboard',component:DashboardComponent},
       {path:'tb-cf',component:TbCfComponent},
       {path:'tb-dtv',component:TbDtvComponent},
  
  {path:'recherche', component:RechercheComponent},
  {path:'transactions', component:TransactionsComponent},
         {path:'certification',component:CertificationComponent},
              {path:'certificatf',component:CertificatfComponent},
              {path:'certificatisolee',component:CertificatisoleeComponent},
              {path:'fusioncf',component:FusioncfComponent},
              {path:'morcellementcf',component:MorcellementcfComponent},
         {path:'delimitation',component:DelimitationComponent},
         {path:'contratualisation',component:ContratualisationComponent},
         {path:'consolidation',component:ConsolidationComponent},
  {path:'cartographie', component:CartographieComponent},
  {path:'statistiques', component:StatistiquesComponent},
  {path:'administration', component:AdministrationComponent},
  {path:'recherche', component:RechercheComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
