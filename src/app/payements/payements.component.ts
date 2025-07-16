import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Payement, Payements } from '../models/payement';
import { Observable } from 'rxjs';
import { PaymentServiceService } from '../services/payment-service.service';
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-payements',
  standalone: false,
  templateUrl: './payements.component.html',
  styleUrl: './payements.component.css'
})
export class PayementsComponent implements OnInit {
  //public payments_list: any;
  public dataSource!: MatTableDataSource<Payement>;

 // public paiements!: Array<Payement>;
 //ou tout court
   public paiements!: Payements;
   
   //todo 
  //public paiements$!: Observable<Payements>;

  @ViewChild(MatPaginator) paginator !: MatPaginator;

  //payements$!: Observable<Payements>;
  private paymentServiceService: PaymentServiceService = inject(PaymentServiceService);

  // displayedColumns: string[] = ['id', 'date', 'amount', 'type', 'status', 'firstName'];

  // ngOnInit(): void {

  //         this.dataSource =this.paymentServiceService.ELEMENT_DATA;
  //         console.log(this.dataSource);

  // }

  //httpClient: HttpClient = inject(HttpClient);
  // constructor(private httpClient: HttpClient) {

  // };

  //    displayedColumns: string[] = ['id', 'date', 'amount', 'type', 'status', 'firstName'];
  //   ngOnInit(): void {
  //     this.httpClient.get("http://localhost:8021/students/payements")
  //       .subscribe({
  //         next: data => {
  //           this.payments_list = data;
  //           this.dataSource =new MatTableDataSource(this.payments_list);
  //         },
  //         error: err => {
  //           console.log(err);
  //         }
  //       })
  //   }

  displayedColumns: string[] = ['id', 'date', 'amount', 'type', 'status', 'firstName'];

  // ngOnInit(): void {
  //   this.paymentServiceService.getAllPayements().subscribe(payments => this.dataSource = payments);
  // }

  //ou
  //
  // Il y'a deux eventualités possibles :
  // s'il ya des données qui arrivent dans le flux je m'abonne/je recupère qui est publié
  // Quand il y'a  erreur j'affiche l'erreur que j'ai reçu dans la console

  ngOnInit(): void {
    this.paymentServiceService.getAllPayements().subscribe({
      next: data => {
        this.paiements = data;
        this.dataSource = new MatTableDataSource<Payement>(this.paiements);
        this.dataSource.paginator = this.paginator;
      }, error: err => {
        console.log(err);

      }
    })
  }

}
