import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeathStarComponent } from './death-star.component';
import { AuthGuard } from '../guards/auth-guard';

const routes: Routes = [
  {
    path: '',
    component: DeathStarComponent,
    canActivate: [AuthGuard],
    data: {
      expectedRole: "dark-side",
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class DeathStarRoutingModule {}