import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WmTableComponent } from './shared/wm-table/wm-table.component';
import { WbTableIndicatorsComponent } from './shared/wm-table/wb-table-indicators/wb-table-indicators.component';
import { ListMoviesComponent } from './components/list-movies/list-movies.component';
import { WmTableHeaderComponent } from './shared/wm-table/wm-table-header/wm-table-header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WmDashboardComponent } from './components/wm-dashboard/wm-dashboard.component';
import { WmContainerComponent } from './shared/wm-container/wm-container.component';
import { WmMultipleWinnersComponent } from './components/wm-dashboard/wm-multiple-winners/wm-multiple-winners.component';
import { WmTopStudiosWinnersComponent } from './components/wm-dashboard/wm-top-studios-winners/wm-top-studios-winners.component';
import { WmProducersIntervalWinsComponent } from './components/wm-dashboard/wm-producers-interval-wins/wm-producers-interval-wins.component';
import { WmMoviesWinnersComponent } from './components/wm-dashboard/wm-movies-winners/wm-movies-winners.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    WmTableComponent,
    WbTableIndicatorsComponent,
    ListMoviesComponent,
    WmTableHeaderComponent,
    WmDashboardComponent,
    WmContainerComponent,
    WmMultipleWinnersComponent,
    WmTopStudiosWinnersComponent,
    WmProducersIntervalWinsComponent,
    WmMoviesWinnersComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
