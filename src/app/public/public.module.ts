import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './pages/home/home.component';
import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { AboutComponent } from './pages/about/about.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogFullWidthComponent } from './pages/blog-full-width/blog-full-width.component';
import { BlogLeftSidebarComponent } from './pages/blog-left-sidebar/blog-left-sidebar.component';
import { BlogSingleComponent } from './pages/blog-single/blog-single.component';
import { BlogSingleFullWidthComponent } from './pages/blog-single-full-width/blog-single-full-width.component';
import { BlogSingleLeftSidebarComponent } from './pages/blog-single-left-sidebar/blog-single-left-sidebar.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FaqComponent } from './pages/faq/faq.component';
import { GeneralInsustryComponent } from './pages/general-insustry/general-insustry.component';
import { LogisticsServicesComponent } from './pages/logistics-services/logistics-services.component';
import { MechanicalWorksComponent } from './pages/mechanical-works/mechanical-works.component';
import { OilGasIndustryComponent } from './pages/oil-gas-industry/oil-gas-industry.component';
import { PetroleumRefineryComponent } from './pages/petroleum-refinery/petroleum-refinery.component';
import { PortfolioSingleComponent } from './pages/portfolio-single/portfolio-single.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ProjectsS2Component } from './pages/projects-s2/projects-s2.component';
import { ServicesComponent } from './pages/services/services.component';
import { ServiceSingleComponent } from './pages/service-single/service-single.component';
import { ServicesS2Component } from './pages/services-s2/services-s2.component';
import { TeamComponent } from './pages/team/team.component';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';




@NgModule({
  declarations: [
    PublicComponent,
    HomeComponent,
    AboutComponent,
    BlogComponent,
    BlogFullWidthComponent,
    BlogLeftSidebarComponent,
    BlogSingleComponent,
    BlogSingleFullWidthComponent,
    BlogSingleLeftSidebarComponent,
    ContactComponent,
    FaqComponent,
    GeneralInsustryComponent,
    LogisticsServicesComponent,
    MechanicalWorksComponent,
    OilGasIndustryComponent,
    PetroleumRefineryComponent,
    PortfolioSingleComponent,
    ProjectsComponent,
    ProjectsS2Component,
    ServicesComponent,
    ServiceSingleComponent,
    ServicesS2Component,
    TeamComponent,
    TestimonialsComponent,
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ],
  exports: []

})
export class PublicModule { }
