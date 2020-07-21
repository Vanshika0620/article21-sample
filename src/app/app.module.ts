import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { LoaderComponent } from './loader/loader.component';
import { HeaderComponent } from './header/header.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { CategoriesComponent } from './front-page/categories/categories.component';
import { FeaturesComponent } from './front-page/features/features.component';
import { MessageComponent } from './front-page/message/message.component';
import { HeroPageComponent } from './front-page/hero-page/hero-page.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LoaderComponent,
    HeaderComponent,
    FrontPageComponent,
    CategoriesComponent,
    FeaturesComponent,
    MessageComponent,
    HeroPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
