import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { DecimalPipe } from '@angular/common';

import { Observable } from 'rxjs';

import { Client } from '../../core/models/client.model';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ClientService } from './client.service';
import { QueryOptions } from 'src/app/core/models/query-options';

@Component({
  selector: 'app-clienttable',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
  providers: [DecimalPipe],
})

/**
 * Client component
 */
export class ClientComponent implements OnInit {
  // bread crum data
  breadCrumbItems: Array<{}>;
  // Client data
  clientData: Client[];
  public selected: any;
  hideme: boolean[] = [];
  clients$: Observable<Client[]>;
  total$: Observable<number>;

  mode: string;
  searchTerm: string;
  totalRecords: number;
  totalPages: number;
  page = 2;
  pageSize = 10;


  selectedClient: Client;


  public isCollapsed = true;

  constructor(
    private modalService: NgbModal,
    private clientService: ClientService
  ) {}

  ngOnInit() {
    this.breadCrumbItems = [
      { label: 'Home' },
      { label: 'Client', active: true },
    ];
    /**
     * fetch data
     */
    this._fetchData();
  }

  /**
   * fetches the table value
   */
  _fetchData() {
    this.clientService.list(new QueryOptions(this.page - 1, this.pageSize)).subscribe((data) => {
      this.clientData = data['content'];
      this.totalRecords = data['totalElements'];
      this.totalPages = data['totalPages']
      this.pageSize = data['size']
    });
  }

  onPageChange(){
    this._fetchData()
  }


  openModal(clientModal: any, mode: string, selectedClient: Client) {
    this.modalService.open(clientModal, {
      centered: true,
      windowClass: 'modal-holder',
    });
    this.mode = mode;
    this.selectedClient = selectedClient;
  }

  addOrUpdateClient(clientModal: any) {

    if (this.mode === 'Edit') {
      this.clientService.update(this.selectedClient).subscribe(() => {
        this.modalService.dismissAll(clientModal);
        this._fetchData();
      });
    }
    else if (this.mode === 'Create'){
      this.clientService.create(this.selectedClient).subscribe(() => {
        this.modalService.dismissAll(clientModal);
        this._fetchData();
      });
    }
  }

  onPageSizeChange(){

    this.page = 1;
    this._fetchData();
  }

  deleteClient(client: Client){
    this.clientService.delete(client.id).subscribe(() => {
      this._fetchData();
    });
  }
}
