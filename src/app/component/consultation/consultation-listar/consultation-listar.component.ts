import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Consultation } from 'src/app/model/consultation';
import { ConsultationService } from 'src/app/service/consultation.service';
import { MatPaginator } from '@angular/material/paginator';
import { LoginService } from 'src/app/service/login.service';
@Component({
  selector: 'app-consultation-listar',
  templateUrl: './consultation-listar.component.html',
  styleUrls: ['./consultation-listar.component.css']
})
export class ConsultationListarComponent implements OnInit{
  //AGREGACION DE ROL--------------------
  role:string="";
  ///////////////
  dataSource: MatTableDataSource<Consultation> = new MatTableDataSource();
  displayedColumns: string[] = [
    'codigo',
    'titulo',
    'fecha',
    'descripcion',
    'cliente',
    'abogado',
    'categoria',
    'accion01',
    
    
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  //AGREGACION DE LOGINSERVICE EN EL CONSTRUCTOR-----------------
  constructor(private cS: ConsultationService, private ls:LoginService) {
  }
  ngOnInit(): void {
    
    //AGREGACION DE ROL-------------------
    this.role=this.ls.showRole();
    //////////////
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
