import { Job } from "./job.model";
import { JobparamId } from "./jobparamId.model";

export class Jobparam{
    
    job_ParamId:JobparamId;
    value:string;
    nr:number;
    job:Job

    constructor(){
        this.job_ParamId=new JobparamId(0,"");
        this.value="";
        this.nr=null;
        this.job=null;

    }
    setJobparam(id:number,key:string,value:string,nr:number,job:Job){
        this.job_ParamId=new JobparamId(id,key);
        this.value=value;
        this.nr=nr;
        this.job=job;

    }

   
}