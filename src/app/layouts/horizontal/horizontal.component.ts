import { Component, OnInit, AfterViewInit } from '@angular/core';
import { LoaderService } from 'src/app/core/services/loader.service';

@Component({
  selector: 'app-horizontal',
  templateUrl: './horizontal.component.html',
  styleUrls: ['./horizontal.component.scss']
})

/**
 * Horizontal-layout component
 */
export class HorizontalComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
    document.body.setAttribute('data-layout', 'horizontal');
    document.body.setAttribute('data-topbar', 'dark');
    document.body.removeAttribute('data-sidebar');
    document.body.removeAttribute('data-layout-size');
    document.body.removeAttribute('data-keep-enlarged');
    document.body.removeAttribute('data-sidebar-small');
  }

  ngAfterViewInit() {
  }
}
