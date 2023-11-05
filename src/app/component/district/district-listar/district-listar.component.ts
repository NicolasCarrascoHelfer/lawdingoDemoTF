import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { District } from 'src/app/model/district';
import { DistrictService } from 'src/app/service/district.service';
import { MatPaginator } from '@angular/material/paginator';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-district-listar',
  templateUrl: './district-listar.component.html',
  styleUrls: ['./district-listar.component.css']
})
export class DistrictListarComponent implements OnInit{
  dataSource: MatTableDataSource<District> = new MatTableDataSource();
  idForm: FormGroup = new FormGroup({});
  mensaje: string = '';
  idVacio: boolean = false;
  displayedColumns: string[] = [
    'codigo',
    'distrito',

    'accion01',
    'accion02',
    
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private dS: DistrictService, private formBuilder: FormBuilder) {
  }
  ngOnInit() {
    this.dS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
    this.dS.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
    this.idForm = this.formBuilder.group({
      id: [,],
    });
  }
  eliminar(id: number) {
    this.dS.delete(id).subscribe((data) => {
      this.dS.list().subscribe((data) => {
        this.dS.setList(data);
      });
    });
  }
  buscar() {
      const ids = this.idForm.value.id
      this.dS.listId(ids).subscribe((data) => {
        this.dataSource.data = data;
      });
}
}
