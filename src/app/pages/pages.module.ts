import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DropdownModule} from 'primeng/dropdown';
import {MultiSelectModule} from 'primeng/multiselect';
import {TableModule} from 'primeng/table';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { PagesRoutingModule } from './pages-routing.module';
import { ClientModule } from './clients/client.module';
import { UIModule } from '../shared/ui/ui.module';

import { Archive11Component } from './dashboard/archive11/archive11.component';
import { Archive12Component } from './dashboard/archive12/archive12.component';
import { Archive13Component } from './dashboard/archive13/archive13.component';
import { Archive14Component } from './dashboard/archive14/archive14.component';
import { Archive16Component } from './dashboard/archive16/archive16.component';
import { Archive18Component } from './dashboard/archive18/archive18.component';
import { BatchjobArchiveComponent } from './dashboard/batchjob_archive/batchjob_archive.component';
import { BatchjobBeproNeuComponent } from './dashboard/batchjob_bepro_neu/batchjob_bepro_neu.component';
import { BatchjobSettingsComponent } from './dashboard/batchjob_settings/batchjob_settings.component';
import { Browser } from 'selenium-webdriver';
import { MasterDataComponent } from './dashboard/HelloWorld/MasterData.component';
import { DataService } from '../core/services/data.service';
import { MasterdataTaTatypModule } from './dashboard/masterdata-ta-tatyp/masterdata-ta-tatayp.module';
import { MasterdataTreeModule } from './dashboard/masterdata-tree/masterdata-tree.module';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelSpeed: 0.3
};

@NgModule({
  declarations: [Archive11Component,Archive12Component,
                 Archive13Component,Archive14Component,Archive16Component,Archive18Component,
                 BatchjobArchiveComponent,BatchjobBeproNeuComponent,BatchjobSettingsComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ClientModule,
    UIModule,
    PerfectScrollbarModule,
    DropdownModule,
    MultiSelectModule,
    TableModule,
    MasterdataTaTatypModule,
    MasterdataTreeModule
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
  ]
})
export class PagesModule { }
