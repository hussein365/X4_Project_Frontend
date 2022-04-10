
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ta_typ } from '../models/ta_typ.model';
import { Job } from '../models/job.model';
import { ResourceService } from './resource.service';
import { Jobparam } from '../models/jobparam.model';
import { map } from 'rxjs/operators';
import { identifierModuleUrl } from '@angular/compiler';
import { JobId } from '../models/jobId.model';
import { JobparamId } from '../models/jobparamId.model';



@Injectable({
  providedIn: 'root'
})
export class JobService extends ResourceService<Job> {

  api:string='http://localhost:8080/api/job';

  api1:string='http://localhost:8080/api/allIds';
  api2:string='http://localhost:8080/api/allConn';

  api3:string='http://localhost:8080/api/allResults';

  api4:string='http://localhost:8080/api/allDeziPunkt';
  api5:string='http://localhost:8080/api/allDateRelativ';

  api6:string='http://localhost:8080/api/job_paramByJob';
  api7:string='http://localhost:8080/api/page_job_by_ids';
  api8:string='http://localhost:8080/api/page_find_by_batchjob_name';
  api9:string='http://localhost:8080/api/page_find_by_ftp_directory';
  api10:string='http://localhost:8080/api/page_find_by_max_file_size';
  api11:string='http://localhost:8080/api/page_find_by_sftp_cons';
  api12:string='http://localhost:8080/api/page_find_by_ftp_directory_and_max_file_size';
  api13:string='http://localhost:8080/api/page_find_by_ftp_directory_and_conns';
  api14:string='http://localhost:8080/api/page_find_by_max_file_size_and_conns';
  api15:string='http://localhost:8080/api/page_find_by_max_file_size_and_ftp_directory_and_conns';
  api16:string='http://localhost:8080/api/page_find_by_emailresultfile';
  api17:string='http://localhost:8080/api/page_find_by_daterelativ';
  api18:string='http://localhost:8080/api/page_find_by_dezimalpunkt';
  api19:string='http://localhost:8080/api/page_find_by_emailresultfile_and_daterelativ';
  api20:string='http://localhost:8080/api/page_find_by_emailresultfile_and_dezimalpunkt';
  api21:string='http://localhost:8080/api/page_find_by_dezimalpunkt_and_daterelativ';
  api22:string='http://localhost:8080/api/page_find_by_emailresultfile_and_daterelativ_and_dezimalpunkt';

  api23:string='http://localhost:8080/api/addorupdateJob'

  deleteApi:string = 'http://localhost:8080/api/deleteJobByJobId2';

  jobById: string='http://localhost:8080/api/jobById'

  addorupdatejobparam: string='http://localhost:8080/api/addorupdateJobParam';
  deletejobparambyjobid: string='http://localhost:8080/api/deleteJobParamByJobId';
  addjobparamfirstjob: string='http://localhost:8080/api/addJobParamFirstJob';


  constructor( httpClient: HttpClient) {
    super(
      httpClient,
      'job');
  }


  

  getIds():Observable<number[]> {
    return   this.httpClient.get<number[]>(this.api1);
}
getConn():Observable<string[]> {
  return   this.httpClient.get<string[]>(this.api2);
}
getResults():Observable<string[]> {
  return   this.httpClient.get<string[]>(this.api3);
}
getDeziPunkt():Observable<string[]> {
  return   this.httpClient.get<string[]>(this.api4);
}

getDateRelativ():Observable<Boolean[]> {
  return   this.httpClient.get<Boolean[]>(this.api5);
}

getJobs():Observable<Job[]>{
  return this.httpClient.get<Job[]>(this.api);
}

getJobById(jobid:string):Observable<Job>{
  const params=new HttpParams()
  .set('id',jobid);
  return this.httpClient
  .get<Job>(this.jobById,{params})
  .pipe(map(data=>data as Job));
}

public getJobparams(jobid:string,pageSize:string,pageno:string):Observable<Jobparam>{

  const params=new HttpParams()
  .set('jobid',jobid)
  .set('size',pageSize)
  .set('page',pageno);
  return this.httpClient
  .get<Jobparam>(this.api6,{params})
  .pipe(map(data=>data as Jobparam));
} 

public findByIds(ids:number[],pageSize:string,pageno:string):Observable<Job>{

  const params=new HttpParams()
  .set('size',pageSize)
  .set('page',pageno);

  return this.httpClient
  .post<Job>(this.api7 ,ids,{params})
  .pipe(map(data => data as Job));;


  

}
public findByJobName(name:string,pageSize:string,pageno:string):Observable<Job[]>{

  const params=new HttpParams()
  .set('name',name)
  .set('size',pageSize)
  .set('page',pageno);

  return this.httpClient
  .get<Job[]>(this.api8,{params})
  .pipe(map(data => data as Job[]));;

}
public findByFtp(ftp_directory:string,pageSize:string,pageno:string):Observable<Job>{

  const params=new HttpParams()
  .set('ftp_directory',ftp_directory)
  .set('size',pageSize)
  .set('page',pageno);

  return this.httpClient
  .get<Job>(this.api9,{params})
  .pipe(map(data => data as Job));;

}
public findBySize(size:string,pageSize:string,pageno:string):Observable<Job>{

  const params=new HttpParams()
  .set('max_file_size',size)
  .set('size',pageSize)
  .set('page',pageno);

  return this.httpClient
  .get<Job>(this.api10,{params})
  .pipe(map(data => data as Job));;

}


public findByConn(conn:string[],pageSize:string,pageno:string):Observable<Job>{

  const params=new HttpParams()
  .set('size',pageSize)
  .set('page',pageno);

  return this.httpClient
  .post<Job>(this.api11,conn,{params})
  .pipe(map(data => data as Job));;

}
public findBySizeandFtp(size:string,ftp:string,pageSize:string,pageno:string):Observable<Job>{

  const params=new HttpParams()
  .set('max_file_size',size)
  .set('ftp_directory',ftp)
  .set('size',pageSize)
  .set('page',pageno);

  return this.httpClient
  .get<Job>(this.api12,{params})
  .pipe(map(data => data as Job));;

}

public findByConnandFtp(conn:string[],ftp:string,pageSize:string,pageno:string):Observable<Job>{

  const params=new HttpParams()
  .set('ftp_directory',ftp)
  .set('size',pageSize)
  .set('page',pageno);

  return this.httpClient
  .post<Job>(this.api13,conn,{params})
  .pipe(map(data => data as Job));;

}

public findByConnandSize(conn:string[],size:string,pageSize:string,pageno:string):Observable<Job>{

  const params=new HttpParams()
  .set('max_file_size',size)
  .set('size',pageSize)
  .set('page',pageno);

  return this.httpClient
  .post<Job>(this.api14,conn,{params})
  .pipe(map(data => data as Job));;

}

public findByConnandSizeandFtp(conn:string[],size:string,ftp:string,pageSize:string,pageno:string):Observable<Job>{

  const params=new HttpParams()
  .set('ftp_directory',ftp)
  .set('max_file_size',size)
  .set('size',pageSize)
  .set('page',pageno);

  return this.httpClient
  .post<Job>(this.api15,conn,{params})
  .pipe(map(data => data as Job));;

}

public findByEmailresultfile(emailresultfile:string,pageSize:string,pageno:string):Observable<Job>{

  const params=new HttpParams()
  .set('emailresultfile',emailresultfile)
  .set('size',pageSize)
  .set('page',pageno);

  return this.httpClient
  .get<Job>(this.api16,{params})
  .pipe(map(data => data as Job));;

}
public findBydaterelativ(daterelativ:string,pageSize:string,pageno:string):Observable<Job>{

  const params=new HttpParams()

  .set('daterelativ',daterelativ)
  .set('size',pageSize)
  .set('page',pageno);

  return this.httpClient
  .get<Job>(this.api17,{params})
  .pipe(map(data => data as Job));;

}

public findBydecimalpoint(decimalpoint:string,pageSize:string,pageno:string):Observable<Job>{

  const params=new HttpParams()
  .set('dezimalpunkt',decimalpoint)
  .set('size',pageSize)
  .set('page',pageno);

  return this.httpClient
  .get<Job>(this.api18,{params})
  .pipe(map(data => data as Job));;

}

public findBydaterelativandResult(daterelativ:string,result:string,pageSize:string,pageno:string):Observable<Job>{

  const params=new HttpParams()
  .set('daterelativ',daterelativ)
  .set('emailresultfile',result)
  .set('size',pageSize)
  .set('page',pageno);

  return this.httpClient
  .get<Job>(this.api19,{params})
  .pipe(map(data => data as Job));;
}

public findBydecimalpointandresult(decimalpoint:string,result:string,pageSize:string,pageno:string):Observable<Job>{

  const params=new HttpParams()
  .set('emailresultfile',result)
  .set('dezimalpunkt',decimalpoint)
  .set('size',pageSize)
  .set('page',pageno);

  return this.httpClient
  .get<Job>(this.api20,{params})
  .pipe(map(data => data as Job));;

}

public findBydaterelativanddecimalpoint(daterelativ:string,decimalpoint:string,pageSize:string,pageno:string):Observable<Job>{

  const params=new HttpParams()
  .set('daterelativ',daterelativ)
  .set('dezimalpunkt',decimalpoint)
  .set('size',pageSize)
  .set('page',pageno);

  return this.httpClient
  .get<Job>(this.api21,{params})
  .pipe(map(data => data as Job));;
}

public findBydaterelativanddecimalpointandresult(daterelativ:string,decimalpoint:string,result:string,pageSize:string,pageno:string):Observable<Job>{

  const params=new HttpParams()
  .set('daterelativ',daterelativ)
  .set('emailresultfile',result)
  .set('dezimalpunkt',decimalpoint)
  .set('size',pageSize)
  .set('page',pageno);

  return this.httpClient
  .get<Job>(this.api22,{params})
  .pipe(map(data => data as Job));;
}

  public deleteJob (jobId:JobId){    
    return this.httpClient
    .post(this.deleteApi,jobId)

  }

  public addOrupdate(job:Job):Observable<Job>{

    return this.httpClient
    .post<Job>(this.api23, job)
    .pipe(map(data => data as Job));
  }

  public addOrupdateJobParam(jobparam:Jobparam):Observable<Jobparam>{

    return this.httpClient
    .post<Jobparam>(this.addorupdatejobparam, jobparam)
    .pipe(map(data => data as Jobparam));
  }

  public deleteJobParam (jobParamId:JobparamId){    
    return this.httpClient
    .post(this.deletejobparambyjobid,jobParamId)

  }

  public addJobParamfirstJob(jobparam:Jobparam):Observable<Jobparam>{

    return this.httpClient
    .post<Jobparam>(this.addjobparamfirstjob, jobparam)
    .pipe(map(data => data as Jobparam));
  }


}