import { Component, OnInit, ViewChildren, QueryList, Type } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { Router } from '@angular/router'
import { Observable } from 'rxjs';


import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { QueryOptions } from 'src/app/core/models/query-options';
import { Masterdata } from 'src/app/core/models/masterdata.model';
import { MasterDataService } from 'src/app/core/services/masterdata.service';
import { ActivatedRoute } from '@angular/router';
import { Ta_typ } from 'src/app/core/models/ta_typ.model';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { Ta_typService } from 'src/app/core/services/ta_typ.service';
import { Ta_typ_Ta } from 'src/app/core/models/ta_typ_ta';
import { Type0 } from 'src/app/core/models/type0.model';
import { TypeService } from 'src/app/core/services/type.service';
import { Type1 } from 'src/app/core/models/type1.model';
import { Type2 } from 'src/app/core/models/type2.model';
import { Type3 } from 'src/app/core/models/type3.model';
import { Type4 } from 'src/app/core/models/type4.model';
import { Type5 } from 'src/app/core/models/type5.model';
import { Type6 } from 'src/app/core/models/type6.model';
import { Type7 } from 'src/app/core/models/type7.model';
import { Type8 } from 'src/app/core/models/type8model';
import { FormBuilder } from '@angular/forms';

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

  ta_typs: Ta_typ[];
  selectedTa_typs: Ta_typ[];
  masterData: Masterdata[] = [];
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
  selectedItems: Ta_typ[] = [];
  dropdownSettings: IDropdownSettings = {};

  dropdownListType0: Type0[] = [];
  selectedItemsType0: Type0[] = [];
  dropdownType0Settings: IDropdownSettings = {};

  dropdownListType1: Type1[] = [];
  selectedItemsType1: Type1[] = [];
  dropdownType1Settings: IDropdownSettings = {};

  dropdownListType2: Type2[] = [];
  selectedItemsType2: Type2[] = [];
  dropdownType2Settings: IDropdownSettings = {};

  dropdownListType3: Type3[] = [];
  selectedItemsType3: Type3[] = [];
  dropdownType3Settings: IDropdownSettings = {};

  dropdownListType4: Type4[] = [];
  selectedItemsType4: Type4[] = [];
  dropdownType4Settings: IDropdownSettings = {};

  dropdownListType5: Type5[] = [];
  selectedItemsType5: Type5[] = [];
  dropdownType5Settings: IDropdownSettings = {};

  dropdownListType6: Type6[] = [];
  selectedItemsType6: Type6[] = [];
  dropdownType6Settings: IDropdownSettings = {};

  dropdownListType7: Type7[] = [];
  selectedItemsType7: Type7[] = [];
  dropdownType7Settings: IDropdownSettings = {};

  dropdownListType8: Type8[] = [];
  selectedItemsType8: Type8[] = [];
  dropdownType8Settings: IDropdownSettings = {};



  public isCollapsed = true;

  from: string = "";
  until: string = "";
  ta: string = "";
  name1: string = "";
  name2: string = "";
  name3: string = "";
  name4: string = "";
  name5: string = "";
  name6: string = "";
  name7: string = "";
  name8: string = "";

  themasterdata: Masterdata;

  oid: string;
  type_0: string;
  type_1: string;
  name_1: string;
  type_2: string;
  name_2: string;
  type_3: string;
  name_3: string;
  type_4: string;
  name_4: string;
  type_5: string;
  name_5: string;
  type_6: string;
  name_6: string;
  type_7: string;
  name_7: string;
  level: number;


  constructor(private route: ActivatedRoute, private masterdataService: MasterDataService, private ta_typService: Ta_typService,
    private typeService: TypeService, private form: FormBuilder,private router:Router) { }



  async ngOnInit(): Promise<void> {

    this.breadCrumbItems = [
      { label: 'Home' },
      { label: 'MasterData with tree', active: true },
    ];
    this.ta_typService.getTa_typs().subscribe((data) => this.dropdownList = data);
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'id',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 10,
      allowSearchFilter: true
    };

    this.typeService.getType0s().subscribe((data) => this.dropdownListType0 = data);
    this.dropdownType0Settings = {
      singleSelection: false,
      idField: 'type0',
      textField: 'type0',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 10,
      allowSearchFilter: true

    };
    this.typeService.getType1s().subscribe((data) => this.dropdownListType1 = data);
    this.dropdownType1Settings = {
      singleSelection: false,
      idField: 'type1',
      textField: 'type1',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 10,
      allowSearchFilter: true

    };
    this.typeService.getType2s().subscribe((data) => this.dropdownListType2 = data);
    this.dropdownType2Settings = {
      singleSelection: false,
      idField: 'type2',
      textField: 'type2',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 10,
      allowSearchFilter: true

    };
    this.typeService.getType3s().subscribe((data) => this.dropdownListType3 = data);
    this.dropdownType3Settings = {
      singleSelection: false,
      idField: 'type3',
      textField: 'type3',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 10,
      allowSearchFilter: true

    };
    this.typeService.getType4s().subscribe((data) => this.dropdownListType4 = data);
    this.dropdownType4Settings = {
      singleSelection: false,
      idField: 'type4',
      textField: 'type4',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 10,
      allowSearchFilter: true

    };
    this.typeService.getType5s().subscribe((data) => this.dropdownListType5 = data);
    this.dropdownType5Settings = {
      singleSelection: false,
      idField: 'type5',
      textField: 'type5',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 10,
      allowSearchFilter: true

    };
    this.typeService.getType6s().subscribe((data) => this.dropdownListType6 = data);
    this.dropdownType6Settings = {
      singleSelection: false,
      idField: 'type6',
      textField: 'type6',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 10,
      allowSearchFilter: true

    };
    this.typeService.getType7s().subscribe((data) => this.dropdownListType7 = data);
    this.dropdownType7Settings = {
      singleSelection: false,
      idField: 'type7',
      textField: 'type7',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 10,
      allowSearchFilter: true

    };
    this.typeService.getType8s().subscribe((data) => this.dropdownListType8 = data);
    this.dropdownType8Settings = {
      singleSelection: false,
      idField: 'type8',
      textField: 'type8',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 10,
      allowSearchFilter: true

    };
    if (this.route.snapshot.paramMap.has('level')) {
      this._fetchData();
    }


    this.route.queryParams.subscribe(params => {

      if (params['type_0'] && params['type_1'] && params['name_1'] && params['type_2'] == 'All' && params['name_2'] == '*') {
        this.masterData = [];
        this.oid = params['oid'];
        this.type_0 = params['type_0'];
        this.type_1 = params['type_1'];
        this.name_1 = params['name_1'];


        this.level = 2;
        console.log(this.level);

        this.onItemSelectType0(new Type0(params['type_0']));
        this.onItemSelectType1(new Type1(params['type_1']));
        this.name1 = params['name_1'];
        this.typeService.getType2s().subscribe((data) => this.selectedItemsType2 = data);
        this.name2 = params['name_2'];

        console.log(this.name1)
        this.masterdataService.findByoid(this.oid).subscribe((data) => {
          this.themasterdata = data;
          this.masterData[0] = this.themasterdata;
          console.log(this.themasterdata);
          console.log(this.masterData);
        })
        this.masterdataService.findByLevel2(this.type_0, this.type_1, this.name_1, this.pageSize.toString(), (this.page - 1).toString()).subscribe((data) => {
          for (let i = 1; i < data['content'].length + 1; i++) {
            this.masterData[i] = data['content'][i - 1];

          }
          this.totalRecords = data['totalElements'] + 1;
          this.totalPages = data['totalPages']
          this.pageSize = data['size']
          console.log(this.masterData.length);

          console.log(this.masterData);

        })





      }
      if (params['type_0'] && params['type_1'] && params['name_1'] && params['type_2'] && params['name_2'] && params['type_3'] == 'All' && params['name_3'] == '*') {

        this.masterData = [];
        this.oid = params['oid'];
        this.type_0 = params['type_0'];
        this.type_1 = params['type_1'];
        this.name_1 = params['name_1'];
        this.type_2 = params['type_2'];
        this.name_2 = params['name_2'];
        this.level = 3;
        console.log(this.level)
        console.log(this.type_0)
        console.log(this.type_1)
        console.log(this.name_1)
        console.log(this.type_2)
        console.log(this.name_2)


        this.onItemSelectType0(new Type0(params['type_0']));
        this.onItemSelectType1(new Type1(params['type_1']));
        this.onItemSelectType2(new Type2(params['type_2']));
        this.typeService.getType3s().subscribe((data) => this.selectedItemsType3 = data);

        this.name1 = params['name_1'];
        this.name2 = params['name_2'];
        this.name3 = params['name_3'];


        this.masterdataService.findByoid(this.oid).subscribe((data) => {
          this.themasterdata = data;
          this.masterData[0] = this.themasterdata;
          console.log(this.themasterdata);
          console.log(this.masterData);
        })
        this.masterdataService.findByLevel3(this.type_0, this.type_1, this.name_1, this.type_2, this.name_2, this.pageSize.toString(), (this.page - 1).toString()).subscribe((data) => {
          for (let i = 1; i < data['content'].length + 1; i++) {
            this.masterData[i] = data['content'][i - 1];

          }
          this.totalRecords = data['totalElements'] + 1;
          this.totalPages = data['totalPages']
          this.pageSize = data['size']
          console.log(this.masterData.length);

          console.log(this.masterData);

        })
      }
      if (params['type_0'] && params['type_1'] && params['name_1'] && params['type_2'] && params['name_2'] && params['type_3'] && params['name_3'] && params['type_4'] == 'All' && params['name_4'] == '*') {

        this.masterData = [];
        this.oid = params['oid'];
        this.type_0 = params['type_0'];
        this.type_1 = params['type_1'];
        this.name_1 = params['name_1'];
        this.type_2 = params['type_2'];
        this.name_2 = params['name_2'];
        this.type_3 = params['type_3'];
        this.name_3 = params['name_3'];
        this.level = 4;
        console.log(this.level);

        this.onItemSelectType0(new Type0(params['type_0']));
        this.onItemSelectType1(new Type1(params['type_1']));
        this.onItemSelectType2(new Type2(params['type_2']));
        this.onItemSelectType3(new Type3(params['type_3']));
        this.typeService.getType4s().subscribe((data) => this.selectedItemsType4 = data);

        this.name1 = params['name_1'];
        this.name2 = params['name_2'];
        this.name3 = params['name_3'];
        this.name4 = params['name_4'];


        this.masterdataService.findByoid(this.oid).subscribe((data) => {
          this.themasterdata = data;
          this.masterData[0] = this.themasterdata;
          console.log(this.themasterdata);
          console.log(this.masterData);
        })
        this.masterdataService.findByLevel4(this.type_0, this.type_1, this.name_1, this.type_2, this.name_2, this.type_3, this.name_3, this.pageSize.toString(), (this.page - 1).toString()).subscribe((data) => {
          for (let i = 1; i < data['content'].length + 1; i++) {
            this.masterData[i] = data['content'][i - 1];

          }
          this.totalRecords = data['totalElements'] + 1;
          this.totalPages = data['totalPages']
          this.pageSize = data['size']
          console.log(this.masterData.length);

          console.log(this.masterData);

        })

      }
      if (params['type_0'] && params['type_1'] && params['name_1'] && params['type_2'] && params['name_2'] && params['type_3'] && params['name_3'] && params['type_4'] && params['name_4'] && params['type_5'] == 'All' && params['name_5'] == '*') {
        this.masterData = [];
        this.oid = params['oid'];
        this.type_0 = params['type_0'];
        this.type_1 = params['type_1'];
        this.name_1 = params['name_1'];
        this.type_2 = params['type_2'];
        this.name_2 = params['name_2'];
        this.type_3 = params['type_3'];
        this.name_3 = params['name_3'];
        this.type_4 = params['type_4'];
        this.name_4 = params['name_4'];
        this.level = 5;
        console.log(this.level);
        this.onItemSelectType0(new Type0(params['type_0']));
        this.onItemSelectType1(new Type1(params['type_1']));
        this.onItemSelectType2(new Type2(params['type_2']));
        this.onItemSelectType3(new Type3(params['type_3']));
        this.onItemSelectType4(new Type4(params['type_4']));

        this.typeService.getType5s().subscribe((data) => this.selectedItemsType5 = data);

        this.name1 = params['name_1'];
        this.name2 = params['name_2'];
        this.name3 = params['name_3'];
        this.name4 = params['name_4'];
        this.name5 = params['name_5'];

        this.masterdataService.findByoid(this.oid).subscribe((data) => {
          this.themasterdata = data;
          this.masterData[0] = this.themasterdata;
          console.log(this.themasterdata);
          console.log(this.masterData);
        })
        this.masterdataService.findByLevel5(this.type_0, this.type_1, this.name_1, this.type_2, this.name_2, this.type_3, this.name_3, this.type_4, this.name_4, this.pageSize.toString(), (this.page - 1).toString()).subscribe((data) => {
          for (let i = 1; i < data['content'].length + 1; i++) {
            this.masterData[i] = data['content'][i - 1];

          }
          this.totalRecords = data['totalElements'] + 1;
          this.totalPages = data['totalPages']
          this.pageSize = data['size']
          console.log(this.masterData.length);
          console.log(this.masterData);

        })

      }
      if (params['type_0'] && params['type_1'] && params['name_1'] && params['type_2'] && params['name_2'] && params['type_3'] && params['name_3'] && params['type_4'] && params['name_4'] && params['type_5'] && (params['name_5'] || params["name_5"].length == 0) && params['type_6'] == 'All' && params['name_6'] == '*') {
        this.masterData = [];
        this.oid = params['oid'];
        this.type_0 = params['type_0'];
        this.type_1 = params['type_1'];
        this.name_1 = params['name_1'];
        this.type_2 = params['type_2'];
        this.name_2 = params['name_2'];
        this.type_3 = params['type_3'];
        this.name_3 = params['name_3'];
        this.type_4 = params['type_4'];
        this.name_4 = params['name_4'];
        this.type_5 = params['type_5'];


        this.name_5 = params['name_5'];
        console.log(params['name_5'])
        this.level = 6;
        console.log(this.level);
        this.onItemSelectType0(new Type0(params['type_0']));
        this.onItemSelectType1(new Type1(params['type_1']));
        this.onItemSelectType2(new Type2(params['type_2']));
        this.onItemSelectType3(new Type3(params['type_3']));
        this.onItemSelectType4(new Type4(params['type_4']));
        this.onItemSelectType5(new Type5(params['type_5']));

        this.typeService.getType6s().subscribe((data) => this.selectedItemsType6 = data);

        this.name1 = params['name_1'];
        this.name2 = params['name_2'];
        this.name3 = params['name_3'];
        this.name4 = params['name_4'];
        this.name5 = params['name_5'];
        this.name6 = params['name_6'];

        this.masterdataService.findByoid(this.oid).subscribe((data) => {
          this.themasterdata = data;
          this.masterData[0] = this.themasterdata;
          console.log(this.themasterdata);
          console.log(this.masterData);
        })
        this.masterdataService.findByLevel6(this.type_0, this.type_1, this.name_1, this.type_2, this.name_2, this.type_3, this.name_3, this.type_4, this.name_4, this.type_5, this.name_5, this.pageSize.toString(), (this.page - 1).toString()).subscribe((data) => {
          for (let i = 1; i < data['content'].length + 1; i++) {
            this.masterData[i] = data['content'][i - 1];

          }
          this.totalRecords = data['totalElements'] + 1;
          this.totalPages = data['totalPages']
          this.pageSize = data['size']
          console.log(this.masterData.length);
          console.log(this.masterData);

        })


      }
      if (params['type_0'] && params['type_1'] && params['name_1'] && params['type_2'] && params['name_2'] && params['type_3'] && params['name_3'] && params['type_4'] && params['name_4'] && params['type_5'] && (params['name_5'] || params["name_5"].length == 0) && params['type_6'] && params['name_6'] && params['type_7'] == 'All' && params['name_7'] == '*') {
        this.masterData = [];
        this.oid = params['oid'];
        this.type_0 = params['type_0'];
        this.type_1 = params['type_1'];
        this.name_1 = params['name_1'];
        this.type_2 = params['type_2'];
        this.name_2 = params['name_2'];
        this.type_3 = params['type_3'];
        this.name_3 = params['name_3'];
        this.type_4 = params['type_4'];
        this.name_4 = params['name_4'];
        this.type_5 = params['type_5'];
        this.name_5 = params['name_5'];
        this.type_6 = params['type_6'];
        this.name_6 = params['name_6'];
        this.level = 7;
        console.log(this.level);
        this.onItemSelectType0(new Type0(params['type_0']));
        this.onItemSelectType1(new Type1(params['type_1']));
        this.onItemSelectType2(new Type2(params['type_2']));
        this.onItemSelectType3(new Type3(params['type_3']));
        this.onItemSelectType4(new Type4(params['type_4']));
        this.onItemSelectType5(new Type5(params['type_5']));
        this.onItemSelectType6(new Type6(params['type_6']));

        this.typeService.getType7s().subscribe((data) => this.selectedItemsType7 = data);

        this.name1 = params['name_1'];
        this.name2 = params['name_2'];
        this.name3 = params['name_3'];
        this.name4 = params['name_4'];
        this.name5 = params['name_5'];
        this.name6 = params['name_6'];
        this.name7 = params['name_7'];

        this.masterdataService.findByoid(this.oid).subscribe((data) => {
          this.themasterdata = data;
          this.masterData[0] = this.themasterdata;
          console.log(this.themasterdata);
          console.log(this.masterData);
        })
        this.masterdataService.findByLevel7(this.type_0, this.type_1, this.name_1, this.type_2, this.name_2, this.type_3, this.name_3, this.type_4, this.name_4, this.type_5, this.name_5, this.type_6, this.name_6, this.pageSize.toString(), (this.page - 1).toString()).subscribe((data) => {
          for (let i = 1; i < data['content'].length + 1; i++) {
            this.masterData[i] = data['content'][i - 1];

          }
          this.totalRecords = data['totalElements'] + 1;
          this.totalPages = data['totalPages']
          this.pageSize = data['size']
          console.log(this.masterData.length);
          console.log(this.masterData);

        });
      }
      if (params['oid'] && params['type_0'] && params['type_1'] && params['name_1'] && params['type_2'] && params['name_2'] && params['type_3'] && params['name_3'] && params['type_4'] && params['name_4'] && params['type_5'] && params['name_5'] && params['type_6'] && params['name_6'] && params['type_7'] && params['name_7'] && params['type_8'] == 'All' && params['name_8'] == '*') {
        this.masterData = [];
        this.oid = params['oid'];
        this.type_0 = params['type_0'];
        this.type_1 = params['type_1'];
        this.name_1 = params['name_1'];
        this.type_2 = params['type_2'];
        this.name_2 = params['name_2'];
        this.type_3 = params['type_3'];
        this.name_3 = params['name_3'];
        this.type_4 = params['type_4'];
        this.name_4 = params['name_4'];
        this.type_5 = params['type_5'];
        this.name_5 = params['name_5'];
        this.type_6 = params['type_6'];
        this.name_6 = params['name_6'];
        this.type_7 = params['type_7'];
        this.name_7 = params['name_7'];
        this.level = 8;
        console.log(this.level);
        this.onItemSelectType0(new Type0(params['type_0']));
        this.onItemSelectType1(new Type1(params['type_1']));
        this.onItemSelectType2(new Type2(params['type_2']));
        this.onItemSelectType3(new Type3(params['type_3']));
        this.onItemSelectType4(new Type4(params['type_4']));
        this.onItemSelectType5(new Type5(params['type_5']));
        this.onItemSelectType6(new Type6(params['type_6']));
        this.onItemSelectType7(new Type7(params['type_7']));

        this.typeService.getType8s().subscribe((data) => this.selectedItemsType8 = data);

        this.name1 = params['name_1'];
        this.name2 = params['name_2'];
        this.name3 = params['name_3'];
        this.name4 = params['name_4'];
        this.name5 = params['name_5'];
        this.name6 = params['name_6'];
        this.name7 = params['name_7'];
        this.name8 = params['name_8'];

        this.masterdataService.findByoid(this.oid).subscribe((data) => {
          this.themasterdata = data;
          this.masterData[0] = this.themasterdata;
          console.log(this.themasterdata);
          console.log(this.masterData);
        })
        this.masterdataService.findByLevel8(this.type_0, this.type_1, this.name_1, this.type_2, this.name_2, this.type_3, this.name_3, this.type_4, this.name_4, this.type_5, this.name_5, this.type_6, this.name_6, this.type_7, this.name_7, this.pageSize.toString(), (this.page - 1).toString()).subscribe((data) => {
          for (let i = 1; i < data['content'].length + 1; i++) {
            this.masterData[i] = data['content'][i - 1];

          }
          this.totalRecords = data['totalElements'] + 1;
          this.totalPages = data['totalPages']
          this.pageSize = data['size']
          console.log(this.masterData.length);
          console.log(this.masterData);

        });
      }





    });


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


  onPageSizeChange() {

    this.page = 1;
    this._fetchData();
  }


  onPageChange() {
    this._fetchData()
  }
  setting(data: any) {
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
  onItemSelectType0(item: any) {
    this.selectedItemsType0.push(item);

  }
  onSelectAllType0(items: any) {
    this.selectedItemsType0.push(items)

  }
  onItemSelectType1(item: any) {
    this.selectedItemsType1.push(item);

  }
  onSelectAllType1(items: any) {
    this.selectedItemsType1.push(items)

  }
  onItemSelectType2(item: any) {
    this.selectedItemsType2.push(item);

  }
  onSelectAllType2(items: any) {
    this.selectedItemsType2.push(items)

  }
  onItemSelectType3(item: any) {
    this.selectedItemsType3.push(item);

  }
  onSelectAllType3(items: any) {
    this.selectedItemsType3.push(items)

  }
  onItemSelectType4(item: any) {
    this.selectedItemsType4.push(item);

  }
  onSelectAllType4(items: any) {
    this.selectedItemsType4.push(items)

  }
  onItemSelectType5(item: any) {
    this.selectedItemsType5.push(item);

  }
  onSelectAllType5(items: any) {
    this.selectedItemsType5.push(items)

  }
  onItemSelectType6(item: any) {
    this.selectedItemsType6.push(item);

  }
  onSelectAllType6(items: any) {
    this.selectedItemsType6.push(items)

  }
  onItemSelectType7(item: any) {
    this.selectedItemsType7.push(item);

  }
  onSelectAllType7(items: any) {
    this.selectedItemsType7.push(items)

  }
  onItemSelectType8(item: any) {
    this.selectedItemsType8.push(item);

  }
  onSelectAllType8(items: any) {
    this.selectedItemsType8.push(items)

  }
  method() {

    if (this.selectedItemsType0.length != 0 && this.selectedItemsType1.length != 0 && this.name1 != "" && this.selectedItemsType2.length == 0 && this.name2 == "" && this.selectedItemsType3.length == 0 && this.name3 == "" && this.selectedItemsType4.length == 0 && this.name4 == "" && this.selectedItemsType5.length == 0 && this.name5 == "" && this.selectedItemsType6.length == 0 && this.name6 == "" && this.selectedItemsType7.length == 0 && this.name7 == "" && this.selectedItemsType8.length == 0 && this.name8 == "") {
      this.selectedItems=[]
      this.ta="";
      this.from="";
      this.until="";
      console.log(1);
      console.log(this.selectedItemsType1[0].type1);
      this.masterdataService.findByLevel11(this.selectedItemsType0[0].type0, this.selectedItemsType1[0].type1, this.name1, this.pageSize.toString(), (this.page - 1).toString()).subscribe((data) => {
        console.log(data['size'])
        this.masterData = data['content'];
        this.totalRecords = data['totalElements'];
        this.totalPages = data['totalPages']
        this.pageSize = data['size']
        console.log(this.masterData.length)

      });
    }
    if (this.selectedItemsType0.length != 0 && this.selectedItemsType1.length != 0 && this.name1 != "" && this.selectedItemsType2.length != 0 && this.name2 != "" && this.selectedItemsType3.length == 0 && this.name3 == "" && this.selectedItemsType4.length == 0 && this.name4 == "" && this.selectedItemsType5.length == 0 && this.name5 == "" && this.selectedItemsType6.length == 0 && this.name6 == "" && this.selectedItemsType7.length == 0 && this.name7 == "" && this.selectedItemsType8.length == 0 && this.name8 == "") {
      this.selectedItems=[];
      this.ta="";
      this.from="";
      this.until="";
      console.log(2);
      this.masterdataService.findByLevel22(this.selectedItemsType0[0].type0, this.selectedItemsType1[0].type1, this.name1, this.selectedItemsType2[0].type2, this.name2, this.pageSize.toString(), (this.page - 1).toString()).subscribe((data) => {
        console.log(data['size'])
        this.masterData = data['content'];
        this.totalRecords = data['totalElements'];
        this.totalPages = data['totalPages']
        this.pageSize = data['size']
        console.log(this.masterData.length)

      });
    }
    if (this.selectedItemsType0.length != 0 && this.selectedItemsType1.length != 0 && this.name1 != "" && this.selectedItemsType2.length != 0 && this.name2 != "" && this.selectedItemsType3.length != 0 && this.name3 != "" && this.selectedItemsType4.length == 0 && this.name4 == "" && this.selectedItemsType5.length == 0 && this.name5 == "" && this.selectedItemsType6.length == 0 && this.name6 == "" && this.selectedItemsType7.length == 0 && this.name7 == "" && this.selectedItemsType8.length == 0 && this.name8 == "") {
      this.selectedItems=[];
      this.ta="";
      this.from="";
      this.until="";
      console.log(3);
      this.masterdataService.findByLevel33(this.selectedItemsType0[0].type0, this.selectedItemsType1[0].type1, this.name1, this.selectedItemsType2[0].type2, this.name2, this.selectedItemsType3[0].type3, this.name3, this.pageSize.toString(), (this.page - 1).toString()).subscribe((data) => {
        console.log(data['size'])
        this.masterData = data['content'];
        this.totalRecords = data['totalElements'];
        this.totalPages = data['totalPages']
        this.pageSize = data['size']
        console.log(this.masterData.length)

      });
    }
    if (this.selectedItemsType0.length != 0 && this.selectedItemsType1.length != 0 && this.name1 != "" && this.selectedItemsType2.length != 0 && this.name2 != "" && this.selectedItemsType3.length != 0 && this.name3 != "" && this.selectedItemsType4.length != 0 && this.name4 != "" && this.selectedItemsType5.length == 0 && this.name5 == "" && this.selectedItemsType6.length == 0 && this.name6 == "" && this.selectedItemsType7.length == 0 && this.name7 == "" && this.selectedItemsType8.length == 0 && this.name8 == "") {
      this.selectedItems=[];
      this.ta="";
      this.from="";
      this.until="";
      console.log(4);
      this.masterdataService.findByLevel44(this.selectedItemsType0[0].type0, this.selectedItemsType1[0].type1, this.name1, this.selectedItemsType2[0].type2, this.name2, this.selectedItemsType3[0].type3, this.name3, this.selectedItemsType4[0].type4, this.name4, this.pageSize.toString(), (this.page - 1).toString()).subscribe((data) => {
        console.log(data['size'])
        this.masterData = data['content'];
        this.totalRecords = data['totalElements'];
        this.totalPages = data['totalPages']
        this.pageSize = data['size']
        console.log(this.masterData.length)

      });
    }
    if (this.selectedItemsType0.length != 0 && this.selectedItemsType1.length != 0 && this.name1 != "" && this.selectedItemsType2.length != 0 && this.name2 != "" && this.selectedItemsType3.length != 0 && this.name3 != "" && this.selectedItemsType4.length != 0 && this.name4 != "" && this.selectedItemsType5.length != 0 && this.name5 != "" && this.selectedItemsType6.length == 0 && this.name6 == "" && this.selectedItemsType7.length == 0 && this.name7 == "" && this.selectedItemsType8.length == 0 && this.name8 == "") {
      this.selectedItems=[];
      this.ta="";
      this.from="";
      this.until="";
      console.log(5);
      this.masterdataService.findByLevel55(this.selectedItemsType0[0].type0, this.selectedItemsType1[0].type1, this.name1, this.selectedItemsType2[0].type2, this.name2, this.selectedItemsType3[0].type3, this.name3, this.selectedItemsType4[0].type4, this.name4, this.selectedItemsType5[0].type5, this.name5, this.pageSize.toString(), (this.page - 1).toString()).subscribe((data) => {
        console.log(data['size'])
        this.masterData = data['content'];
        this.totalRecords = data['totalElements'];
        this.totalPages = data['totalPages']
        this.pageSize = data['size']
        console.log(this.masterData.length)

      });
    }
    if (this.selectedItemsType0.length != 0 && this.selectedItemsType1.length != 0 && this.name1 != "" && this.selectedItemsType2.length != 0 && this.name2 != "" && this.selectedItemsType3.length != 0 && this.name3 != "" && this.selectedItemsType4.length != 0 && this.name4 != "" && this.selectedItemsType5.length != 0 && this.name5 != "" && this.selectedItemsType6.length != 0 && this.name6 != "" && this.selectedItemsType7.length == 0 && this.name7 == "" && this.selectedItemsType8.length == 0 && this.name8 == "") {
      this.selectedItems=[];
      this.ta="";
      this.from="";
      this.until="";
      console.log(6);
      this.masterdataService.findByLevel66(this.selectedItemsType0[0].type0, this.selectedItemsType1[0].type1, this.name1, this.selectedItemsType2[0].type2, this.name2, this.selectedItemsType3[0].type3, this.name3, this.selectedItemsType4[0].type4, this.name4, this.selectedItemsType5[0].type5, this.name5, this.selectedItemsType6[0].type6, this.name6, this.pageSize.toString(), (this.page - 1).toString()).subscribe((data) => {
        console.log(data['size'])
        this.masterData = data['content'];
        this.totalRecords = data['totalElements'];
        this.totalPages = data['totalPages']
        this.pageSize = data['size']
        console.log(this.masterData.length)

      });
    }
    if (this.selectedItemsType0.length != 0 && this.selectedItemsType1.length != 0 && this.name1 != "" && this.selectedItemsType2.length != 0 && this.name2 != "" && this.selectedItemsType3.length != 0 && this.name3 != "" && this.selectedItemsType4.length != 0 && this.name4 != "" && this.selectedItemsType5.length != 0 && this.name5 != "" && this.selectedItemsType6.length != 0 && this.name6 != "" && this.selectedItemsType7.length != 0 && this.name7 != "" && this.selectedItemsType8.length == 0 && this.name8 == "") {
      this.selectedItems=[];
      this.ta="";
      this.from="";
      this.until="";
      console.log(7);
      this.masterdataService.findByLevel77(this.selectedItemsType0[0].type0, this.selectedItemsType1[0].type1, this.name1, this.selectedItemsType2[0].type2, this.name2, this.selectedItemsType3[0].type3, this.name3, this.selectedItemsType4[0].type4, this.name4, this.selectedItemsType5[0].type5, this.name5, this.selectedItemsType6[0].type6, this.name6, this.selectedItemsType7[0].type7, this.name7, this.pageSize.toString(), (this.page - 1).toString()).subscribe((data) => {
        console.log(data['size'])
        this.masterData = data['content'];
        this.totalRecords = data['totalElements'];
        this.totalPages = data['totalPages']
        this.pageSize = data['size']
        console.log(this.masterData.length)

      });
    }
    if (this.selectedItemsType0.length != 0 && this.selectedItemsType1.length != 0 && this.name1 != "" && this.selectedItemsType2.length != 0 && this.name2 != "" && this.selectedItemsType3.length != 0 && this.name3 != "" && this.selectedItemsType4.length != 0 && this.name4 != "" && this.selectedItemsType5.length != 0 && this.name5 != "" && this.selectedItemsType6.length != 0 && this.name6 != "" && this.selectedItemsType7.length != 0 && this.name7 != "" && this.selectedItemsType8.length != 0 && this.name8 != "") {
      this.selectedItems=[];
      this.ta="";
      this.from="";
      this.until="";
      console.log(8);
      this.masterdataService.findByLevel88(this.selectedItemsType0[0].type0, this.selectedItemsType1[0].type1, this.name1, this.selectedItemsType2[0].type2, this.name2, this.selectedItemsType3[0].type3, this.name3, this.selectedItemsType4[0].type4, this.name4, this.selectedItemsType5[0].type5, this.name5, this.selectedItemsType6[0].type6, this.name6, this.selectedItemsType7[0].type7, this.name7, this.selectedItemsType8[0].type8, this.name8, this.pageSize.toString(), (this.page - 1).toString()).subscribe((data) => {
        console.log(data['size'])
        this.masterData = data['content'];
        this.totalRecords = data['totalElements'];
        this.totalPages = data['totalPages']
        this.pageSize = data['size']
        console.log(this.masterData.length)

      });
    }

    if (this.from != "" && this.until != "" && this.ta === "") {
      this.selectedItemsType0 = [];
      this.selectedItemsType1 = [];

      this.selectedItemsType2 = [];

      this.selectedItemsType3 = [];

      this.selectedItemsType4 = [];

      this.selectedItemsType5 = [];
      this.selectedItemsType6 = [];
      this.selectedItemsType7 = [];

      this.selectedItemsType8 = [];
      this.name1 = "";
      this.name2 = "";
      this.name3 = "";
      this.name4 = "";
      this.name5 = "";
      this.name6 = "";
      this.name7 = "";
      this.name8 = "";


      console.log(this.from)
      console.log(this.until)
      this.masterdataService.searchfromuntil(this.selectedItems, this.from, this.until, (this.page - 1).toString(), this.pageSize.toString()).subscribe((data) => {
        console.log(data['size'])
        this.masterData = data['content'];
        this.totalRecords = data['totalElements'];
        this.totalPages = data['totalPages']
        this.pageSize = data['size']
        console.log(this.masterData.length)

      });
    }

    if (this.from != "" && this.until === "" && this.ta === "") {
      this.selectedItemsType0 = [];
      this.selectedItemsType1 = [];

      this.selectedItemsType2 = [];

      this.selectedItemsType3 = [];

      this.selectedItemsType4 = [];

      this.selectedItemsType5 = [];
      this.selectedItemsType6 = [];
      this.selectedItemsType7 = [];

      this.selectedItemsType8 = [];
      this.name1 = "";
      this.name2 = "";
      this.name3 = "";
      this.name4 = "";
      this.name5 = "";
      this.name6 = "";
      this.name7 = "";
      this.name8 = "";
      console.log(this.from)
      console.log(this.until)
      this.masterdataService.searchfrom(this.selectedItems, this.from, (this.page - 1).toString(), this.pageSize.toString()).subscribe((data) => {
        this.masterData = data['content'];
        this.totalRecords = data['totalElements'];
        this.totalPages = data['totalPages']
        this.pageSize = data['size']
        console.log(this.masterData.length)

      });
    }
    if (this.from === "" && this.until != "" && this.ta === "") {
      this.selectedItemsType0 = [];
      this.selectedItemsType1 = [];

      this.selectedItemsType2 = [];

      this.selectedItemsType3 = [];

      this.selectedItemsType4 = [];

      this.selectedItemsType5 = [];
      this.selectedItemsType6 = [];
      this.selectedItemsType7 = [];

      this.selectedItemsType8 = [];
      this.name1 = "";
      this.name2 = "";
      this.name3 = "";
      this.name4 = "";
      this.name5 = "";
      this.name6 = "";
      this.name7 = "";
      this.name8 = "";
      console.log(this.from)
      console.log(this.until)
      this.masterdataService.searchuntil(this.selectedItems, this.until, (this.page - 1).toString(), this.pageSize.toString()).subscribe((data) => {
        this.masterData = data['content'];
        this.totalRecords = data['totalElements'];
        this.totalPages = data['totalPages']
        this.pageSize = data['size']
        console.log(this.masterData.length)

      });
    }
    if (this.from === "" && this.until === "" && this.ta != "") {
      this.selectedItemsType0 = [];
      this.selectedItemsType1 = [];

      this.selectedItemsType2 = [];

      this.selectedItemsType3 = [];

      this.selectedItemsType4 = [];

      this.selectedItemsType5 = [];
      this.selectedItemsType6 = [];
      this.selectedItemsType7 = [];

      this.selectedItemsType8 = [];
      this.name1 = "";
      this.name2 = "";
      this.name3 = "";
      this.name4 = "";
      this.name5 = "";
      this.name6 = "";
      this.name7 = "";
      this.name8 = "";
      var tas = this.ta.split(",").map(Number);
      console.log(tas);
      var ta_typ_ta = new Ta_typ_Ta(this.selectedItems, tas);

      this.masterdataService.searchByTaTypTa(ta_typ_ta, (this.page - 1).toString(), this.pageSize.toString()).subscribe((data) => {
        this.masterData = data['content'];
        this.totalRecords = data['totalElements'];
        this.totalPages = data['totalPages']
        this.pageSize = data['size']
        console.log(this.masterData.length)
      });
    }
  }
 
}






