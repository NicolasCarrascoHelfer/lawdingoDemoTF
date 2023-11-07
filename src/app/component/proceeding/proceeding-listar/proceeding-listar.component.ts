import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Proceeding } from 'src/app/model/proceeding';
import { ProceedingService } from 'src/app/service/proceeding.service';

@Component({
  selector: 'app-proceeding-listar',
  templateUrl: './proceeding-listar.component.html',
  styleUrls: ['./proceeding-listar.component.css'],
})
export class ProceedingListarComponent implements OnInit {
  dataSource: MatTableDataSource<Proceeding> = new MatTableDataSource();
  displayedColumns: string[] = [
    'codigo',
    'nombre',
    'estado',
    'juzgado',
    'cliente',
    'abogado',
    'accion01',
    'accion02',
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private cS: ProceedingService) {}

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
