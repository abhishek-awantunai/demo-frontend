import { NgModule } from "@angular/core";
import { RendererComponent } from './renderer.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: RendererComponent
  }
];

@NgModule({
  declarations: [
    RendererComponent
  ],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RendererComponent
  ],
})

export class RendererPageModule {
  constructor() { }
}