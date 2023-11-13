import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Court } from 'src/app/model/court';
import { CourtService } from 'src/app/service/court.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-court-listar',
  templateUrl: './court-listar.component.html',
  styleUrls: ['./court-listar.component.css']
})
export class CourtListarComponent implements OnInit{
  role:string="";
  dataSource: MatTableDataSource<Court> = new MatTableDataSource();
  mensaje: string = '';
  idVacio: boolean = false;
  displayedColumns: string[] = [
    'codigo',
    'juzgado',
    'distrito',
    'accion01',
    'accion02',
    
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private cS: CourtService, private loginService: LoginService) {
  }
  ngOnInit() {
    this.role = this.loginService.showRole();
    this.cS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
    this.cS.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }
  eliminar(id: number) {
    this.cS.delete(id).subscribe((data) => {
      this.cS.list().subscribe((data) => {
        this.cS.setList(data);
      });
    });
  }
  filter(en: any) {
    this.dataSource.filter = en.target.value.trim();
  }
}
