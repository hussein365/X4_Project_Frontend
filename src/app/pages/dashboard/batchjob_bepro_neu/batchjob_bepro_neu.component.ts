import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Masterdata } from 'src/app/core/models/masterdata.model';
import { QueryOptions } from 'src/app/core/models/query-options';
import { MasterDataService } from 'src/app/core/services/masterdata.service';

@Component({
  selector: 'app-batchjob_bepro_neu',
  templateUrl: './batchjob_bepro_neu.component.html',
  styleUrls: ['./batchjob_bepro_neu.component.scss']
})
export class BatchjobBeproNeuComponent implements OnInit {
  masterData:Masterdata[]=[];
  hideme: boolean[] = [];
  msaters$: Observable<Masterdata[]>;
  total$: Observable<number>;

  mode: string;
  searchTerm: string;
  totalRecords: number;
  totalPages: number;
  page = 1;
  pageSize = 10;
  breadCrumbItems: Array<{}>;
  public isCollapsed = true;
  constructor(private masterdataService:MasterDataService,) {  }

  async ngOnInit(): Promise<void> {
    this.breadCrumbItems = [
      { label: 'Home' },
      { label: 'MasterData', active: true },
    ];
    /**
     * fetch data
     */
    this._fetchData();
  }
  _fetchData() {
    this.masterdataService.list(new QueryOptions(this.page - 1, this.pageSize)).subscribe((data) => {
      this.setting(data)
    });
    console.log(this.masterData)
  }
  onPageChange(){
    this._fetchData()
  }
  
  onPageSizeChange(){
    this.page = 1;
    this._fetchData();
  }
  setting(data:any){
    this.masterData = data['content'];
  }
}
