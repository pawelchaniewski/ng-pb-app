import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  TestItemComponent
} from './test-item/test-item.component';

@NgModule({
  declarations: [
    TestItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TestItemComponent
  ]
})
export class TestModule { }
