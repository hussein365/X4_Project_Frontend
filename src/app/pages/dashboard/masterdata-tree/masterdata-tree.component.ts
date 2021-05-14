import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { DecimalPipe } from '@angular/common';

import { Observable } from 'rxjs';


import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { QueryOptions } from 'src/app/core/models/query-options';
import { Masterdata } from 'src/app/core/models/masterdata.model';
import { MasterDataService } from 'src/app/core/services/masterdata.service';

@Component({
  selector: 'app-masterdatatable',
  templateUrl: './masterdata-tree.component.html',
  styleUrls: ['./masterdata-tree.component.scss'],
  providers: [DecimalPipe],
})

/**
 * masterdata component
 */
export class MasterdataTreeComponent implements OnInit {
  // bread crum data
  breadCrumbItems: Array<{}>;
  // masterdata data
  masterData: Masterdata[];
  public selected: any;
  masterdatas$: Observable<Masterdata[]>;
  total$: Observable<number>;

  searchTerm: string;
  totalRecords: number;
  totalPages: number;
  page = 2;
  pageSize = 10;





  constructor(
   
    private MasterDataService: MasterDataService
  ) {}

  ngOnInit() {
    this.breadCrumbItems = [
      { label: 'Home' },
      { label: 'masterdata', active: true },
    ];
    /**
     * fetch data
     */
    this._fetchData();
  }

  /**
   * fetches the table value
   */
  _fetchData() {
    this.MasterDataService.list(new QueryOptions(this.page - 1, this.pageSize)).subscribe((data) => {
      this.masterData = data['content'];
      this.totalRecords = data['totalElements'];
      this.totalPages = data['totalPages']
      this.pageSize = data['size']
      console.log(this.masterData);
    });
  }

  onPageChange(){
    this._fetchData()
  }


  

  onPageSizeChange(){

    this.page = 1;
    this._fetchData();
  }
}
