import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Category } from 'src/app/model/category';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-listar-category',
  templateUrl: './listar-category.component.html',
  styleUrls: ['./listar-category.component.css']
})
export class ListarCategoryComponent {
  dataSource: MatTableDataSource<Category> = new MatTableDataSource();
  displayedColumns: string[] = [
    'codigo',
    'categoria',
    
  ];

  constructor(private pS: CategoryService) {
    this.pS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
  }
  ngOnInit(): void {}
}
