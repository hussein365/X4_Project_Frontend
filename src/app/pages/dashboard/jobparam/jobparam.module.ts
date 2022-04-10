import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgbPaginationModule, NgbTypeaheadModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { UIModule } from 'src/app/shared/ui/ui.module';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { JobParamComponent } from './jobparam.component';

@NgModule({
  declarations: [JobParamComponent],
  imports: [
    CommonModule,
    UIModule,
    NgbPaginationModule,
    NgbTypeaheadModule,
    NgbCollapseModule,
    NgbDropdownModule,
    FormsModule,
    NgMultiSelectDropDownModule.forRoot(),

  ]
})
export class JobParamModule { }
