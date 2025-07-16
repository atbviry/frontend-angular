import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Student, Students } from '../models/student';
import { Payement, Payements } from '../models/payement';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
 private http: HttpClient = inject(HttpClient);

  constructor() { }

  public getAllStudents(): Observable<Students> {

    return this.http.get<Students>(`${environment.backendhost}/students/`)
  }

  public getStudentPayments(studentCode: string): Observable<Payements> {

    return this.http.get<Payements>(`${environment.backendhost}/students/code/${studentCode}/payements`);
  }
  /**
   * cette methode reçoit un objet de type formData
   * c'est un post que j'envoi
   * Du j'envoi un post vers /students/savePayement
   * ça va me retourner un observable de paiement (pas une liste)
   * @param studentCode 
   * @returns Payement
   */
public saveStudentPayment(formData: any): Observable<Payement> {

    return this.http.post<Payement>(`${environment.backendhost}/students/savePayement`, formData);
  }
//une fois que j'ai ça je reviens vers le le composant j'appel le service
}
