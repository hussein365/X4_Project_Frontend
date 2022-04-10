import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { QueryOptions } from '../models/query-options';
import { Resource } from '../models/resource';

const apiHost: string = environment.apiHost;

export class ResourceService<T extends Resource> {
  constructor(
      public httpClient: HttpClient,
      private endpoint: string) {}

    public create(item: T): Observable<T> {
      return this.httpClient
        .post<T>(apiHost + `${this.endpoint}`, item)
        .pipe(map(data => data as T));
    }

    public update(item: T): Observable<T> {
      return this.httpClient
        .put<T>(apiHost + `${this.endpoint}`,
          item)
        .pipe(map(data => data as T));
    }

    read(id: number): Observable<T> {
      return this.httpClient
        .get(apiHost + `${this.endpoint}/${id}`)
        .pipe(map((data: any) => data as T));
    }

    list(queryOptions: QueryOptions): Observable<T[]> {
      return this.httpClient
        .get<any>(apiHost + `${this.endpoint}?${queryOptions.toQueryString()}`);
        
    }

    delete(id: number) {
      return this.httpClient
        .delete(apiHost + `${this.endpoint}/${id}`);
    }

  }
