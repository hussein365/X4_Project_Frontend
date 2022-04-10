import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  oid:string;
  name:string;
  type_0:string;
  type_1:string;
  name_1:string;
  type_2:string;
  name_2:string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.oid= params['oid'];
      this.name=params['name'];
      this.type_0=params['type_0'];
      this.type_1=params['type_1'];
      this.name_1=params['name_1'];
      this.type_2=params['type_2'];
      this.name_2=params['name_2'];


  });
} 

  }


