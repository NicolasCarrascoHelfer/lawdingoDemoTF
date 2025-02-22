import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CommentService } from 'src/app/service/comment.service';
import { Comment } from 'src/app/model/comment';

@Component({
  selector: 'app-comment-listar',
  templateUrl: './comment-listar.component.html',
  styleUrls: ['./comment-listar.component.css']
})
export class CommentListarComponent implements OnInit{
  dataSource: MatTableDataSource<Comment> = new MatTableDataSource();
  displayedColumns: string[] = [
    'codigo',
    'cliente',
    'abogado',
    'descripcion',
    'puntos',
    'accion01',
    'accion02',
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private cS: CommentService) {}

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
