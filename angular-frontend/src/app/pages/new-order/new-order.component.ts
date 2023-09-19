import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { Observable, config } from 'rxjs';
import { ClientsService } from 'src/app/services/clients/clients.service';
import { Client } from 'src/app/models/Client';
import { ProductsService } from 'src/app/services/products/products.service';
import { Product } from 'src/app/models/Product';
import { ProductOrder } from 'src/app/models/ProductOrder';
import { FreteService } from 'src/app/services/frete/frete.service';
import { Order } from 'src/app/models/Order';
import { OrdersService } from 'src/app/services/oders/orders.service';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';


@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.css'],
})
export class NewOrderComponent {

  constructor(private clientsService:ClientsService, 
    private productsService:ProductsService, 
    private freteService:FreteService,
    private ordersService:OrdersService,
    private router:Router,
    private _snackBar: MatSnackBar){}

  myControl = new FormControl('');

  client:string = '';
  product:string = '';

  clients!: Client[];
  products!: Product[];
  filteredClientsOptions!: Observable<Client[]>;
  filteredProductsOptions!: Observable<Product[]>;

  selectedProducts: ProductOrder[] = [];

  currentInputChange:number = 1;

  readProduct!:Product;

  totalValue:number = 0;
  totalQtde:number = 0
  totalFrete:number = 0;
  total:number = 0;

  ngOnInit() {
    // API CALL
    this.clientsService.getAll().subscribe(data => {
      this.clients = data;
      // Filtering
      this.filteredClientsOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filterClients(value || '')),
      );
    });

    this.productsService.getAll().subscribe(data => {
      this.products = data;
      // Filtering
      this.filteredProductsOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filterProducts(value || '')),
      );
    })

  }

  private _filterClients(value: string): Client[] {
    const filterValue = value.toLowerCase();

    return this.clients.filter(option => option.nome.toLowerCase().includes(filterValue));
  }

  private _filterProducts(value: string): Product[] {
    const filterValue = value.toLowerCase();

    return this.products.filter(option => option.nome.toLowerCase().includes(filterValue));
  }

  public addProduct(p:Product){
    if(this.selectedProducts.filter(o => o.product === p).length === 0)
      this.selectedProducts.push(new ProductOrder(p));
    this.product = '';
    this.updateTotal();
  }

  public removeProduct(p:ProductOrder){
    if(this.selectedProducts.includes(p))
      this.selectedProducts = this.selectedProducts.filter(o => o !== p);
    this.updateTotal();
  }

  public updateProductQtde(p:ProductOrder){
    if(this.selectedProducts.includes(p)){
      this.selectedProducts = this.selectedProducts.filter(o => o !== p);
      p.qtde = this.currentInputChange;
      this.selectedProducts.push(p);
    }
  }

  public clearCart(){
    this.selectedProducts = [];
    this.updateTotal();
  }

  private updateTotal(){
    this.total = this.totalFrete = this.totalQtde = this.totalValue = 0;
    this.selectedProducts.forEach(o => {
      this.totalValue += o.qtde * o.product.precoUnitario;
      this.totalQtde += o.qtde;
      console.log(o);
    });

    this.freteService.getValorFrete(this.totalQtde).subscribe(data =>{
      this.totalFrete = parseInt(data.toString());
      this.total = this.totalValue + this.totalFrete;
    });
  }

  public submitOrder(){

    if(this.client === ''){
      this._snackBar.open("Selecione o Cliente! 👤");
      return;
    }

    if(this.selectedProducts.length <= 0){
      this._snackBar.open("Selecione pelo menos 1 produto! 🛒");
      return;
    }

    console.log('aaaaaa');

    var order = new Order();
    order.qtdeItens =  this.totalQtde;
    order.valorTotal = this.total;
    order.valorFrete = this.totalFrete;

    this.ordersService.addOrder(order).subscribe({
      complete: () => {
        this.router.navigate(['success']);
      },
      error: (e) => {
        console.log(e);
        this._snackBar.open("Algo deu errado ao finalizar seu pedido 😔 Por favor, tente novamente!");
      }
    });
  }
}
