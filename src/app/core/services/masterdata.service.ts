import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Masterdata } from '../models/masterdata.model';
import { Ta_typ } from '../models/ta_typ.model';
import { Ta_typ_Ta } from '../models/ta_typ_ta';
import { ResourceService } from './resource.service';

@Injectable({
  providedIn: 'root'
})

export class MasterDataService extends ResourceService<Masterdata> {
  api:string='http://localhost:8080/api/page_bmx_masterdata_tabyta_typsandta2';
  api2:string="http://localhost:8080/api/page_bmx_masterdata_tabyta_typsandtas2";
  level11_api:string="http://localhost:8080/api/page_bmx_masterdata_ta_level_11";
  level2_api:string="http://localhost:8080/api/page_bmx_masterdata_ta_level_2";
  level22_api:string="http://localhost:8080/api/page_bmx_masterdata_ta_level_22"
  level3_api:string="http://localhost:8080/api/page_bmx_masterdata_ta_level_3";
  level33_api:string="http://localhost:8080/api/page_bmx_masterdata_ta_level_33";

  level4_api:string="http://localhost:8080/api/page_bmx_masterdata_ta_level_4";
  level44_api:string="http://localhost:8080/api/page_bmx_masterdata_ta_level_44";

  level5_api:string="http://localhost:8080/api/page_bmx_masterdata_ta_level_5";
  level55_api:string="http://localhost:8080/api/page_bmx_masterdata_ta_level_55";

  level6_api:string="http://localhost:8080/api/page_bmx_masterdata_ta_level_6";
  level66_api:string="http://localhost:8080/api/page_bmx_masterdata_ta_level_66";

  level7_api:string="http://localhost:8080/api/page_bmx_masterdata_ta_level_7";
  level77_api:string="http://localhost:8080/api/page_bmx_masterdata_ta_level_77";

  level8_api:string="http://localhost:8080/api/page_bmx_masterdata_ta_level_8";
  level88_api:string="http://localhost:8080/api/page_bmx_masterdata_ta_level_88";

  oid_api:string="http://localhost:8080/api/bmx_masterdata_ta_oid"


  constructor( httpClient: HttpClient) {
    super(
      httpClient,
      'page_bmx_masterdata_ta');
  }

  public searchfromuntil(items: Ta_typ[],from:string,until:string,pageno:string,pagesize:string): Observable<Masterdata> {
     const params=new HttpParams()
    .set('ta_from', from)
    .set('ta_until', until)
    .set('page', pageno)
    .set('size', pagesize);
    return this.httpClient
      .post<Masterdata>(this.api ,items,{params})
      .pipe(map(data => data as Masterdata));
  }
  public searchfrom(items: Ta_typ[],from:string,pageno:string,pagesize:string): Observable<Masterdata> {
    const params=new HttpParams()
   .set('ta_from', from)
   .set('page', pageno)
   .set('size', pagesize);
   return this.httpClient
     .post<Masterdata>(this.api ,items,{params})
     .pipe(map(data => data as Masterdata));
 }
 public searchuntil(items: Ta_typ[],until:string,pageno:string,pagesize:string): Observable<Masterdata> {
  const params=new HttpParams()
 .set('ta_until', until)
 .set('page', pageno)
 .set('size', pagesize);
 return this.httpClient
   .post<Masterdata>(this.api ,items,{params})
   .pipe(map(data => data as Masterdata));
}
public search(items: Ta_typ[],pageno:string,pagesize:string): Observable<Masterdata> {
  const params=new HttpParams()
 
 .set('page', pageno)
 .set('size', pagesize);
 return this.httpClient
   .post<Masterdata>(this.api ,items,{params})
   .pipe(map(data => data as Masterdata));
}
public searchByTaTypTa(item: Ta_typ_Ta,pageno:string,pagesize:string): Observable<Masterdata> {
  const params=new HttpParams()
 
 .set('page', pageno)
 .set('size', pagesize);
 return this.httpClient
   .post<Masterdata>(this.api2 ,item,{params})
   .pipe(map(data => data as Masterdata));
}


public searchfromuntil2(items: Ta_typ[],from:string,until:string,pagesize:string,pageno:string): Observable<Masterdata> {
  if(from===""){
    from=null;

  }
  if(until===""){
    until=null;
  }
  const params=new HttpParams()
 .set('ta_from', from)
 .set('ta_until', until)
 .set('size', pagesize)
 .set('page', pageno);
 return this.httpClient
   .post<Masterdata>(this.api ,items,{params})
   .pipe(map(data => data as Masterdata));
}
public findByLevel11(type_0:string,type_1:string,name_1:string,pageSize:string,pageno:string):Observable<Masterdata>{

  const params=new HttpParams()
  .set('type_0',type_0)
  .set('type_1',type_1)
  .set('name_1',name_1)
  .set('size',pageSize)
  .set('page',pageno);
  return this.httpClient
  .get<Masterdata>(this.level11_api,{params})
  .pipe(map(data=>data as Masterdata));
} 


  public findByLevel2(type_0:string,type_1:string,name_1:string,pageSize:string,pageno:string):Observable<Masterdata>{

    const params=new HttpParams()
    .set('type_0',type_0)
    .set('type_1',type_1)
    .set('name_1',name_1)
    .set('size',pageSize)
    .set('page',pageno);
    return this.httpClient
    .get<Masterdata>(this.level2_api,{params})
    .pipe(map(data=>data as Masterdata));
  } 
  public findByLevel22(type_0:string,type_1:string,name_1:string,type_2:string,name_2:string,pageSize:string,pageno:string):Observable<Masterdata>{

    const params=new HttpParams()
    .set('type_0',type_0)
    .set('type_1',type_1)
    .set('name_1',name_1)
    .set('type_2',type_2)
    .set('name_2',name_2)
    .set('size',pageSize)
    .set('page',pageno);
    return this.httpClient
    .get<Masterdata>(this.level22_api,{params})
    .pipe(map(data=>data as Masterdata));
  } 
  public findByLevel3(type_0:string,type_1:string,name_1:string,type_2:string,name_2:string,pageSize:string,pageno:string):Observable<Masterdata>{

    const params=new HttpParams()
    .set('type_0',type_0)
    .set('type_1',type_1)
    .set('name_1',name_1)
    .set('type_2',type_2)
    .set('name_2',name_2)
    .set('size',pageSize)
    .set('page',pageno);
    return this.httpClient
    .get<Masterdata>(this.level3_api,{params})
    .pipe(map(data=>data as Masterdata));
  } 
  public findByLevel33(type_0:string,type_1:string,name_1:string,type_2:string,name_2:string,type_3:string,name_3:string,pageSize:string,pageno:string):Observable<Masterdata>{

    const params=new HttpParams()
    .set('type_0',type_0)
    .set('type_1',type_1)
    .set('name_1',name_1)
    .set('type_2',type_2)
    .set('name_2',name_2)
    .set('type_3',type_3)
    .set('name_3',name_3)
    .set('size',pageSize)
    .set('page',pageno);
    return this.httpClient
    .get<Masterdata>(this.level33_api,{params})
    .pipe(map(data=>data as Masterdata));
  }
  public findByLevel4(type_0:string,type_1:string,name_1:string,type_2:string,name_2:string,type_3:string,name_3:string,pageSize:string,pageno:string):Observable<Masterdata>{

    const params=new HttpParams()
    .set('type_0',type_0)
    .set('type_1',type_1)
    .set('name_1',name_1)
    .set('type_2',type_2)
    .set('name_2',name_2)
    .set('type_3',type_3)
    .set('name_3',name_3)
    .set('size',pageSize)
    .set('page',pageno);
    return this.httpClient
    .get<Masterdata>(this.level4_api,{params})
    .pipe(map(data=>data as Masterdata));
  }
  public findByLevel44(type_0:string,type_1:string,name_1:string,type_2:string,name_2:string,type_3:string,name_3:string,type_4:string,name_4:string,pageSize:string,pageno:string):Observable<Masterdata>{

    const params=new HttpParams()
    .set('type_0',type_0)
    .set('type_1',type_1)
    .set('name_1',name_1)
    .set('type_2',type_2)
    .set('name_2',name_2)
    .set('type_3',type_3)
    .set('name_3',name_3)
    .set('type_4',type_4)
    .set('name_4',name_4)
    .set('size',pageSize)
    .set('page',pageno);
    return this.httpClient
    .get<Masterdata>(this.level44_api,{params})
    .pipe(map(data=>data as Masterdata));
  }
  public findByLevel5(type_0:string,type_1:string,name_1:string,type_2:string,name_2:string,type_3:string,name_3:string,type_4:string,name_4:string,pageSize:string,pageno:string):Observable<Masterdata>{

    const params=new HttpParams()
    .set('type_0',type_0)
    .set('type_1',type_1)
    .set('name_1',name_1)
    .set('type_2',type_2)
    .set('name_2',name_2)
    .set('type_3',type_3)
    .set('name_3',name_3)
    .set('type_4',type_4)
    .set('name_4',name_4)
    .set('size',pageSize)
    .set('page',pageno);
    return this.httpClient
    .get<Masterdata>(this.level5_api,{params})
    .pipe(map(data=>data as Masterdata));
  }
  public findByLevel55(type_0:string,type_1:string,name_1:string,type_2:string,name_2:string,type_3:string,name_3:string,type_4:string,name_4:string,type_5:string,name_5:string,pageSize:string,pageno:string):Observable<Masterdata>{

    const params=new HttpParams()
    .set('type_0',type_0)
    .set('type_1',type_1)
    .set('name_1',name_1)
    .set('type_2',type_2)
    .set('name_2',name_2)
    .set('type_3',type_3)
    .set('name_3',name_3)
    .set('type_4',type_4)
    .set('name_4',name_4)
    .set('type_5',type_5)
    .set('name_5',name_5)
    .set('size',pageSize)
    .set('page',pageno);
    return this.httpClient
    .get<Masterdata>(this.level55_api,{params})
    .pipe(map(data=>data as Masterdata));
  }
  public findByLevel6(type_0:string,type_1:string,name_1:string,type_2:string,name_2:string,type_3:string,name_3:string,type_4:string,name_4:string,type_5:string,name_5:string,pageSize:string,pageno:string):Observable<Masterdata>{

    const params=new HttpParams()
    .set('type_0',type_0)
    .set('type_1',type_1)
    .set('name_1',name_1)
    .set('type_2',type_2)
    .set('name_2',name_2)
    .set('type_3',type_3)
    .set('name_3',name_3)
    .set('type_4',type_4)
    .set('name_4',name_4)
    .set('type_5',type_5)
    .set('name_5',name_5)
    .set('size',pageSize)
    .set('page',pageno);
    return this.httpClient
    .get<Masterdata>(this.level6_api,{params})
    .pipe(map(data=>data as Masterdata));
  }
  
  public findByLevel66(type_0:string,type_1:string,name_1:string,type_2:string,name_2:string,type_3:string,name_3:string,type_4:string,name_4:string,type_5:string,name_5:string,type_6:string,name_6:string,pageSize:string,pageno:string):Observable<Masterdata>{

    const params=new HttpParams()
    .set('type_0',type_0)
    .set('type_1',type_1)
    .set('name_1',name_1)
    .set('type_2',type_2)
    .set('name_2',name_2)
    .set('type_3',type_3)
    .set('name_3',name_3)
    .set('type_4',type_4)
    .set('name_4',name_4)
    .set('type_5',type_5)
    .set('name_5',name_5)
    .set('type_6',type_6)
    .set('name_6',name_6)
    .set('size',pageSize)
    .set('page',pageno);
    return this.httpClient
    .get<Masterdata>(this.level66_api,{params})
    .pipe(map(data=>data as Masterdata));
  }

  public findByLevel7(type_0:string,type_1:string,name_1:string,type_2:string,name_2:string,type_3:string,name_3:string,type_4:string,name_4:string,type_5:string,name_5:string,type_6:string,name_6:string,pageSize:string,pageno:string):Observable<Masterdata>{

    const params=new HttpParams()
    .set('type_0',type_0)
    .set('type_1',type_1)
    .set('name_1',name_1)
    .set('type_2',type_2)
    .set('name_2',name_2)
    .set('type_3',type_3)
    .set('name_3',name_3)
    .set('type_4',type_4)
    .set('name_4',name_4)
    .set('type_5',type_5)
    .set('name_5',name_5)
    .set('type_6',type_6)
    .set('name_6',name_6)
    .set('size',pageSize)
    .set('page',pageno);
    return this.httpClient
    .get<Masterdata>(this.level7_api,{params})
    .pipe(map(data=>data as Masterdata));
  }
  public findByLevel77(type_0:string,type_1:string,name_1:string,type_2:string,name_2:string,type_3:string,name_3:string,type_4:string,name_4:string,type_5:string,name_5:string,type_6:string,name_6:string,type_7:string,name_7:string,pageSize:string,pageno:string):Observable<Masterdata>{

    const params=new HttpParams()
    .set('type_0',type_0)
    .set('type_1',type_1)
    .set('name_1',name_1)
    .set('type_2',type_2)
    .set('name_2',name_2)
    .set('type_3',type_3)
    .set('name_3',name_3)
    .set('type_4',type_4)
    .set('name_4',name_4)
    .set('type_5',type_5)
    .set('name_5',name_5)
    .set('type_6',type_6)
    .set('name_6',name_6)
    .set('type_7',type_7)
    .set('name_7',name_7)
    .set('size',pageSize)
    .set('page',pageno);
    return this.httpClient
    .get<Masterdata>(this.level77_api,{params})
    .pipe(map(data=>data as Masterdata));
  }
  public findByLevel88(type_0:string,type_1:string,name_1:string,type_2:string,name_2:string,type_3:string,name_3:string,type_4:string,name_4:string,type_5:string,name_5:string,type_6:string,name_6:string,type_7:string,name_7:string,type_8:string,name_8:string,pageSize:string,pageno:string):Observable<Masterdata>{

    const params=new HttpParams()
    .set('type_0',type_0)
    .set('type_1',type_1)
    .set('name_1',name_1)
    .set('type_2',type_2)
    .set('name_2',name_2)
    .set('type_3',type_3)
    .set('name_3',name_3)
    .set('type_4',type_4)
    .set('name_4',name_4)
    .set('type_5',type_5)
    .set('name_5',name_5)
    .set('type_6',type_6)
    .set('name_6',name_6)
    .set('type_7',type_7)
    .set('name_7',name_7)
    .set('type_8',type_8)
    .set('name_8',name_8)
    .set('size',pageSize)
    .set('page',pageno);
    return this.httpClient
    .get<Masterdata>(this.level88_api,{params})
    .pipe(map(data=>data as Masterdata));
  }
  public findByLevel8(type_0:string,type_1:string,name_1:string,type_2:string,name_2:string,type_3:string,name_3:string,type_4:string,name_4:string,type_5:string,name_5:string,type_6:string,name_6:string,type_7:string,name_7:string,pageSize:string,pageno:string):Observable<Masterdata>{

    const params=new HttpParams()
    .set('type_0',type_0)
    .set('type_1',type_1)
    .set('name_1',name_1)
    .set('type_2',type_2)
    .set('name_2',name_2)
    .set('type_3',type_3)
    .set('name_3',name_3)
    .set('type_4',type_4)
    .set('name_4',name_4)
    .set('type_5',type_5)
    .set('name_5',name_5)
    .set('type_6',type_6)
    .set('name_6',name_6)
    .set('type_7',type_7)
    .set('name_7',name_7)
    .set('size',pageSize)
    .set('page',pageno);
    return this.httpClient
    .get<Masterdata>(this.level8_api,{params})
    .pipe(map(data=>data as Masterdata));
  }
  public findByoid(oid:string):Observable<Masterdata>{
    const params=new HttpParams()
    .set('oid',oid);
    return this.httpClient
    .get<Masterdata>(this.oid_api,{params})
    .pipe(map(data=>data as Masterdata));
  }


  }

