import { Student } from "./student"
//voilà la structure de paiement
//ça c'est l'interface paiement
//NB: pour definir cette stucture je dois me fir de la structure du backend
export interface Payement {
    id: number
  date: string
  amount: number
  type: string
  status: string
  file: string
  student: Student
}
export type Payements = Payement[];
//si je veux definer un enumerateur que je vais utiliser, je peux faire ça:
export enum PayementType {
  CASH, CHECK, TRANSFER, DEPOT
}

export enum PayementStatus {
   CRETEAD, VALIDATED, REJECTED
}
  
