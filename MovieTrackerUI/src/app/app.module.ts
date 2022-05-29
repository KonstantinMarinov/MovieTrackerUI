import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CatalogPageComponent } from './catalog-page/catalog-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavigationComponent,
    CatalogPageComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
