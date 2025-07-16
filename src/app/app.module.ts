import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './home/home.component';
import { ProfilComponent } from './profil/profil.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentsComponent } from './students/students.component';
import { PayementsComponent } from './payements/payements.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { LoadStudentsComponent } from './load-students/load-students.component';
import { LoadPaymentsComponent } from './load-payments/load-payments.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormField, MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './guards/auth-guard.guard';
import { AuthorizationGuard } from './guards/authorization-guard.guard';
import {provideHttpClient } from '@angular/common/http';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { NewPaymentComponent } from './new-payment/new-payment.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DATE_LOCALE, MatNativeDateModule, provideNativeDateAdapter } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PaymentInvoiceComponent } from './payment-invoice/payment-invoice.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminTemplateComponent,
    HomeComponent,
    ProfilComponent,
    LoginComponent,
    DashboardComponent,
    StudentsComponent,
    PayementsComponent,
    LoadStudentsComponent,
    LoadPaymentsComponent,
    StudentDetailsComponent,
    NewPaymentComponent,
    PaymentInvoiceComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatDividerModule, //pour inserer un séparateur
    MatTableModule, //pour inserer une table
    MatPaginatorModule, // pour insrer la pagination ma table
    MatSortModule, // pour trier ma table
    MatInputModule, //pour inserer un filtre
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatDatepickerModule, // pour utiliser Mat Date Picker de Mat qui combiné avec MatNativeDateModule sinon il va y avoir un probléme
   //MatNativeDateModule  //cet module est passé en service depuis la version 21 et c'est service provideNativeDateAdapter()
   MatSelectModule, // Pour utilser Mat Select
   PdfViewerModule, //pour affichr le pdf
   MatProgressSpinnerModule
  ],

  providers: [
    Router, 
    AuthGuard, 
    AuthorizationGuard, 
    provideHttpClient(), 
    provideNativeDateAdapter(),
    {provide:MAT_DATE_LOCALE, useValue: 'fr-FR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
