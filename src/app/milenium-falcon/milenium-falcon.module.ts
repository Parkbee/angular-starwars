import { MilleniumFalconComponent } from './millenium-falcon.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MillenniumFalconRoutingModule } from './milenium-falcon-routing.module';

@NgModule({
  imports: [MillenniumFalconRoutingModule],
  exports: [MilleniumFalconComponent],
  declarations: [MilleniumFalconComponent],
})
export class MillenniumFalconModule {}
