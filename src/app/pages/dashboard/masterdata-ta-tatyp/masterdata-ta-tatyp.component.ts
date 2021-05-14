import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Masterdata } from 'src/app/core/models/masterdata.model';
import { QueryOptions } from 'src/app/core/models/query-options';
import { Ta_typ } from 'src/app/core/models/ta_typ.model';
import { MasterDataService } from 'src/app/core/services/masterdata.service';
import { Ta_typService } from 'src/app/core/services/ta_typ.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
@Component({
  selector: 'app-masterdata-ta-tatyp',
  templateUrl: './masterdata-ta-tatyp.component.html',
  styleUrls: ['./masterdata-ta-tatyp.component.scss']
})
export class MasterdataTaTatypComponent implements OnInit {
  
  ta_typs:Ta_typ[];
  selectedTa_typs:Ta_typ[];
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
  dropdownList = [];
  selectedItems = [];
  dropdownSettings:IDropdownSettings = {};
  public isCollapsed = true;
  constructor(private masterdataService:MasterDataService,private ta_typService:Ta_typService) {  }

  async ngOnInit(): Promise<void> {
    this.breadCrumbItems = [
      { label: 'Home' },
      { label: 'MasterData', active: true },
    ];
    this.ta_typService.getTa_typs().subscribe((data) =>this.dropdownList=data);
    this._fetchData();
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 10,
      allowSearchFilter: true
    };
  }
  _fetchData() {
    this.masterdataService.list(new QueryOptions(this.page - 1, this.pageSize)).subscribe((data) => {
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
  setting(data:any){
    this.masterData = data['content'];
    this.totalRecords = data['totalElements'];
    this.totalPages = data['totalPages']
    this.pageSize = data['size']
  }

  onItemSelect(item: any) {
    this.selectedItems.push(item);
  }
  onSelectAll(items: any) {
    this.selectedItems.push(items)
  }
  method(){}
}
