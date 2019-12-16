import { NgModule } from '@angular/core';
import { HomePageComponent } from './home.component';
import { HomePageService } from './home.service';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesModule } from '../../shared/features/features.module';

const routes: Routes = [
  { path: '', component: HomePageComponent }
];

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    FeaturesModule
  ],
  exports: [
    HomePageComponent
  ],
  providers: [
    HomePageService
  ]
})

export class HomePageModule {
  constructor() { }
}