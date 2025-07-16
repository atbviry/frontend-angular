import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { PaymentServiceService } from '../services/payment-service.service';
import { Call } from '@angular/compiler';
import { PDFDocumentProxy } from 'pdfjs-dist/types/src/display/api';

@Component({
  selector: 'app-payment-invoice',
  standalone: false,
  templateUrl: './payment-invoice.component.html',
  styleUrl: './payment-invoice.component.css'
})
export class PaymentInvoiceComponent implements OnInit {


  paymentId!: number;
  pdfFileUrl!: string;

  activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  paymentServiceService: PaymentServiceService = inject(PaymentServiceService);

  ngOnInit(): void {
    ///How to Convert Blob to File
    //Method 2: Using a Data URL
    //https://www.delftstack.com/howto/javascript/javascript-blob-to-file/
    this.paymentId = this.activatedRoute.snapshot.params['id'];
    console.log(this.paymentId);
    this.paymentServiceService.getPayementInvoice( this.paymentId).subscribe({
      next: data => {
        let blob: Blob = new Blob([data], { type: 'application/pdf' })
         console.log(blob);

        this.pdfFileUrl = window.URL.createObjectURL(blob);
        console.log("this.pdfFileUrl");
        console.log(this.pdfFileUrl);

      }, error: err => {
        console.log(err);

      }
    }
    );
    
  }

  getPaymentInvoiceOk(paymentId: number) {
    this.paymentServiceService.getPayementInvoice(paymentId).subscribe({
      next: data => {
        let blob: Blob = new Blob([data], { type: 'application/pdf' })
         console.log(blob);

        this.pdfFileUrl = window.URL.createObjectURL(blob);
        console.log("this.pdfFileUrl");
        console.log(this.pdfFileUrl);

      }, error: err => {
        console.log(err);

      }
    }
    );
  }

  getPaymentInvoiceKo(paymentId: number): any {
    var blob: any;
    this.paymentServiceService.getPayementInvoice(paymentId).subscribe({
      next: data => {
        blob = new Blob([data], { type: 'application/pdf' })
         console.log(blob);
      }, error: err => {
        console.log(err);

      }
    }
    );
    return blob;
  }

  getPaymentInvoiceUrlKO(paymentId: number): string {
    let paymentUrl: string = '';
    this.paymentServiceService.getPayementInvoice(paymentId).subscribe({
      next: data => {
        let blob:Blob = new Blob([data], { type: 'application/pdf' })
         console.log(blob);
         paymentUrl= window.URL.createObjectURL(blob);
         console.log(paymentUrl);
      }, error: err => {
        console.log(err);

      }
    }
    );
    debugger;
     console.log('BAH' + paymentUrl);
    return paymentUrl;
  }

  afterLoadComplete($event: PDFDocumentProxy) {
    console.log("anything");

  }
}
