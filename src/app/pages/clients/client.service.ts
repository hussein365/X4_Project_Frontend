import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from 'src/app/core/models/client.model';
import { ResourceService } from 'src/app/core/services/resource.service';

@Injectable({
  providedIn: 'root'
})
export class ClientService extends ResourceService<Client> {
  constructor(httpClient: HttpClient) {
    super(
      httpClient,
      'cra/api/clients');
  }
}
