import { Component, OnInit, ViewChildren, QueryList, Type } from '@angular/core';
import { DecimalPipe } from '@angular/common';

import { Observable } from 'rxjs';


import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {RadioButtonModule} from 'primeng/radiobutton';
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
import { JobId } from 'src/app/core/models/jobId.model';
import { isNumber } from '@ng-bootstrap/ng-bootstrap/util/util';

@Component({
  selector: 'app-masterdatatable',
  templateUrl: './batchjob_parameter.component.html',
  styleUrls: ['./batchjob_parameter.component.scss'],
  providers: [DecimalPipe],
})

/**
 * masterdata component
 */
export class BatchjobParameterComponent implements OnInit {

  ta_typs: Ta_typ[];
  selectedTa_typs: Ta_typ[];
  jobs: Job[] = [];
  hideme: boolean[] = [];
  msaters$: Observable<Job[]>;
  total$: Observable<number>;
  job:Job = new Job();
  result:string="";
  batchjob:string="";
  decimalpoint:string="";
  mode: string;
  searchTerm: string;
  totalRecords: number;
  totalPages: number;
  page = 1;
  pageSize = 10;
  breadCrumbItems: Array<{}>;
  selectedJob:Job= new Job();

  option:string;

  dropdownListConnection: string[] = [];
  selectedItemsConnection: string[] = [];
  dropdownConnectionSettings: IDropdownSettings = {};

  dropdownListId: number[] = [];
  selectedItemsId: number[] = [];
  dropdownIdSettings: IDropdownSettings = {};

  modalReference =null;


  

  
 


  public isCollapsed = true;

  batchjobName: string = "";
  bjDirectory: string = "";
  fileSize: string = "";
  

  


  constructor(private route: ActivatedRoute, private jobService: JobService, private modalService: NgbModal,
    private form: FormBuilder) { }



  async ngOnInit(): Promise<void> {

    this.breadCrumbItems = [
      { label: 'Home' },
      { label: 'Batchjob(Archive)', active: true },
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
    
  
   
  this._fetchData();
    


     




      


  }

  openModal(jobModal: any, mode: string, selectedJob: Job) {
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
    this.selectedJob.curr_time.setHours(this.selectedJob.curr_time.getHours()+6);
    

}
  }



  _fetchData() {
    this.jobService.list(new QueryOptions(this.page - 1, this.pageSize)).subscribe((data) => {
      this.jobs = data['content'];
      this.totalRecords = data['totalElements'];
      this.totalPages = data['totalPages']
      this.pageSize = data['size']
      console.log(this.jobs);
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
    this.jobs = data['content'];
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

 
  
  
  
 
  
  method() {

    if(this.selectedItemsId.length!=0){
      console.log(this.selectedItemsId.length);
      this.jobService.findByIds(this.selectedItemsId,this.pageSize.toString(),(this.page-1).toString()).subscribe((data) => {
        this.jobs = data['content'];
        this.totalRecords = data['totalElements'];
        this.totalPages = data['totalPages']
        this.pageSize = data['size']
        console.log(this.jobs);
      });


    }
    if(this.batchjobName!=""){
      console.log(this.batchjobName);
      this.jobService.findByJobName(this.batchjobName,this.pageSize.toString(),(this.page-1).toString()).subscribe((data) =>{

        this.jobs=[];
 
     this.jobs.push(data[0]);
      });

    }
    if(this.bjDirectory!=""&&this.fileSize==""&&this.selectedItemsConnection.length==0){

      this.jobService.findByFtp(this.bjDirectory,this.pageSize.toString(),(this.page-1).toString()).subscribe((data) =>{
        this.jobs = data['content'];
        this.totalRecords = data['totalElements'];
        this.totalPages = data['totalPages']
        this.pageSize = data['size']
        console.log(this.jobs);

      });

    }
    if(this.bjDirectory==""&&this.fileSize!=""&&this.selectedItemsConnection.length==0){
      this.jobService.findBySize(this.fileSize,this.pageSize.toString(),(this.page-1).toString()).subscribe((data)=>{
        this.jobs = data['content'];
        this.totalRecords = data['totalElements'];
        this.totalPages = data['totalPages']
        this.pageSize = data['size']
        console.log(this.jobs);
      });

    }
    if(this.bjDirectory==""&&this.fileSize==""&&this.selectedItemsConnection.length!=0){
      this.jobService.findByConn(this.selectedItemsConnection,this.pageSize.toString(),(this.page-1).toString()).subscribe((data)=>{
        this.jobs = data['content'];
        this.totalRecords = data['totalElements'];
        this.totalPages = data['totalPages']
        this.pageSize = data['size']
        console.log(this.jobs);
      });
    


    }
    if(this.bjDirectory!=""&&this.fileSize!=""&&this.selectedItemsConnection.length==0){

      this.jobService.findBySizeandFtp(this.fileSize,this.bjDirectory,this.pageSize.toString(),(this.page-1).toString()).subscribe((data)=>{
        this.jobs = data['content'];
        this.totalRecords = data['totalElements'];
        this.totalPages = data['totalPages']
        this.pageSize = data['size']
        console.log(this.jobs);
      });

    }
    if(this.bjDirectory!=""&&this.fileSize==""&&this.selectedItemsConnection.length!=0){
      this.jobService.findByConnandFtp(this.selectedItemsConnection,this.bjDirectory,this.pageSize.toString(),(this.page-1).toString()).subscribe((data)=>{
        this.jobs = data['content'];
        this.totalRecords = data['totalElements'];
        this.totalPages = data['totalPages']
        this.pageSize = data['size']
        console.log(this.jobs);
      });

    }
    if(this.bjDirectory==""&&this.fileSize!=""&&this.selectedItemsConnection.length!=0){
      this.jobService.findByConnandSize(this.selectedItemsConnection,this.fileSize,this.pageSize.toString(),(this.page-1).toString()).subscribe((data)=>{
        this.jobs = data['content'];
        this.totalRecords = data['totalElements'];
        this.totalPages = data['totalPages']
        this.pageSize = data['size']
        console.log(this.jobs);
      });

    
  }
    if(this.bjDirectory!=""&&this.fileSize!=""&&this.selectedItemsConnection.length!=0){
      this.jobService.findByConnandSizeandFtp(this.selectedItemsConnection,this.fileSize,this.bjDirectory,this.pageSize.toString(),(this.page-1).toString()).subscribe((data)=>{
        this.jobs = data['content'];
        this.totalRecords = data['totalElements'];
        this.totalPages = data['totalPages']
        this.pageSize = data['size']
        console.log(this.jobs);
      });

    }
    if(this.result!=""&&this.batchjob==""&&this.decimalpoint==""){
      console.log("resuuult");
      this.jobService.findByEmailresultfile(this.result,this.pageSize.toString(),(this.page-1).toString()).subscribe((data)=>{
        this.jobs = data['content'];
        this.totalRecords = data['totalElements'];
        this.totalPages = data['totalPages']
        this.pageSize = data['size']
        console.log(this.jobs);
      });
    }
    if(this.result==""&&this.batchjob!=""&&this.decimalpoint==""){
      console.log("batchjoob");
     

        this.jobService.findBydaterelativ(this.batchjob,this.pageSize.toString(),(this.page-1).toString()).subscribe((data)=>{
          this.jobs = data['content'];
          this.totalRecords = data['totalElements'];
          this.totalPages = data['totalPages']
          this.pageSize = data['size']
          console.log(this.jobs);
        });
      
      
    }
    if(this.result==""&&this.batchjob==""&&this.decimalpoint!=""){
      console.log("decimalpoint");
      this.jobService.findBydecimalpoint(this.decimalpoint,this.pageSize.toString(),(this.page-1).toString()).subscribe((data)=>{
        this.jobs = data['content'];
        this.totalRecords = data['totalElements'];
        this.totalPages = data['totalPages']
        this.pageSize = data['size']
        console.log(this.jobs);
      });

    }
    if(this.result!=""&&this.batchjob!=""&&this.decimalpoint==""){
 

        this.jobService.findBydaterelativandResult(this.batchjob,this.result,this.pageSize.toString(),(this.page-1).toString()).subscribe((data)=>{
          this.jobs = data['content'];
          this.totalRecords = data['totalElements'];
          this.totalPages = data['totalPages']
          this.pageSize = data['size']
          console.log(this.jobs);
        });
     
   
    }
    if(this.result!=""&&this.batchjob==""&&this.decimalpoint!=""){
      this.jobService.findBydecimalpointandresult(this.decimalpoint,this.result,this.pageSize.toString(),(this.page-1).toString()).subscribe((data)=>{
        this.jobs = data['content'];
        this.totalRecords = data['totalElements'];
        this.totalPages = data['totalPages']
        this.pageSize = data['size']
        console.log(this.jobs);
      });
    }
    if(this.result==""&&this.batchjob!=""&&this.decimalpoint!=""){
      

        this.jobService.findBydaterelativanddecimalpoint(this.batchjob,this.decimalpoint,this.pageSize.toString(),(this.page-1).toString()).subscribe((data)=>{
          this.jobs = data['content'];
          this.totalRecords = data['totalElements'];
          this.totalPages = data['totalPages']
          this.pageSize = data['size']
          console.log(this.jobs);
        });
     
    }
    if(this.result!=""&&this.batchjob!=""&&this.decimalpoint!=""){
      
   
     
        this.jobService.findBydaterelativanddecimalpointandresult(this.batchjob,this.decimalpoint,this.result,this.pageSize.toString(),(this.page-1).toString()).subscribe((data)=>{
          this.jobs = data['content'];
          this.totalRecords = data['totalElements'];
          this.totalPages = data['totalPages']
          this.pageSize = data['size']
          console.log(this.jobs); 
        });

     
    }



  }
resultChangeHandler(event:any){
  this.result=event.target.value;
  console.log(this.result);
}
batchjobChangeHandler(event:any){
  this.batchjob=event.target.value;
  console.log(this.batchjob);
}

decimalpointChangeHandler(event:any){
  this.decimalpoint=event.target.value;
  console.log(this.decimalpoint);
}

deleteJob(jobId :JobId){

    if(confirm("Are you sure to delete this Job ")) {
      
       this.jobService.deleteJob(jobId).subscribe();
       this._fetchData();
    }
  
}

UpdateClient(jobModal: any) {
  
  
  
  if (this.mode === 'Edit') {
    this.selectedJob.curr_time=new Date();
    this.selectedJob.curr_time.setHours(this.selectedJob.curr_time.getHours()+1);
    
    console.log(this.selectedJob);


   
    if(this.selectedJob.daterelativ.toString() !="true"&&this.selectedJob.daterelativ.toString()!="false"){
      confirm("Date relativ must be true or false")
    }
   
    
    
  
    else{
      if(this.selectedJob.dezimalpunkt==null){
        this.selectedJob.dezimalpunkt="Comma";
      }
      
    this.jobService.addOrupdate(this.selectedJob).subscribe(() => {
      this.modalService.dismissAll(jobModal);
      this.modalReference.close();
      this._fetchData();


    
    });
  }
  }
}
  CreateClient(jobModalCreate:any){

 
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
      this.jobService.addOrupdate(this.selectedJob).subscribe(() => {
        this.modalService.dismissAll(jobModalCreate);
        this.modalReference.close();
        this._fetchData();
        
      });
    }
      
    }
  }
    
}
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


}




