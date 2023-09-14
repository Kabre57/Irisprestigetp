import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
import { HomeComponent } from './pages/home/home.component';
import { LogisticsServicesComponent } from './pages/logistics-services/logistics-services.component';
import { MechanicalWorksComponent } from './pages/mechanical-works/mechanical-works.component';
import { OilGasIndustryComponent } from './pages/oil-gas-industry/oil-gas-industry.component';
import { PetroleumRefineryComponent } from './pages/petroleum-refinery/petroleum-refinery.component';
import { PortfolioSingleComponent } from './pages/portfolio-single/portfolio-single.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ProjectsS2Component } from './pages/projects-s2/projects-s2.component';
import { ServiceSingleComponent } from './pages/service-single/service-single.component';
import { ServicesComponent } from './pages/services/services.component';
import { ServicesS2Component } from './pages/services-s2/services-s2.component';
import { TeamComponent } from './pages/team/team.component';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog-full-width', component: BlogFullWidthComponent },
  { path: 'blog-left-sidebar', component: BlogLeftSidebarComponent },
  { path: 'blog-single', component: BlogSingleComponent },
  { path: 'blog-single-full-width', component: BlogSingleFullWidthComponent },
  { path: 'blog-single-left-sidebar', component: BlogSingleLeftSidebarComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'general-insustry', component: GeneralInsustryComponent },
  { path: 'logistics-services', component: LogisticsServicesComponent },
  { path: 'mechanical-works', component: MechanicalWorksComponent},
  { path: 'oil-gas-industry', component: OilGasIndustryComponent},
  { path: 'petroleum-refinery', component: PetroleumRefineryComponent },
  { path: 'portfolio-single-insustry', component: PortfolioSingleComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'projects-s2', component: ProjectsS2Component },
  { path: 'service-single', component: ServiceSingleComponent},
  { path: 'services', component: ServicesComponent},
  { path: 'services-s2', component: ServicesS2Component },
  { path: 'team', component: TeamComponent },
  { path: 'testimonials', component: TestimonialsComponent},
];


@NgModule({ imports: [RouterModule.forChild(routes)], exports: [RouterModule] }) export class PublicRoutingModule { }
