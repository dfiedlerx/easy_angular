import { Component, OnInit } from '@angular/core';
import { homeRootRoute } from 'src/app/shared/constants/configs/routes.configs';
import { SpecificUserDataOnInit } from 'src/app/shared/extends/specific-user-data-on-init/specific-user-data-on-init';
@Component({
  selector: 'app-main-template-header',
  templateUrl: './main-template-header.component.html',
  styleUrls: ['./main-template-header.component.scss']
})
export class MainTemplateHeaderComponent extends SpecificUserDataOnInit {

  homeRootRoute : string = homeRootRoute;

  override ngOnInit(): void {
  }

}
