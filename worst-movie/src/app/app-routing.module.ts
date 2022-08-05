import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListMoviesComponent } from './components/list-movies/list-movies.component';
import { WmDashboardComponent } from './components/wm-dashboard/wm-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'dashboard',
        component: WmDashboardComponent,
      },
      {
        path: 'movies',
        component: ListMoviesComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
