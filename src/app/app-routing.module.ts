import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './component/users/users.component';
import { UsersCreaeditaComponent } from './component/users/users-creaedita/users-creaedita.component';
import { CategoryComponent } from './component/category/category.component';
import { CategoryCreaeditaComponent } from './component/category/category-creaedita/category-creaedita.component';
import { DistrictComponent } from './component/district/district.component';
import { DistrictCreaeditaComponent } from './component/district/district-creaedita/district-creaedita.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
