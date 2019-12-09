import { NgModule } from '@angular/core';
import { DemoComponent } from './demo.compoennt';
import { DemoService } from './demo.service';

@NgModule({
  declarations: [
    DemoComponent
  ],
  imports: [
    DemoComponent
  ],
  exports: [],
  providers: [
    DemoService
  ]
})

export class DemoModule {
  constructor() { }
}