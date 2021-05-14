import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientComponent } from './clients/client.component';
import { MasterdataTaTatypComponent } from './dashboard/masterdata-ta-tatyp/masterdata-ta-tatyp.component';
import { MasterdataTaTatyp2Component } from './dashboard/masterdata-ta-tatyp2/masterdata-ta-tatyp2.component';
import { Archive11Component } from './dashboard/archive11/archive11.component';
import { MasterdataTreeComponent } from './dashboard/masterdata-tree/masterdata-tree.component';
import { Archive12Component } from './dashboard/archive12/archive12.component';
import { Archive13Component } from './dashboard/archive13/archive13.component';
import { Archive14Component } from './dashboard/archive14/archive14.component';
import { Archive16Component } from './dashboard/archive16/archive16.component';
import { Archive18Component } from './dashboard/archive18/archive18.component';
import { BatchjobSettingsComponent } from './dashboard/batchjob_settings/batchjob_settings.component';
import { BatchjobBeproNeuComponent } from './dashboard/batchjob_bepro_neu/batchjob_bepro_neu.component';
import { BatchjobArchiveComponent } from './dashboard/batchjob_archive/batchjob_archive.component';
import { MasterDataComponent } from './dashboard/HelloWorld/MasterData.component';


const routes: Routes = [

  { path: 'home', component: DashboardComponent },
  { path: 'clients', component: ClientComponent },
  { path: 'tree_ta_typ_ta', component: MasterdataTaTatypComponent },
  { path: 'tree', component: MasterdataTreeComponent },
  { path: 'archive11', component: Archive11Component },
  { path: 'archive12', component: Archive12Component },
  { path: 'archive13', component: Archive13Component },
  { path: 'archive14', component: Archive14Component },
  { path: 'archive16', component: Archive16Component },
  { path: 'archive18', component: Archive18Component },
  { path: 'batchjob_archive', component: BatchjobArchiveComponent },
  { path: 'batchjob_bepro_neu', component: BatchjobBeproNeuComponent },
  { path: 'batchjob_settings', component: BatchjobSettingsComponent },
  { path: 'helloworld', component: MasterDataComponent }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
