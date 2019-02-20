import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MilleniumFalconComponent } from './millenium-falcon.component';
import { AuthGuard } from '../guards/auth-guard';

const routes: Routes = [
  {
    path: '',
    component: MilleniumFalconComponent,
    canActivate: [AuthGuard],
    data: {
      expectedRole: "resistance",
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class MillenniumFalconRoutingModule {}