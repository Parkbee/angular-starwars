import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'millennium-falcon', loadChildren: './milenium-falcon/milenium-falcon.module#MillenniumFalconModule' },
  { path: 'death-star', loadChildren: './death-star/death-star.module#DeathStarModule' },
  { path: '', component: AppComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {
}