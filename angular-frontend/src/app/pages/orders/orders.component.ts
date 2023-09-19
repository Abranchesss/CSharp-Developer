import {Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Order } from 'src/app/models/Order';
import { OrdersService } from 'src/app/services/oders/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {

  constructor(private ordersService:OrdersService){}

  displayedColumns: string[] = ['id', 'valorTotal', 'qtdeItens', 'valorFrete'];
  dataSource = new MatTableDataSource<Order>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit() {
    // API CALL
    this.ordersService.getAll().subscribe(data => {
      this.dataSource = new MatTableDataSource<Order>(data);
      this.dataSource.paginator = this.paginator;
      console.log(data);
    });
  }
}