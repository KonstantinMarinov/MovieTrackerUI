import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages//home/home-page.component';
import { AboutPageComponent } from './pages/about/about-page.component';
import { CatalogPageComponent } from './pages/catalog/catalog-page.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [ 
  { path: 'home', component: HomePageComponent },
  { path: 'catalog', component: CatalogPageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    NavigationComponent,
    CatalogPageComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 


}
