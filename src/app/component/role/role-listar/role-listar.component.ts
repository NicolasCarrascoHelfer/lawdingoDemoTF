import { Component , OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { RoleService } from 'src/app/service/role.service';
import { Role } from 'src/app/model/role';
@Component({
  selector: 'app-role-listar',
  templateUrl: './role-listar.component.html',
  styleUrls: ['./role-listar.component.css']
})
export class RoleListarComponent implements OnInit{
  dataSource: MatTableDataSource<Role> = new MatTableDataSource();
  displayedColumns: string[] = [
    'codigo',
    'rol',
    'usuario',
    'accion01',
    // 'accion02',

  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private rS: RoleService) {
  }
  ngOnInit(): void {
    this.rS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
    this.rS.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }
  eliminar(id: number) {
    this.rS.delete(id).subscribe((data) => {
      this.rS.list().subscribe((data) => {
        this.rS.setList(data);
      });
    });
  }

  filter(en: any) {
    this.dataSource.filter = en.target.value.trim();
  }
}
