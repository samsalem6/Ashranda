import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { RouterModule, Routes } from '@angular/router';
import { SafePipeModule } from 'safe-pipe';
import {MatStepperModule} from '@angular/material/stepper';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {A11yModule} from '@angular/cdk/a11y';
import { TabsModule } from 'ngx-bootstrap/tabs';
import {MatGridListModule} from '@angular/material/grid-list';
import { LightboxModule } from 'ngx-lightbox';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { SlidersComponent } from './sliders/sliders.component';
import { SliderService } from './sliders/slider.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoryComponent } from './category/category.component';
import { CategoriesService } from './category/categories.service';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PkgDahabyatComponent } from './pkg-dahabyat/pkg-dahabyat.component';
import { HomeComponent } from './home/home.component';
import { DahabyatDetailsComponent } from './pkg-dahabyat/dahabyat-details/dahabyat-details.component';
import { PkgCruisesComponent } from './pkg-cruises/pkg-cruises.component';
import { CruisesDetailsComponent } from './pkg-cruises/cruises-details/cruises-details.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DahabyatService } from './pkg-dahabyat/dahabyat.service';
import { CruisesService } from './pkg-cruises/cruises.service';
import { GalleryComponent } from './gallery/gallery.component';
import { sanitizeHtmlPipe } from './pkg-dahabyat/dahabyat-details/sanitizer-html.pipe';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'dahabyat', component: PkgDahabyatComponent },
  { path: 'cruises', component: PkgCruisesComponent },
  { path: 'contactUs', component: ContactusComponent },
  { path: 'dahabyatdt/:slug', component: DahabyatDetailsComponent },
  { path: 'cruisesDt/:slug', component: CruisesDetailsComponent }


];
@NgModule({
  declarations: [
    AppComponent,
    SlidersComponent,
    CategoryComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    PkgDahabyatComponent,
    DahabyatDetailsComponent,
    PkgCruisesComponent,
    CruisesDetailsComponent,
    ContactusComponent,
    GalleryComponent,
    sanitizeHtmlPipe,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SafePipeModule,
    CdkStepperModule,
    MatStepperModule,
    MatGridListModule,
    A11yModule,
    LightboxModule,
    BrowserAnimationsModule,
    CarouselModule.forRoot(),
    AccordionModule.forRoot(),
    TabsModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [SliderService, CategoriesService, DahabyatService, CruisesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
