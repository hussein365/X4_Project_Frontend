import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { from, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Masterdata } from 'src/app/core/models/masterdata.model';
import { QueryOptions } from 'src/app/core/models/query-options';
import { Ta_typ } from 'src/app/core/models/ta_typ.model';
import { MasterDataService } from 'src/app/core/services/masterdata.service';
import { Ta_typService } from 'src/app/core/services/ta_typ.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { Ta_typ_Ta } from 'src/app/core/models/ta_typ_ta';
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
  selectedItems:Ta_typ[] = [];
  dropdownSettings:IDropdownSettings = {};
  public isCollapsed = true;

  from:string="";
  until:string="";
  ta:string="";
  constructor(private masterdataService:MasterDataService,private ta_typService:Ta_typService) {  }

  async ngOnInit(): Promise<void> {
    this.breadCrumbItems = [
      { label: 'Home' },
      { label: 'MasterData with tree TA_TYP TA', active: true },
    ];
    this.ta_typService.getTa_typs().subscribe((data) =>this.dropdownList=data);
    this._fetchData();
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'id',
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
    if(this.selectedItems.length>0){
      this.method();
    }
    else{
      this._fetchData()

    }
  }
  
  onPageSizeChange(){
    this.page = 1;
    if(this.selectedItems.length>0){
      this.method();
    }
    else{
      this._fetchData()

    }
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
  method(){
    if(this.from!=""&& this.until!=""&&this.ta===""){
    console.log(this.from)
    console.log(this.until)
    this.masterdataService.searchfromuntil(this.selectedItems,this.from,this.until,(this.page-1).toString(),this.pageSize.toString()).subscribe((data) => {
      console.log(data['size' ])
      this.masterData = data['content'];
      this.totalRecords = data['totalElements'];
      this.totalPages = data['totalPages']
      this.pageSize = data['size']
      console.log(this.masterData.length)

    });
  }
  if(this.from===""&& this.until===""&&this.ta===""){
    console.log(this.from)
    console.log(this.until)
    this.masterdataService.search(this.selectedItems,(this.page-1).toString(),this.pageSize.toString()).subscribe((data) => {
      this.masterData = data['content'];
      this.totalRecords = data['totalElements'];
      this.totalPages = data['totalPages']
      this.pageSize = data['size']
      console.log(this.masterData.length)

    });
  }
  if(this.from!=""&& this.until===""&&this.ta===""){
    console.log(this.from)
    console.log(this.until)
    this.masterdataService.searchfrom(this.selectedItems,this.from,(this.page-1).toString(),this.pageSize.toString()).subscribe((data) => {
      this.masterData = data['content'];
      this.totalRecords = data['totalElements'];
      this.totalPages = data['totalPages']
      this.pageSize = data['size']
      console.log(this.masterData.length)

    });
  }
  if(this.from===""&& this.until!=""&&this.ta===""){
    console.log(this.from)
    console.log(this.until)
    this.masterdataService.searchuntil(this.selectedItems,this.until,(this.page-1).toString(),this.pageSize.toString()).subscribe((data) => {
      this.masterData = data['content'];
      this.totalRecords = data['totalElements'];
      this.totalPages = data['totalPages']
      this.pageSize = data['size']
      console.log(this.masterData.length)

    });
  }
  if(this.from===""&& this.until===""&&this.ta!=""){
    var tas=this.ta.split(",").map(Number);
    console.log(tas);
    var ta_typ_ta=new Ta_typ_Ta(this.selectedItems,tas);

    this.masterdataService.searchByTaTypTa(ta_typ_ta,(this.page-1).toString(),this.pageSize.toString()).subscribe((data) => {
      this.masterData = data['content'];
      this.totalRecords = data['totalElements'];
      this.totalPages = data['totalPages']
      this.pageSize = data['size']
      console.log(this.masterData.length)
  });
}
}
click(){
  this.masterdataService.searchfromuntil2(this.selectedItems,this.from,this.until,this.page.toString(),this.pageSize.toString()).subscribe((data) => {
    this.masterData = data['content'];
    this.totalRecords = data['totalElements'];
    this.totalPages = data['totalPages']
    this.pageSize = data['size']
    console.log(this.masterData.length)
  });
}
}
