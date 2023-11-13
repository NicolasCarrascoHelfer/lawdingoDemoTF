import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { District } from 'src/app/model/district';
import { DistrictService } from 'src/app/service/district.service';
import { MatPaginator } from '@angular/material/paginator';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-district-listar',
  templateUrl: './district-listar.component.html',
  styleUrls: ['./district-listar.component.css'],
})
export class DistrictListarComponent implements OnInit {
  role:string="";
  dataSource: MatTableDataSource<District> = new MatTableDataSource();
  mensaje: string = '';
  idVacio: boolean = false;
  displayedColumns: string[] = ['codigo', 'distrito', 'accion01', 'accion02'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private dS: DistrictService, private loginService: LoginService) {}
  
  
  ngOnInit():void {
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
