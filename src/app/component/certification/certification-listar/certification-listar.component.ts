import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Certification } from 'src/app/model/certification';
import { CertificationService } from 'src/app/service/certification.service';

@Component({
  selector: 'app-certification-listar',
  templateUrl: './certification-listar.component.html',
  styleUrls: ['./certification-listar.component.css']
})
export class CertificationListarComponent implements OnInit{
  dataSource: MatTableDataSource<Certification> = new MatTableDataSource();
  mensaje: string = '';
  idVacio: boolean = false;
  displayedColumns: string[] =[
    'idCertification',
    'title',
    'client',
    'accion01'
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private cS: CertificationService, private formBuilder: FormBuilder){}

  ngOnInit(): void {
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
