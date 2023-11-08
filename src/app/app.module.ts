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

import {MatSidenavModule} from '@angular/material/sidenav';

import { CategoryCreaeditaComponent } from './component/category/category-creaedita/category-creaedita.component';
import { CategoryComponent } from './component/category/category.component';
import { CategoryListarComponent } from './component/category/category-listar/category-listar.component';
import { RoleComponent } from './component/role/role.component';
import { RoleListarComponent } from './component/role/role-listar/role-listar.component';
import { RoleCreaeditaComponent } from './component/role/role-creaedita/role-creaedita.component';
import { CommentComponent } from './component/comment/comment.component';
import { CommentCreaeditaComponent } from './component/comment/comment-creaedita/comment-creaedita.component';
import { CommentListarComponent } from './component/comment/comment-listar/comment-listar.component';

import { ProceedingComponent } from './component/proceeding/proceeding.component';
import { ProceedingCreaeditaComponent } from './component/proceeding/proceeding-creaedita/proceeding-creaedita.component';
import { ProceedingListarComponent } from './component/proceeding/proceeding-listar/proceeding-listar.component';
import { DistrictComponent } from './component/district/district.component';
import { DistrictListarComponent } from './component/district/district-listar/district-listar.component';
import { DistrictCreaeditaComponent } from './component/district/district-creaedita/district-creaedita.component';
import { ConsultationComponent } from './component/consultation/consultation.component';
import { ConsultationCreaeditaComponent } from './component/consultation/consultation-creaedita/consultation-creaedita.component';
import { ConsultationListarComponent } from './component/consultation/consultation-listar/consultation-listar.component';
import { DocumentationComponent } from './component/documentation/documentation.component';
import { ListarDocumentationComponent } from './component/documentation/listar-documentation/listar-documentation.component';
import { CreaeditaDocumentationComponent } from './component/documentation/creaedita-documentation/creaedita-documentation.component';
import { CourtComponent } from './component/court/court.component';
import { CourtListarComponent } from './component/court/court-listar/court-listar.component';
import { CourtCreaeditaComponent } from './component/court/court-creaedita/court-creaedita.component';
import { CertificationListarComponent } from './component/certification/certification-listar/certification-listar.component';
import { CertificationComponent } from './component/certification/certification.component';
import { CertificationCreaeditaComponent } from './component/certification/certification-creaedita/certification-creaedita.component';
import { LandingComponent } from './component/landing/landing.component';
import { LoginComponent } from './component/login/login.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';




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

    ProceedingComponent,
    ProceedingCreaeditaComponent,
    ProceedingListarComponent,
    DistrictComponent,
    DistrictListarComponent,
    DistrictCreaeditaComponent,
    ConsultationComponent,
    ConsultationCreaeditaComponent,
    ConsultationListarComponent,
    DocumentationComponent,
    ListarDocumentationComponent,
    CreaeditaDocumentationComponent,
    CourtComponent,
    CourtListarComponent,
    CourtCreaeditaComponent,
    CertificationListarComponent,
    CertificationComponent,
    CertificationCreaeditaComponent,
    LandingComponent,
    LoginComponent,
    
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
    MatListModule,
    MatSidenavModule,
    MatSnackBarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
