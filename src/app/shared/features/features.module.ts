import { NgModule } from "@angular/core";
import { AppBackgroundColor, AppRainbowDirective } from './directives/directives';

@NgModule({
  declarations: [
    AppBackgroundColor,
    AppRainbowDirective
  ],
  imports: [],
  exports: [
    AppBackgroundColor,
    AppRainbowDirective
  ],
  providers: []
})

export class FeaturesModule {
  constructor() { }

}