import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './component/users/users.component';
import { UsersCreaeditaComponent } from './component/users/users-creaedita/users-creaedita.component';
import { CategoryComponent } from './component/category/category.component';
import { CategoryCreaeditaComponent } from './component/category/category-creaedita/category-creaedita.component';
import { DistrictComponent } from './component/district/district.component';
import { DistrictCreaeditaComponent } from './component/district/district-creaedita/district-creaedita.component';
import { RoleComponent } from './component/role/role.component';
import { RoleCreaeditaComponent } from './component/role/role-creaedita/role-creaedita.component';
import { ConsultationComponent } from './component/consultation/consultation.component';
import { ConsultationCreaeditaComponent } from './component/consultation/consultation-creaedita/consultation-creaedita.component';
import { DocumentationComponent } from './component/documentation/documentation.component';
import { CreaeditaDocumentationComponent } from './component/documentation/creaedita-documentation/creaedita-documentation.component';
import { ProceedingComponent } from './component/proceeding/proceeding.component';
import { ProceedingCreaeditaComponent } from './component/proceeding/proceeding-creaedita/proceeding-creaedita.component';
import { CourtComponent } from './component/court/court.component';
import { CourtCreaeditaComponent } from './component/court/court-creaedita/court-creaedita.component';

const routes: Routes = [
  {
    path: 'users',
    component: UsersComponent,
    children: [
      { path: 'nuevo', component: UsersCreaeditaComponent },
      { path: 'ediciones/:id', component: UsersCreaeditaComponent },
    ],
  },
  {
    path: 'categories',
    component: CategoryComponent,
    children: [
      { path: 'nuevo', component: CategoryCreaeditaComponent },
      { path: 'ediciones/:id', component: CategoryCreaeditaComponent },
    ],
  },
  {
    path: 'districts',
    component: DistrictComponent,
    children: [
      { path: 'nuevo', component: DistrictCreaeditaComponent },
      { path: 'ediciones/:id', component: DistrictCreaeditaComponent },
    ],
  },
  {
    path: 'roles',
    component: RoleComponent,
    children: [
      { path: 'nuevo', component: RoleCreaeditaComponent },
      { path: 'ediciones/:id', component: RoleCreaeditaComponent },
    ],
  },
  {
    path: 'consultations',
    component: ConsultationComponent,
    children: [
      { path: 'nuevo', component: ConsultationCreaeditaComponent },
      { path: 'ediciones/:id', component: ConsultationCreaeditaComponent },
    ],
  },
  {
    path: 'documentations',
    component: DocumentationComponent,
    children: [
      { path: 'nuevo', component: CreaeditaDocumentationComponent },
      { path: 'ediciones/:id', component: CreaeditaDocumentationComponent },
    ],
  },
  {
    path: 'proceedings',
    component: ProceedingComponent,
    children: [
      { path: 'nuevo', component: ProceedingCreaeditaComponent },
      { path: 'ediciones/:id', component: ProceedingCreaeditaComponent },
    ],
  },
  {
    path: 'courts',
    component: CourtComponent,
    children: [
      { path: 'nuevo', component: CourtCreaeditaComponent },
      { path: 'ediciones/:id', component: CourtCreaeditaComponent },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
