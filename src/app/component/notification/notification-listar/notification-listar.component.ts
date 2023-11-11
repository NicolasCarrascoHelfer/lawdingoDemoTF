import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NotificationService } from 'src/app/service/notification.service';
import { Notification } from 'src/app/model/notification';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-notification-listar',
  templateUrl: './notification-listar.component.html',
  styleUrls: ['./notification-listar.component.css']
})
export class NotificationListarComponent implements OnInit{
  dataSource: MatTableDataSource<Notification> = new MatTableDataSource();
  displayedColumns: string[] = [
    'idNotification',
    'sender',
    'receiver',
    'message',
    'accion01',

  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private nS: NotificationService, private formBuilder: FormBuilder) {
  }
  ngOnInit(): void {
    this.nS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
    this.nS.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }
  eliminar(id: number) {
    this.nS.delete(id).subscribe((data) => {
      this.nS.list().subscribe((data) => {
        this.nS.setList(data);
      });
    });
  }
  filter(en: any) {
    this.dataSource.filter = en.target.value.trim();
  }
}

