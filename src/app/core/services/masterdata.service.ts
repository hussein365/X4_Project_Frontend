import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Masterdata } from '../models/masterdata.model';
import { ResourceService } from './resource.service';

@Injectable({
  providedIn: 'root'
})

export class MasterDataService extends ResourceService<Masterdata> {
  constructor(httpClient: HttpClient) {
    super(
      httpClient,
      'page_bmx_masterdata_ta');
  }
}