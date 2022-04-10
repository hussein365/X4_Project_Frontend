import { Component, OnInit, ViewChildren, QueryList, Type } from '@angular/core';
import { DecimalPipe } from '@angular/common';

import { Observable } from 'rxjs';


import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { QueryOptions } from 'src/app/core/models/query-options';
import { Masterdata } from 'src/app/core/models/masterdata.model';
import { MasterDataService } from 'src/app/core/services/masterdata.service';
import { ActivatedRoute, Router } from '@angular/router';
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
import { Job } from 'src/app/core/models/job.model';
import { JobService } from 'src/app/core/services/job.service';
import { stringify } from 'querystring';
import { Jobparam } from 'src/app/core/models/jobparam.model';
import { delay, min } from 'rxjs/operators';
import { Mandant } from 'src/app/core/models/Mandant.model';

@Component({
  selector: 'app-archive12',
  templateUrl: './archive12.component.html',
  styleUrls: ['./archive12.component.scss']
})
export class Archive12Component implements OnInit {
  
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


  dropdownListId: number[] = [];



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

  selectedJob:Job= new Job();



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
  name_8:string;
  level: number;
  process: string;
  



  modalReference =null;


  constructor(private route: ActivatedRoute, private masterdataService: MasterDataService, private ta_typService: Ta_typService,
    private typeService: TypeService, private form: FormBuilder,private modalService: NgbModal,private jobService: JobService,
    private router:Router) { }



  async ngOnInit(): Promise<void> {

    this.breadCrumbItems = [
      { label: 'Home' },
      { label: 'Archive 12', active: true },
    ];

    this.jobService.getIds().subscribe((data) => this.dropdownListId = data);


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

    for(let item of items){
      this.selectedItems.push(item);

    }
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

  openModal(jobModal: any, mode: string, selectedJob: Job) {

      let ta_type:string=this.prepare_tatyp();
     
      let type0:string=this.prepare_type0();
      let type1:string=this.prepare_type1();
      let type2:string=this.prepare_type2();
      let type3:string=this.prepare_type3();
      let type4:string=this.prepare_type4();
      let type5:string=this.prepare_type5();
      let type6:string=this.prepare_type6();
      let type7:string=this.prepare_type7();
      let type8:string=this.prepare_type8();
   
    this.router.navigate(['/archive12/All'],
    {queryParams: {from: "now-2d", to:"now", var_Mandant:"Strom", var_ta_typ:ta_type, var_type_0:type0, var_Max_Rows:"100",
  var_type_1:type1, var_name_1:this.name1, var_type_2:type2, var_name_2:this.name2, var_type_3:type3, var_name_3:this.name3,
  var_type_4:type4, var_name_4:this.name4, var_type_5:type5, var_name_5:this.name5, var_type_6:type6, var_name_6:this.name6,
  var_type_7:type7, var_name_7:this.name7, var_type_8:type8, var_name_8:this.name8, var_ArchivNr:"12", var_ValueArt:"All",
  var_Offset:"0", var_Process:"2"}});
    this.modalReference =this.modalService.open(jobModal, {
      centered: true,
      windowClass: 'modal-holder',
    });
    
    this.mode = mode;
    this.selectedJob = selectedJob;
    console.log(this.mode)
    console.log(this.selectedJob)
   if(this.mode=="Create"){

    this.selectedJob.id=this.neuId()+1;
    

}
  }

  CreateJob(jobModalCreate:any){

 
    if (this.mode === 'Create'){
     console.log(this.selectedJob);
 
     if(this.selectedJob.id.toString()==""||this.selectedJob.jobId.name==""||this.selectedJob.jobId.mandant==""||this.selectedJob.jobId.grafana_user==""){
       confirm("Alle Felder die mit * gekennzeichnet sind dürfen nicht leer sein");
     }
     else{
       if(isNaN(Number(this.selectedJob.id))){
         confirm("You have to change the Id.Id must be a number.")
       }
       else{
 
       
 
 
    
     if(this.idExistes(Number(this.selectedJob.id))){
       confirm("You have to change the Id.Id already exists. ")
     }
   
     
     
 
 
     else{

      this.selectedJob.curr_time=new Date();
       this.selectedJob.curr_time.setHours(this.selectedJob.curr_time.getHours()+1);
       console.log(this.selectedJob);
       
      let ta_type:string=this.prepare_tatyp();
     
      let type0:string=this.prepare_type0();
      let type1:string=this.prepare_type1();
      let type2:string=this.prepare_type2();
      let type3:string=this.prepare_type3();
      let type4:string=this.prepare_type4();
      let type5:string=this.prepare_type5();
      let type6:string=this.prepare_type6();
      let type7:string=this.prepare_type7();
      let type8:string=this.prepare_type8();


      

     let now:Date=new Date();
     let startdate:Date=new Date();
     startdate.setDate(now.getDate()-2);

     let hour:string;
     let minute:string;
     let day:string;
     let mounth:string;
     let year:string;
     let startDay:string;
     let startMounth:string;
     let startYear:string;
     if(now.getHours()<10){
       hour="0"+now.getHours().toString();
     }
     if(now.getHours()>=10){
       hour=now.getHours().toString();

     }
     if(now.getMinutes()<10){
       minute="0"+now.getMinutes().toString();
     }
     if(now.getMinutes()>=10){
       minute=now.getMinutes().toString();
     }

     if(now.getDate()<10){
       day="0"+now.getDate().toString();
     }

     if(now.getDate()>=10){
       day=now.getDate().toString();
     }

     if((now.getUTCMonth()+1)<10){
       mounth="0"+(now.getUTCMonth()+1).toString();
     }
     if((now.getUTCMonth()+1)>=10){
       mounth=(now.getUTCMonth()+1).toString();
     }

    year=now.getFullYear().toString();

    if(startdate.getDate()<10){
      startDay="0"+startdate.getDate().toString();
    }

    if(startdate.getDate()>=10){
      startDay=startdate.getDate().toString();
    }

    if((startdate.getUTCMonth()+1)<10){
      startMounth="0"+(startdate.getUTCMonth()+1).toString();
    }
    if((startdate.getUTCMonth()+1)>=10){
      startMounth=(startdate.getUTCMonth()+1).toString();
    }
    startYear=startdate.getFullYear().toString();




      console.log("Ta_type ist: "+ta_type);
      console.log("Type0 ist: "+type0);
      console.log("Type1 ist: "+type1);
      console.log("Type2 ist: "+type2);
      console.log("Type3 ist: "+type3);
      console.log("Type4 ist: "+type4);
      console.log("Type5 ist: "+type5);
      console.log("Type6 ist: "+type6);
      console.log("Type7 ist: "+type7);
      console.log("Type8 ist: "+type8);
      console.log(this.name1);
      console.log(this.name2);
      console.log(this.name3);
      console.log(this.selectedJob);

      
      
      
      this.selectedJob.curr_time=new Date();
      this.selectedJob.curr_time.setHours(this.selectedJob.curr_time.getHours()+1);
      console.log(this.selectedJob);
      this.jobService.addOrupdate(this.selectedJob).subscribe(() => {
        this._fetchData();
        
      });

      this.ngOnInit();

      
     
      
    
       
       let jobParam_archive:Jobparam=new Jobparam();
       jobParam_archive.setJobparam(this.selectedJob.id,"archiv","12",22,this.selectedJob);
       this.jobService.addOrupdateJobParam(jobParam_archive).subscribe(() => {
        this._fetchData();
      });

     


       
      let jobParam_end_date_rel:Jobparam=new Jobparam();
      jobParam_end_date_rel.setJobparam(this.selectedJob.id,"end_date_rel","0",26,this.selectedJob);
      this.jobService.addOrupdateJobParam(jobParam_end_date_rel).subscribe(() => {
       this._fetchData();
     });

     
    
     
     let jobParam_end_time:Jobparam=new Jobparam();
      jobParam_end_time.setJobparam(this.selectedJob.id,"end_time",hour+":"+minute,27,this.selectedJob);
      this.jobService.addOrupdateJobParam(jobParam_end_time).subscribe(() => {
       this._fetchData();
     });



      
     let jobParam_end_time_abs:Jobparam=new Jobparam();
      jobParam_end_time_abs.setJobparam(this.selectedJob.id,"end_time_abs",day+"."+mounth+"."
      +year+" "+hour+":"+minute,28,this.selectedJob);
      this.jobService.addOrupdateJobParam(jobParam_end_time_abs).subscribe(() => {
       this._fetchData();
     });


     this.ngOnInit();


      let jobParam_name_1:Jobparam=new Jobparam();
      jobParam_name_1.setJobparam(this.selectedJob.id,"name_1",this.name1,14,this.selectedJob);
      this.jobService.addOrupdateJobParam(jobParam_name_1).subscribe(() => {
       this._fetchData();
     });


     let jobParam_name_2:Jobparam=new Jobparam();
      jobParam_name_2.setJobparam(this.selectedJob.id,"name_2",this.name2,15,this.selectedJob);
      this.jobService.addOrupdateJobParam(jobParam_name_2).subscribe(() => {
       this._fetchData();
     });


     let jobParam_name_3:Jobparam=new Jobparam();
      jobParam_name_3.setJobparam(this.selectedJob.id,"name_3",this.name3,16,this.selectedJob);
      this.jobService.addOrupdateJobParam(jobParam_name_3).subscribe(() => {
       this._fetchData();
     });
     this.ngOnInit();

     let jobParam_name_4:Jobparam=new Jobparam();
      jobParam_name_4.setJobparam(this.selectedJob.id,"name_4",this.name4,17,this.selectedJob);
      this.jobService.addOrupdateJobParam(jobParam_name_4).subscribe(() => {
       this._fetchData();
     });

     let jobParam_name_5:Jobparam=new Jobparam();
      jobParam_name_5.setJobparam(this.selectedJob.id,"name_5",this.name5,18,this.selectedJob);
      this.jobService.addOrupdateJobParam(jobParam_name_5).subscribe(() => {
       this._fetchData();
     });

     
     
     let jobParam_name_6:Jobparam=new Jobparam();
      jobParam_name_6.setJobparam(this.selectedJob.id,"name_6",this.name6,19,this.selectedJob);
      this.jobService.addOrupdateJobParam(jobParam_name_6).subscribe(() => {
       this._fetchData();
     });


     this.ngOnInit();

     let jobParam_name_7:Jobparam=new Jobparam();
      jobParam_name_7.setJobparam(this.selectedJob.id,"name_7",this.name7,20,this.selectedJob);
      this.jobService.addOrupdateJobParam(jobParam_name_7).subscribe(() => {
       this._fetchData();
     });

     
     
     let jobParam_name_8:Jobparam=new Jobparam();
      jobParam_name_8.setJobparam(this.selectedJob.id,"name_8",this.name8,21,this.selectedJob);
      this.jobService.addOrupdateJobParam(jobParam_name_8).subscribe(() => {
       this._fetchData();
     });

     
     let jobParam_start_date_rel:Jobparam=new Jobparam();
      jobParam_start_date_rel.setJobparam(this.selectedJob.id,"start_date_rel","-2",24,this.selectedJob);
      this.jobService.addOrupdateJobParam(jobParam_start_date_rel).subscribe(() => {
       this._fetchData();
     });

     this.ngOnInit();
     
     let jobParam_start_time:Jobparam=new Jobparam();
      jobParam_start_time.setJobparam(this.selectedJob.id,"start_time",hour+":"+minute,25,this.selectedJob);
      this.jobService.addOrupdateJobParam(jobParam_start_time).subscribe(() => {
       this._fetchData();
     });


    
     
     let jobParam_start_time_abs:Jobparam=new Jobparam();
      jobParam_start_time_abs.setJobparam(this.selectedJob.id,"start_time_abs",startDay+"."+startMounth+"."
      +startYear+" "+hour+":"+minute,26,this.selectedJob);
      this.jobService.addOrupdateJobParam(jobParam_start_time_abs).subscribe(() => {
       this._fetchData();
     });

     

     let jobParam_ta_type:Jobparam=new Jobparam();
     jobParam_ta_type.setJobparam(this.selectedJob.id,"ta_type",ta_type,1,this.selectedJob);
     this.jobService.addOrupdateJobParam(jobParam_ta_type).subscribe(() => {
      this._fetchData();
    });

    this.ngOnInit();


     let jobParam_type_0:Jobparam=new Jobparam();
      jobParam_type_0.setJobparam(this.selectedJob.id,"type_0",type0,5,this.selectedJob);
      this.jobService.addOrupdateJobParam(jobParam_type_0).subscribe(() => {
       this._fetchData();
     });
     
     
     let jobParam_type_1:Jobparam=new Jobparam();
      jobParam_type_1.setJobparam(this.selectedJob.id,"type_1",type1,6,this.selectedJob);
      this.jobService.addOrupdateJobParam(jobParam_type_1).subscribe(() => {
       this._fetchData();
     });


    
     let jobParam_type_2:Jobparam=new Jobparam();
      jobParam_type_2.setJobparam(this.selectedJob.id,"type_2",type2,7,this.selectedJob);
      this.jobService.addOrupdateJobParam(jobParam_type_2).subscribe(() => {
       this._fetchData();
     });

     this.ngOnInit();
     
     let jobParam_type_3:Jobparam=new Jobparam();
      jobParam_type_3.setJobparam(this.selectedJob.id,"type_3",type3,8,this.selectedJob);
      this.jobService.addOrupdateJobParam(jobParam_type_3).subscribe(() => {
       this._fetchData();
     });
  

     
     let jobParam_type_4:Jobparam=new Jobparam();
      jobParam_type_4.setJobparam(this.selectedJob.id,"type_4",type4,9,this.selectedJob);
      this.jobService.addOrupdateJobParam(jobParam_type_4).subscribe(() => {
       this._fetchData();
     });

    
     
     let jobParam_type_5:Jobparam=new Jobparam();
      jobParam_type_5.setJobparam(this.selectedJob.id,"type_5",type5,10,this.selectedJob);
      this.jobService.addOrupdateJobParam(jobParam_type_5).subscribe(() => {
       this._fetchData();
     });
     this.ngOnInit();
     
     let jobParam_type_6:Jobparam=new Jobparam();
      jobParam_type_6.setJobparam(this.selectedJob.id,"type_6",type6,11,this.selectedJob);
      this.jobService.addOrupdateJobParam(jobParam_type_6).subscribe(() => {
       this._fetchData();
     });
     
     
     let jobParam_type_7:Jobparam=new Jobparam();
      jobParam_type_7.setJobparam(this.selectedJob.id,"type_7",type7,12,this.selectedJob);
      this.jobService.addOrupdateJobParam(jobParam_type_7).subscribe(() => {
       this._fetchData();
     });
    
     
     let jobParam_type_8:Jobparam=new Jobparam();
      jobParam_type_8.setJobparam(this.selectedJob.id,"type_8",type8,13,this.selectedJob);
      this.jobService.addOrupdateJobParam(jobParam_type_8).subscribe(() => {
       this._fetchData();
     });

     this.ngOnInit();
     
     
     let jobParam_valueart:Jobparam=new Jobparam();
     jobParam_valueart.setJobparam(this.selectedJob.id,"valueart","Value",23,this.selectedJob);
     this.jobService.addOrupdateJobParam(jobParam_valueart).subscribe(() => {
      this.modalService.dismissAll(jobModalCreate);
      this.modalReference.close();
      this._fetchData();
    });


    this.ngOnInit();
    

 let timeout=  window.setTimeout(this.reload,2000);

   


    


     }
       
     }
   }
     
 }
   }
 
 reload():void{
  confirm("Batchjob wurde erfolgreich erstellt.")

  window.location.reload();
   

 }

   prepare_tatyp():string{
    let ta_type:string="";
    if(this.selectedItems.length==this.dropdownList.length){
      ta_type="ALL";
    }
    else{
     
     for(let i=0;i<this.selectedItems.length;i++){
      if(i<this.selectedItems.length-1){
        ta_type=ta_type.concat(this.selectedItems[i].id.toString());
        ta_type=ta_type.concat(",");

      }
     if(i==this.selectedItems.length-1){
      ta_type=ta_type.concat(this.selectedItems[i].id.toString());
      
     }
    
     }
    
    }
    return ta_type;
   }

   prepare_type0():string{
  
    let type0:string="";
    if(this.selectedItemsType0.length==this.dropdownListType0.length){
      type0="ALL";
    }
    else{
     
     for(let i=0;i<this.selectedItemsType0.length-1;i++){
      if(i<this.selectedItemsType0.length-2){
        type0=type0.concat(this.selectedItemsType0[i].type0);
        type0=type0.concat(",");
  
      }
     if(i==this.selectedItemsType0.length-2){
      type0=type0.concat(this.selectedItemsType0[i].type0);
     }
    
     }
    
    }
    return type0;
  
  
  
  
  
  }
  



prepare_type1():string{
  
  let type1:string="";
  if(this.selectedItemsType1.length==this.dropdownListType1.length){
    type1="ALL";
  }
  else{
   
   for(let i=0;i<this.selectedItemsType1.length-1;i++){
    if(i<this.selectedItemsType1.length-2){
      type1=type1.concat(this.selectedItemsType1[i].type1);
      type1=type1.concat(",");

    }
   if(i==this.selectedItemsType1.length-2){
    type1=type1.concat(this.selectedItemsType1[i].type1);
   }
  
   }
  
  }
  return type1;

}




prepare_type2():string{
  
  let type2:string="";
  if(this.selectedItemsType2.length==this.dropdownListType2.length){
    type2="ALL";
  }
  else{
   
   for(let i=0;i<this.selectedItemsType2.length-1;i++){
    if(i<this.selectedItemsType2.length-2){
      type2=type2.concat(this.selectedItemsType2[i].type2);
      type2=type2.concat(",");

    }
   if(i==this.selectedItemsType2.length-2){
    type2=type2.concat(this.selectedItemsType2[i].type2);
   }
  
   }
  
  }
  return type2;

}


prepare_type3():string{
  
  let type3:string="";
  if(this.selectedItemsType3.length==this.dropdownListType3.length){
    type3="ALL";
  }
  else{
   
   for(let i=0;i<this.selectedItemsType3.length-1;i++){
    if(i<this.selectedItemsType3.length-2){
      type3=type3.concat(this.selectedItemsType3[i].type3);
      type3=type3.concat(",");

    }
   if(i==this.selectedItemsType3.length-2){
    type3=type3.concat(this.selectedItemsType3[i].type3);
   }
  
   }
  
  }
  return type3;

}

prepare_type4():string{
  
  let type4:string="";
  if(this.selectedItemsType4.length==this.dropdownListType4.length){
    type4="ALL";
  }
  else{
   
   for(let i=0;i<this.selectedItemsType4.length-1;i++){
    if(i<this.selectedItemsType4.length-2){
      type4=type4.concat(this.selectedItemsType4[i].type4);
      type4=type4.concat(",");

    }
   if(i==this.selectedItemsType4.length-2){
    type4=type4.concat(this.selectedItemsType4[i].type4);
   }
  
   }
  
  }
  return type4;

}

prepare_type5():string{
  
  let type5:string="";
  if(this.selectedItemsType5.length==this.dropdownListType5.length){
    type5="ALL";
  }
  else{
   
   for(let i=0;i<this.selectedItemsType5.length-1;i++){
    if(i<this.selectedItemsType5.length-2){
      type5=type5.concat(this.selectedItemsType5[i].type5);
      type5=type5.concat(",");

    }
   if(i==this.selectedItemsType5.length-2){
    type5=type5.concat(this.selectedItemsType5[i].type5);
   }
  
   }
  
  }
  return type5;

}

prepare_type6():string{
  
  let type6:string="";
  if(this.selectedItemsType6.length==this.dropdownListType6.length){
    type6="ALL";
  }
  else{
   
   for(let i=0;i<this.selectedItemsType6.length-1;i++){
    if(i<this.selectedItemsType6.length-2){
      type6=type6.concat(this.selectedItemsType6[i].type6);
      type6=type6.concat(",");

    }
   if(i==this.selectedItemsType6.length-2){
    type6=type6.concat(this.selectedItemsType6[i].type6);
   }
  
   }
  
  }
  return type6;

}

prepare_type7():string{
  
  let type7:string="";
  if(this.selectedItemsType7.length==this.dropdownListType7.length){
    type7="ALL";
  }
  else{
   
   for(let i=0;i<this.selectedItemsType7.length-1;i++){
    if(i<this.selectedItemsType7.length-2){
      type7=type7.concat(this.selectedItemsType7[i].type7);
      type7=type7.concat(",");

    }
   if(i==this.selectedItemsType7.length-2){
    type7=type7.concat(this.selectedItemsType7[i].type7);
   }
  
   }
  
  }
  return type7;

}



prepare_type8():string{
  
  let type8:string="";
  if(this.selectedItemsType8.length==this.dropdownListType8.length){
    type8="ALL";
  }
  else{
   
   for(let i=0;i<this.selectedItemsType8.length-1;i++){
    if(i<this.selectedItemsType8.length-2){
      type8=type8.concat(this.selectedItemsType8[i].type8);
      type8=type8.concat(",");

    }
   if(i==this.selectedItemsType8.length-2){
    type8=type8.concat(this.selectedItemsType8[i].type8);
   }
  
   }
  
  }
  return type8;

}




   idExistes(id:number):boolean{
    let test:boolean=false;
    for(let i=0;i<this.dropdownListId.length;i++){
      if(this.dropdownListId[i]==id){
        test=true;
        break;
      }
  
    }
    return test;
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


  neuId():number{
    let neu:number;
      let ids:number[];
      ids=this.dropdownListId;
      neu=this.dropdownListId[0];
      for(let i=0;i<this.dropdownListId.length;i++){
        if(this.dropdownListId[i]>neu){
          neu=this.dropdownListId[i]
        }
    
      }
      return neu;
    }


  setBatchjob(){
  }

   

}




