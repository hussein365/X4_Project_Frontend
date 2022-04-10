import { Component, OnInit, ViewChildren, QueryList, Type } from '@angular/core';
import { DecimalPipe } from '@angular/common';

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
import { Job } from 'src/app/core/models/job.model';
import { JobService } from 'src/app/core/services/job.service';
import { Jobparam } from 'src/app/core/models/jobparam.model';
import { JobparamId } from 'src/app/core/models/jobparamId.model';

@Component({
  selector: 'app-masterdatatable',
  templateUrl: './jobparam.component.html',
  styleUrls: ['./jobparam.component.scss'],
  providers: [DecimalPipe],
})

/**
 * masterdata component
 */
export class JobParamComponent implements OnInit {

  ta_typs: Ta_typ[];
  selectedTa_typs: Ta_typ[];
  jobparams: Jobparam[] = [];
  hideme: boolean[] = [];
  msaters$: Observable<Job[]>;
  total$: Observable<number>;
  
  selectedJobParam: Jobparam=new Jobparam();

  mode: string;
  searchTerm: string;
  totalRecords: number;
  totalPages: number;
  page = 1;
  pageSize = 10;
  breadCrumbItems: Array<{}>;

  

  dropdownListConnection: string[] = [];
  selectedItemsConnection: string[] = [];
  dropdownConnectionSettings: IDropdownSettings = {};

  dropdownListId: number[] = [];
  selectedItemsId: number[] = [];
  dropdownIdSettings: IDropdownSettings = {};

  dropdownListjobResult: string[] = [];
  selectedItemsjobResult: string[] = [];
  dropdownjobResultSettings: IDropdownSettings = {};

  dropdownListDatarelativ: Boolean[] = [];
  selectedItemsDatarelativ: Boolean[] = [];
  dropdownDatarelativSettings: IDropdownSettings = {};

  dropdownListDecimalpoint: string[] = [];
  selectedItemsDecimalpoint: string[] = [];
  dropdownDecimalpointSettings: IDropdownSettings = {};

 jobid:string;


  public isCollapsed = true;

  batchjobName: string = "";
  bjDirectory: string = "";
  fileSize: string = "";
  modalReference =null;
  

  


  constructor(private route: ActivatedRoute, private jobService: JobService,  private modalService: NgbModal,
    private form: FormBuilder) { }



  async ngOnInit(): Promise<void> {

    this.breadCrumbItems = [
      { label: 'Home' },
      { label: 'Batchjob Parameter', active: true },
    ];
    this.jobService.getIds().subscribe((data) => this.dropdownListId = data);
    this.dropdownIdSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'id',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 10,
      allowSearchFilter: true
    };

    this.jobService.getConn().subscribe((data) => this.dropdownListConnection = data);
    this.dropdownConnectionSettings = {
      singleSelection: false,
      idField: 'Connection',
      textField: 'Connection',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 10,
      allowSearchFilter: true

    };
    this.jobService.getResults().subscribe((data) => this.dropdownListjobResult = data);
    this.dropdownjobResultSettings = {
      singleSelection: false,
      idField: 'jobResult',
      textField: 'jobResult',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 10,
      allowSearchFilter: true

    };
    this.jobService.getDeziPunkt().subscribe((data) => this.dropdownListDecimalpoint = data);
    this.dropdownDecimalpointSettings = {
      singleSelection: false,
      idField: 'decimal point',
      textField: 'decimal point',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 10,
      allowSearchFilter: true

    };
   this.jobService.getDateRelativ().subscribe((data) =>this.dropdownListDatarelativ= data);
   console.log(this.dropdownListDatarelativ);
    this.dropdownDatarelativSettings = {
      singleSelection: false,
      idField: 'Data relativ',
      textField: 'Data relativ',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 10,
      allowSearchFilter: true

    };
  this._fetchData();
    


     




      


  }


  openModal(jobParamModal: any, mode: string, selectedJobParam: Jobparam) {
    this.modalReference =this.modalService.open(jobParamModal, {
      centered: true,
      windowClass: 'modal-holder',
    });
    
    this.mode = mode;
    this.selectedJobParam = selectedJobParam;
    console.log(this.mode)
    console.log(this.selectedJobParam)
   if(this.mode=="Create"){

    
      this.selectedJobParam.job_ParamId.id=Number(this.jobid);

    
}
  this.jobService.getJobById(this.jobid).subscribe((data) => this.selectedJobParam.job = data);


  }



  _fetchData() {    
    this.route.queryParams.subscribe(params => {

      this.jobid=params['jobid'];

    })
    this.jobService.getJobparams(this.jobid,this.pageSize.toString(),(this.page-1).toString()).subscribe((data)=>{

      this.jobparams = data['content'];
      this.totalRecords = data['totalElements'];
      this.totalPages = data['totalPages']
      this.pageSize = data['size']
     console.log(this.jobparams.length);
      console.log(this.jobparams);
    
     
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
    this.jobparams = data['content'];
    this.totalRecords = data['totalElements'];
    this.totalPages = data['totalPages']
    this.pageSize = data['size']
  }

  
  onItemSelectConnection(item: any) {
    this.selectedItemsConnection.push(item);

  }
  onSelectAllConnection(items: any) {
    this.selectedItemsConnection.push(items)

  }
  onItemSelectId(item: any) {
    this.selectedItemsId.push(item);

  }
  onSelectAllId(items: any) {
    this.selectedItemsId.push(items)

  }
  onItemSelectJobResult(item: any) {
    this.selectedItemsjobResult.push(item);

  }
  onSelectAllJobResult(items: any) {
    this.selectedItemsjobResult.push(items)

  }
  onItemSelectDataRelativ(item: any) {
    this.selectedItemsDatarelativ.push(item);

  }
  onSelectAllDataRelativ(items: any) {
    this.selectedItemsDatarelativ.push(items)

  }
  onItemSelectDecimalPoint(item: any) {
    this.selectedItemsDecimalpoint.push(item);

  }
  onSelectAllDecimalPoint(items: any) {
    this.selectedItemsDecimalpoint.push(items) 

  }
  
  
 
  
  method() {

  }

  CreateJobParam(jobParamModalCreate:any){

 
    if (this.mode === 'Create'){
     console.log(this.selectedJobParam);
 
     if(this.selectedJobParam.job_ParamId.key==""){
       confirm("Alle Felder die mit * gekennzeichnet sind dürfen nicht leer sein");
     }
     else{
       if(!isNaN(Number(this.selectedJobParam.job_ParamId.key))){
        confirm("Key darf nicht eine Zahl sein");
       }
       else{

       if(isNaN(Number(this.selectedJobParam.nr))){
         confirm("You have to change the No.No must be a number.")
       }
       else{
 
       this.jobService.addOrupdateJobParam(this.selectedJobParam).subscribe(() => {
         this.modalService.dismissAll(jobParamModalCreate);
         this.modalReference.close();
         this._fetchData();
         
       });
     
       
     }
   }
  } 
 }
   }
 

   UpdateJobParam(jobParamModal:any){

 
    if (this.mode === 'Edit'){
     console.log(this.selectedJobParam);
 
       if(isNaN(Number(this.selectedJobParam.nr))){
         confirm("You have to change the No.No must be a number.")
       }
       else{
 
       this.jobService.addOrupdateJobParam(this.selectedJobParam).subscribe(() => {
         this.modalService.dismissAll(jobParamModal);
         this.modalReference.close();
         this._fetchData();
         
       });
     
       
     
   }
     
 }
   }



   
   deleteJobParam(jobParamId :JobparamId){

  if(confirm("Are you sure to delete this JobParam ")) {
    
     this.jobService.deleteJobParam(jobParamId).subscribe();
     this._fetchData();
  }

}



}




