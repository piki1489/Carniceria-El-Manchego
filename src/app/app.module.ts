import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SplitterModule } from 'primeng/splitter';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { OverviewComponent } from './overview/overview.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [AppComponent, NavComponent, OverviewComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TagModule,
    SplitterModule,
    CarouselModule,
    ButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
