import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../services/student.service';
import { Payement, Payements } from '../models/payement';
import { tap } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-student-details',
  standalone: false,
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css'
})
export class StudentDetailsComponent implements OnInit {

  studentCode !: string;
  studentPayments!: Payements; //je vais declarer la propriété studentPayments de type c'est un tableau de paiements pour mettre les paiements que j'ai recupéré.
  // si je veux utiliser material il faut le declarer
  paymentsDataSource!: MatTableDataSource<Payement>; //je vais declarer la propriété paymentsDataSource de type c'est un  Mat table source de paiements pour mettre les paiements que j'ai vasi afficher.
  //je declare ici les colonnes à afficher
  displayedColumns: string[] = ['id', 'date', 'amount', 'type', 'status', 'firstName', 'invoice'];

  private route: ActivatedRoute = inject(ActivatedRoute);
  private studentService: StudentService = inject(StudentService);
  private router: Router = inject(Router);


  ngOnInit(): void {
    this.studentCode = this.route.snapshot.params['code'];//je veux la route dont le paramettre est code.

    this.studentService.getStudentPayments(this.studentCode).subscribe({
      next: data => {
        this.studentPayments = data;
        //maintenant une fois que ' j'ai les données je vais l'injecter dans le data source 
        this.paymentsDataSource = new MatTableDataSource<Payement>(this.studentPayments);
        console.log(this.studentPayments);
        // il fois que j'ai injecté les données dans le data source material maintenant je l'affiche

      },
      error: err => {
        console.log(err);

      }
    })

  }
  newPayment(): void {
    //quand je clique sur le bouton j'appler le routeur avec la methode navigateByUrl , je fais aller vers admin/new-pyment/  et je le transmet le code de l'étudiant
    //avec ça normalement on devrait pouvoir n'aviguer
    this.router.navigateByUrl(`admin/new-payment/${this.studentCode}`);
  }

  paymentInvoice(payment: Payement) {
    const va = this.router.navigateByUrl(`admin/payment-invoice/${payment.id}`);
    console.log(va);
    
  }
}

