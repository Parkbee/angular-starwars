import { DeathStarComponent } from './death-star.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DeathStarRoutingModule } from './death-star-routing.module';

@NgModule({
  imports: [DeathStarRoutingModule],
  exports: [DeathStarComponent],
  declarations: [DeathStarComponent],
})
export class DeathStarModule {}
