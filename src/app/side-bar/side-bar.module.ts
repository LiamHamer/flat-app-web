import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarContainerComponent } from './side-bar-container/side-bar-container.component';
import { SideBarNavComponent } from './side-bar-nav/side-bar-nav.component';
import { SideBarContentComponent } from './side-bar-content/side-bar-content.component';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SideBarContainerComponent,
    SideBarNavComponent,
    SideBarContentComponent
  ],
  exports: [
    SideBarContainerComponent
  ]
})
export class SideBarModule { }
