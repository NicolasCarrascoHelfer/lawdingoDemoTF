import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
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

import { CategoryCreaeditaComponent } from './component/category/category-creaedita/category-creaedita.component';
import { CategoryComponent } from './component/category/category.component';
import { CategoryListarComponent } from './component/category/category-listar/category-listar.component';
import { RoleComponent } from './component/role/role.component';
import { RoleListarComponent } from './component/role/role-listar/role-listar.component';
import { RoleCreaeditaComponent } from './component/role/role-creaedita/role-creaedita.component';
import { CommentComponent } from './component/comment/comment.component';
import { CommentCreaeditaComponent } from './component/comment/comment-creaedita/comment-creaedita.component';
import { CommentListarComponent } from './component/comment/comment-listar/comment-listar.component';
import { UsersComponent } from './component/users/users.component';
import { UsersCreaeditaComponent } from './component/users/users-creaedita/users-creaedita.component';
import { UsersListarComponent } from './component/users/users-listar/users-listar.component';
import { ProceedingComponent } from './component/proceeding/proceeding.component';
import { ProceedingCreaeditaComponent } from './component/proceeding/proceeding-creaedita/proceeding-creaedita.component';
import { ProceedingListarComponent } from './component/proceeding/proceeding-listar/proceeding-listar.component';
import { DistrictComponent } from './component/district/district.component';
import { DistrictListarComponent } from './component/district/district-listar/district-listar.component';
import { DistrictCreaeditaComponent } from './component/district/district-creaedita/district-creaedita.component';




@NgModule({
  declarations: [
    AppComponent,
    CategoryCreaeditaComponent,
    CategoryComponent,
    CategoryListarComponent,
    RoleComponent,
    RoleListarComponent,
    RoleCreaeditaComponent,
    CommentComponent,
    CommentCreaeditaComponent,
    CommentListarComponent,
    UsersComponent,
    UsersCreaeditaComponent,
    UsersListarComponent,
    ProceedingComponent,
    ProceedingCreaeditaComponent,
    ProceedingListarComponent,
    DistrictComponent,
    DistrictListarComponent,
    DistrictCreaeditaComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
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
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
