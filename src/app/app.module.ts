import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ChartModule } from 'angular-highcharts';

// Services
import { DataService } from './data.service';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { TableComponent } from './table/table.component';
import { ChartsComponent } from './charts/charts.component';
import { CompetitionsComponent } from './competitions/competitions.component';
import { RulesComponent } from './rules/rules.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HistoryComponent } from './history/history.component';
import { ProfileComponent } from './profile/profile.component';
import { CupComponent } from './cup/cup.component';
import { ChampionsComponent } from './champions/champions.component';
import { UefaComponent } from './uefa/uefa.component';
import { NewsComponent } from './news/news.component';
import { SupercupEuropaComponent } from './supercup-europa/supercup-europa.component';
import { SupercupSpainComponent } from './supercup-spain/supercup-spain.component';

// Routes
const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'table', component: TableComponent },
  { path: 'charts', component: ChartsComponent },
  { path: 'competitions', component: CompetitionsComponent },
  { path: 'cup', component: CupComponent },
  { path: 'champions', component: ChampionsComponent },
  { path: 'uefa', component: UefaComponent },
  { path: 'news', component: NewsComponent },
  { path: 'rules', component: RulesComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'profile/:id', component: ProfileComponent },
  { path: 'supercup-europa', component: SupercupEuropaComponent },
  { path: 'supercup-spain', component: SupercupSpainComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' } //404 future
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    HomeComponent,
    HistoryComponent,
    RulesComponent,
    TableComponent,
    ChartsComponent,
    CompetitionsComponent,
    GalleryComponent,
    ProfileComponent,
    CupComponent,
    ChampionsComponent,
    UefaComponent,
    NewsComponent,
    SupercupEuropaComponent,
    SupercupSpainComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ChartModule,
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }