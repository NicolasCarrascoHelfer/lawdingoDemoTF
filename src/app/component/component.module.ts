import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatTableModule} from '@angular/material/table'
import {MatPaginatorModule} from '@angular/material/paginator'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {MatSelectModule} from '@angular/material/select'
import {MatDatepickerModule} from '@angular/material/datepicker'
import {MatNativeDateModule} from '@angular/material/core'
import {MatButtonModule} from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import{MatIconModule} from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSidenavModule} from '@angular/material/sidenav';

import { ComponentRoutingModule } from './component-routing.module';
import { UsersComponent } from './users/users.component';
import { UsersCreaeditaComponent } from './users/users-creaedita/users-creaedita.component';
import { UsersListarComponent } from './users/users-listar/users-listar.component';
import { CategoryCreaeditaComponent } from './category/category-creaedita/category-creaedita.component';
import { CategoryComponent } from './category/category.component';
import { CategoryListarComponent } from './category/category-listar/category-listar.component';
import { RoleComponent } from './role/role.component';
import { RoleListarComponent } from './role/role-listar/role-listar.component';
import { RoleCreaeditaComponent } from './role/role-creaedita/role-creaedita.component';
import { ConsultationComponent } from './consultation/consultation.component';
import { ConsultationCreaeditaComponent } from './consultation/consultation-creaedita/consultation-creaedita.component';
import { ConsultationListarComponent } from './consultation/consultation-listar/consultation-listar.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { SubscriptionCreaeditaComponent } from './subscription/subscription-creaedita/subscription-creaedita.component';
import { SubscriptionListarComponent } from './subscription/subscription-listar/subscription-listar.component';
import { NotificationCreaeditaComponent } from './notification/notification-creaedita/notification-creaedita.component';
import { NotificationListarComponent } from './notification/notification-listar/notification-listar.component';
import { NotificationComponent } from './notification/notification.component';

@NgModule({
  declarations: [
    UsersComponent,
    UsersCreaeditaComponent,
    UsersListarComponent,
    CategoryCreaeditaComponent,
    CategoryComponent,
    CategoryListarComponent,
    RoleComponent,
    RoleListarComponent,
    RoleCreaeditaComponent,
    ConsultationComponent,
    ConsultationCreaeditaComponent,
    ConsultationListarComponent,
    SubscriptionComponent,
    SubscriptionCreaeditaComponent,
    SubscriptionListarComponent,
    NotificationCreaeditaComponent,
    NotificationListarComponent,
    NotificationComponent,
  ],
  imports: [
    CommonModule,
    ComponentRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    FormsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    ReactiveFormsModule,

    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    MatListModule,
    MatSidenavModule,
    MatSnackBarModule
  ]
})
export class ComponentModule { }
