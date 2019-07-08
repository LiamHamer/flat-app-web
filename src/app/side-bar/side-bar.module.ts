import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarContainerComponent } from './side-bar-container/side-bar-container.component';
import { SideBarNavComponent } from './side-bar-nav/side-bar-nav.component';
import { SideBarContentComponent } from './side-bar-content/side-bar-content.component';
import { CommonUiModule } from '../common-ui/common-ui.module';



@NgModule({
  imports: [
    CommonModule,
    CommonUiModule
  ],
  declarations: [
    SideBarContainerComponent,
    SideBarNavComponent,
    SideBarContentComponent
  ],
  exports: [
    SideBarContainerComponent,
    SideBarNavComponent,
    SideBarContentComponent
  ]
})
export class SideBarModule { }
