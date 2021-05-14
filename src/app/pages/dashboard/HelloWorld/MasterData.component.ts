import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Masterdata } from 'src/app/core/models/masterdata.model';
import { QueryOptions } from 'src/app/core/models/query-options';
import { DataService } from 'src/app/core/services/data.service';
import { MasterDataService } from 'src/app/core/services/masterdata.service';




@Component({
  selector: 'app-masterdata',
  templateUrl: './MasterData.component.html',
  styleUrls: ['./MasterData.component.scss']
})
export class MasterDataComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}