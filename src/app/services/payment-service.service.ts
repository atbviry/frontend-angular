import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Payement, Payements } from '../models/payement';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PaymentServiceService {
  private http: HttpClient = inject(HttpClient);

  // c'est une methode qui retourne une liste de paiements
  public getAllPayements(): Observable<Payements> {

    return this.http.get<Payements>(`${environment.backendhost}/students/payements`);
  }

  //ou
  // public getAllPayements(): Observable<Array<Payement>> {

  //   return this.http.get<Array<Payement>>(`${environment.backendhost}/students/payements`);
  // }


// c'est une methode qui retourne une liste de paiements
//tiens le lien pour consulter la facture du paiemnt no 66 : http://localhost:8021/students/payments/16/paymentFile
/**
 * 
 * @returns 
 */
  // public getPayementInvoice(paiemntId : number) {
  
  //   return this.http.get(`${environment.backendhost}/students/payments/${paiemntId}/paymentFile`, {responseType:'blob'}); //il faut preciser ça comme ce n'est pas un json qui va me retourner mais un pdf
  // }

  public getPayementInvoice(paiemntId : number): Observable<any> {
  
    return this.http.get(`${environment.backendhost}/students/payments/${paiemntId}/paymentFile`, {responseType: 'blob'}); //il faut preciser ça comme ce n'est pas un json qui va me retourner mais un pdf
  }

  public ELEMENT_DATA: Payements =[
    {
      "id": 1,
      "date": "2025-06-19",
      "amount": 113.07112457200233,
      "type": "CHECK",
      "status": "CRETEAD",
      "file": "f67de606-c932-44a6-9a59-e13d1efb4047",
      "student": {
        "id": "b6d541f9-22ae-41dc-aae8-2b70ef986a2a",
        "code": "12",
        "firstName": "BAH",
        "lastName": null,
        "email": null,
        "photo": null
      }
    },
    {
      "id": 2,
      "date": "2025-06-19",
      "amount": 71.2191668088511,
      "type": "CASH",
      "status": "CRETEAD",
      "file": "ee9fbdd3-d117-4a3f-b696-4f8fcd39f101",
      "student": {
        "id": "b6d541f9-22ae-41dc-aae8-2b70ef986a2a",
        "code": "12",
        "firstName": "BAH",
        "lastName": null,
        "email": null,
        "photo": null
      }
    },
    {
      "id": 3,
      "date": "2025-06-19",
      "amount": 74.86196383077588,
      "type": "TRANSFER",
      "status": "CRETEAD",
      "file": "f1207b8e-351a-4065-9e96-8a9c7a41c9d5",
      "student": {
        "id": "b6d541f9-22ae-41dc-aae8-2b70ef986a2a",
        "code": "12",
        "firstName": "BAH",
        "lastName": null,
        "email": null,
        "photo": null
      }
    },
    {
      "id": 4,
      "date": "2025-06-19",
      "amount": 82.92758189169956,
      "type": "TRANSFER",
      "status": "CRETEAD",
      "file": "3419f807-4459-4afa-8612-90707036eb87",
      "student": {
        "id": "b6d541f9-22ae-41dc-aae8-2b70ef986a2a",
        "code": "12",
        "firstName": "BAH",
        "lastName": null,
        "email": null,
        "photo": null
      }
    },
    {
      "id": 5,
      "date": "2025-06-19",
      "amount": 97.3940624220499,
      "type": "TRANSFER",
      "status": "CRETEAD",
      "file": "63425f95-bb22-4e86-ba83-264bf70695da",
      "student": {
        "id": "b6d541f9-22ae-41dc-aae8-2b70ef986a2a",
        "code": "12",
        "firstName": "BAH",
        "lastName": null,
        "email": null,
        "photo": null
      }
    },
    {
      "id": 6,
      "date": "2025-06-19",
      "amount": 85.8175139873898,
      "type": "CHECK",
      "status": "CRETEAD",
      "file": "767dd1c6-9d2f-4d8d-9ae8-a3f4d462afa4",
      "student": {
        "id": "16f52b5b-8e03-4186-9b93-ae0613be9e17",
        "code": "34",
        "firstName": "DIALLO",
        "lastName": null,
        "email": null,
        "photo": null
      }
    },
    {
      "id": 7,
      "date": "2025-06-19",
      "amount": 132.12537132454378,
      "type": "CHECK",
      "status": "CRETEAD",
      "file": "bfa72172-f145-4ead-b268-50596a4a6a49",
      "student": {
        "id": "16f52b5b-8e03-4186-9b93-ae0613be9e17",
        "code": "34",
        "firstName": "DIALLO",
        "lastName": null,
        "email": null,
        "photo": null
      }
    },
    {
      "id": 8,
      "date": "2025-06-19",
      "amount": 69.28011933087572,
      "type": "TRANSFER",
      "status": "CRETEAD",
      "file": "10453cbc-8eb7-429a-a6e7-aecb0952f8be",
      "student": {
        "id": "16f52b5b-8e03-4186-9b93-ae0613be9e17",
        "code": "34",
        "firstName": "DIALLO",
        "lastName": null,
        "email": null,
        "photo": null
      }
    },
    {
      "id": 9,
      "date": "2025-06-19",
      "amount": 70.34801607414445,
      "type": "DEPOT",
      "status": "CRETEAD",
      "file": "b2cd2870-3f1d-4e27-bceb-bdcb4b8af5d7",
      "student": {
        "id": "16f52b5b-8e03-4186-9b93-ae0613be9e17",
        "code": "34",
        "firstName": "DIALLO",
        "lastName": null,
        "email": null,
        "photo": null
      }
    },
    {
      "id": 10,
      "date": "2025-06-19",
      "amount": 90.1818616693671,
      "type": "TRANSFER",
      "status": "CRETEAD",
      "file": "6219684e-1a29-4930-9bdb-6a14d82a6caa",
      "student": {
        "id": "16f52b5b-8e03-4186-9b93-ae0613be9e17",
        "code": "34",
        "firstName": "DIALLO",
        "lastName": null,
        "email": null,
        "photo": null
      }
    },
    {
      "id": 11,
      "date": "2025-06-19",
      "amount": 106.99575655310392,
      "type": "CASH",
      "status": "CRETEAD",
      "file": "53ab96fd-3ac8-469a-b5c6-3aeb05c0bb41",
      "student": {
        "id": "55a3e977-3fc0-412c-b572-afcf53341838",
        "code": "56",
        "firstName": "SALL",
        "lastName": null,
        "email": null,
        "photo": null
      }
    },
    {
      "id": 12,
      "date": "2025-06-19",
      "amount": 60.97026731208932,
      "type": "CASH",
      "status": "CRETEAD",
      "file": "267fded8-1c7a-41cc-9816-c4e5ffe4d457",
      "student": {
        "id": "55a3e977-3fc0-412c-b572-afcf53341838",
        "code": "56",
        "firstName": "SALL",
        "lastName": null,
        "email": null,
        "photo": null
      }
    },
    {
      "id": 13,
      "date": "2025-06-19",
      "amount": 69.67819735619881,
      "type": "CHECK",
      "status": "CRETEAD",
      "file": "961ca1db-0cec-4b2b-b812-24cf6a703f69",
      "student": {
        "id": "55a3e977-3fc0-412c-b572-afcf53341838",
        "code": "56",
        "firstName": "SALL",
        "lastName": null,
        "email": null,
        "photo": null
      }
    },
    {
      "id": 14,
      "date": "2025-06-19",
      "amount": 76.43572492072092,
      "type": "TRANSFER",
      "status": "CRETEAD",
      "file": "cb626ea2-5948-4773-9c87-b2cb0ae60f46",
      "student": {
        "id": "55a3e977-3fc0-412c-b572-afcf53341838",
        "code": "56",
        "firstName": "SALL",
        "lastName": null,
        "email": null,
        "photo": null
      }
    },
    {
      "id": 15,
      "date": "2025-06-19",
      "amount": 50.35594925719815,
      "type": "TRANSFER",
      "status": "CRETEAD",
      "file": "354fd321-db78-4087-8c95-a1109215cf78",
      "student": {
        "id": "55a3e977-3fc0-412c-b572-afcf53341838",
        "code": "56",
        "firstName": "SALL",
        "lastName": null,
        "email": null,
        "photo": null
      }
    }
  ];

}
