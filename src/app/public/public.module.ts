import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './pages/home/home.component';
import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { AboutComponent } from './pages/about/about.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FaqComponent } from './pages/faq/faq.component';
import { PortfolioSingleComponent } from './pages/portfolio-single/portfolio-single.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ServicesComponent } from './pages/services/services.component';
import { TeamComponent } from './pages/team/team.component';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';
import { AMENAGEMENTFONCIERComponent } from './pages/amenagement-foncier/amenagement-foncier.component';
import { LOTISSEMENTComponent } from './pages/lotissement/lotissement.component';
import { CONSTRUCTIONComponent } from './pages/construction/construction.component';
import { REHABILITATIONComponent } from './pages/rehabilitation/rehabilitation.component';
import { BTPComponent } from './pages/btp/btp.component';
import { FOURNITUREComponent } from './pages/fourniture/fourniture.component';
import { PRESTATIONDESERVICEComponent } from './pages/prestation-de-service/prestation-de-service.component';




@NgModule({
  declarations: [
    PublicComponent,
    HomeComponent,
    AboutComponent,
    BlogComponent,
    AMENAGEMENTFONCIERComponent,
    LOTISSEMENTComponent,
    CONSTRUCTIONComponent,
    REHABILITATIONComponent,
    BTPComponent,
    FOURNITUREComponent,
    PRESTATIONDESERVICEComponent,
    ContactComponent,
    FaqComponent,
    PortfolioSingleComponent,
    ProjectsComponent,
    ServicesComponent,
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
