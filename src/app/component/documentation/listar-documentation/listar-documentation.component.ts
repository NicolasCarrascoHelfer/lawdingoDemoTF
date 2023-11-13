import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Documentation } from 'src/app/model/documentation';
import { DocumentationService } from 'src/app/service/documentation.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-listar-documentation',
  templateUrl: './listar-documentation.component.html',
  styleUrls: ['./listar-documentation.component.css']
})
export class ListarDocumentationComponent implements OnInit{
  role:string="";
  dataSource: MatTableDataSource<Documentation> = new MatTableDataSource();
  mensaje: string = '';
  idVacio: boolean = false;
  displayedColumns: string[] = [
    'codigo',
    'documentacion',
    'expediente',
    'accion01',
    'accion02',
    
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private dS: DocumentationService, private formBuilder: FormBuilder, private loginService: LoginService) {
  }
  ngOnInit() {
    this.role = this.loginService.showRole();
    this.dS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
    this.dS.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }
  eliminar(id: number) {
    this.dS.delete(id).subscribe((data) => {
      this.dS.list().subscribe((data) => {
        this.dS.setList(data);
      });
    });
  }
  filter(en: any) {
    this.dataSource.filter = en.target.value.trim();
  }
}
