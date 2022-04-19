import { Component, OnInit } from '@angular/core';
import { homeRootRoute } from 'src/app/shared/constants/configs/routes.configs';
@Component({
  selector: 'app-main-template-footer',
  templateUrl: './main-template-footer.component.html',
  styleUrls: ['./main-template-footer.component.scss']
})
export class MainTemplateFooterComponent implements OnInit {

  homeRootRoute : string = homeRootRoute;

  constructor() { }

  ngOnInit(): void {
  }

}
