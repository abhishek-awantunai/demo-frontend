import { NgModule } from "@angular/core";
import { DirectivePageComponent } from './directivePage.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: DirectivePageComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    DirectivePageComponent
  ],
  declarations: [
    DirectivePageComponent
  ],
  providers: []
})

export class DirectivePageModule {
  constructor() { }
}