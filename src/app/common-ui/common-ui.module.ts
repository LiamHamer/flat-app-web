import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    BrowserAnimationsModule,
    MaterialModule
  ]
})
export class CommonUiModule { }
