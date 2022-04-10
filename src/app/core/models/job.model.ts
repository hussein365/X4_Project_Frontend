import { JobId } from "./jobId.model";

export class Job{
    
    jobId?:JobId;
    id:number;
    curr_time?:Date;
    status?:string;
    user_mandant_id?:number;
    job_type?:string;
    email?:string;
    ftpdirectory?:string;
    sftpcon?:string;
    emailresultfile?:string;
    maxfilesize?:string;
    daterelativ?:boolean;
    dezimalpunkt?:string;
 
    constructor(){
        this.jobId=new JobId("","","");
        this.id=0;
        this.status="";
        this.ftpdirectory="";
        this.sftpcon="";
        this.email="";
        this.emailresultfile="";
        this.maxfilesize="";
        this.daterelativ=true;
        this.curr_time=new Date();
        this.user_mandant_id=null;
        this.job_type="ARCHIVE";
        this.dezimalpunkt="Comma";




        


    }
}