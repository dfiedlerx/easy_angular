import { Component, OnInit } from '@angular/core';
import { homeRootRoute } from 'src/app/shared/constants/configs/routes.configs';
@Component({
  selector: 'app-main-template-header',
  templateUrl: './main-template-header.component.html',
  styleUrls: ['./main-template-header.component.scss']
})
export class MainTemplateHeaderComponent implements OnInit {

  homeRootRoute : string = homeRootRoute;

  constructor() { }

  ngOnInit(): void {
  }

}
