import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './pages/about/about.component';
import { BlogComponent } from './pages/blog/blog.component';

import { ContactComponent } from './pages/contact/contact.component';
import { FaqComponent } from './pages/faq/faq.component';

import { HomeComponent } from './pages/home/home.component';

import { PortfolioSingleComponent } from './pages/portfolio-single/portfolio-single.component';

import { ProjectsComponent } from './pages/projects/projects.component';

import { ServicesComponent } from './pages/services/services.component';

import { TeamComponent } from './pages/team/team.component';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';
import { PRESTATIONDESERVICEComponent } from './pages/prestation-de-service/prestation-de-service.component';
import { AMENAGEMENTFONCIERComponent } from './pages/amenagement-foncier/amenagement-foncier.component';
import { LOTISSEMENTComponent } from './pages/lotissement/lotissement.component';
import { CONSTRUCTIONComponent } from './pages/construction/construction.component';
import { REHABILITATIONComponent } from './pages/rehabilitation/rehabilitation.component';
import { BTPComponent } from './pages/btp/btp.component';
import { FOURNITUREComponent } from './pages/fourniture/fourniture.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'amenagement-foncier', component: AMENAGEMENTFONCIERComponent },
  { path: 'lotissement', component: LOTISSEMENTComponent },
  { path: 'construction', component: CONSTRUCTIONComponent },
  { path: 'rehabilitation', component: REHABILITATIONComponent},
  { path: 'btp', component: BTPComponent },
  { path: 'fourniture', component: FOURNITUREComponent },
  { path: 'prestation-de-service', component: PRESTATIONDESERVICEComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'portfolio-single-insustry', component: PortfolioSingleComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'services', component: ServicesComponent},
  { path: 'team', component: TeamComponent },
  { path: 'testimonials', component: TestimonialsComponent},
];


@NgModule({ imports: [RouterModule.forChild(routes)], exports: [RouterModule] }) export class PublicRoutingModule { }
