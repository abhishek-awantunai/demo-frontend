import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', redirectTo: 'renderer', pathMatch: 'full' },
  { path: 'renderer', loadChildren: 'src/app/pages/renderer/renderer.module#RendererPageModule' },
  { path: 'home', loadChildren: 'src/app/pages/home/home.module#HomePageModule' },
  { path: 'table-page', loadChildren: 'src/app/pages/table-page/table-page.module#TablePageModule' },
  { path: 'directive-page', loadChildren: 'src/app/pages/directive-page/directivePage.module#DirectivePageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
