import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfilComponent } from './profil/profil.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentsComponent } from './students/students.component';
import { PayementsComponent } from './payements/payements.component';
import { LoadStudentsComponent } from './load-students/load-students.component';
import { LoadPaymentsComponent } from './load-payments/load-payments.component';
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import { AuthGuard } from './guards/auth-guard.guard';
import { AuthorizationGuard } from './guards/authorization-guard.guard';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { NewPaymentComponent } from './new-payment/new-payment.component';
import { PaymentInvoiceComponent } from './payment-invoice/payment-invoice.component';

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "login", component: LoginComponent },
  {
    path: "admin", component: AdminTemplateComponent, canActivate: [AuthGuard],
    children: [
      { path: "home", component: HomeComponent },
      { path: "profile", component: ProfilComponent },
      { path: "dashboard", component: DashboardComponent },
      { path: "students", component: StudentsComponent },
      { path: "payments", component: PayementsComponent },
      { path: "student-details/:code", component: StudentDetailsComponent }, // j'envoie student code
      { path: "new-payment/:studentCode", component: NewPaymentComponent }, // j'envoie student code
      { path: "payment-invoice/:id", component: PaymentInvoiceComponent }, // j'envoie payment id
      { path: "loadStudents", component: LoadStudentsComponent, canActivate: [AuthorizationGuard], data: { roles: ['ADMIN'] } },
      { path: "loadStudents", component: LoadStudentsComponent, canActivate: [AuthorizationGuard], data: { roles: ['ADMIN'] } },
      { path: "loadPayments", component: LoadPaymentsComponent, canActivate: [AuthorizationGuard], data: { roles: ['ADMIN'] } },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
