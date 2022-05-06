import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { TemplatesModule } from '../templates/templates.module'
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule, TemplatesModule, FormsModule ],
  exports: [],
})
export class SharedModule {}
