import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PayementType } from '../models/payement';
import { PayementKeyVal } from '../models/payement-key-val';
import { StudentService } from '../services/student.service';
import { PDFDocumentProxy } from 'pdfjs-dist/types/src/display/api';
import { format } from 'date-fns';

@Component({
  selector: 'app-new-payment',
  standalone: false,
  templateUrl: './new-payment.component.html',
  styleUrl: './new-payment.component.css'
})
export class NewPaymentComponent implements OnInit {

  //j'ai besoin d'un formulaire
  paymentformGroup!: FormGroup // ça c'est du reactive-forms
  //j'ai besoin ldu code de l'etudiant sur lequl je vais ajouter  le paiement, du cou dje vais recuperer ici son code pour leque je vais ajouter le paiement
  studentCode!: string;
  paymentsList1: string[] = [];
  paymentsList: PayementKeyVal[] = [];
  fileName: string = 'Select File';
  pdfFileUrl !: string; //j'ai besoin de l'url du fichier pour l'afficher une fois qu'il télécharger
  showProgress: boolean = false; //j'ai besoin de ça pour arreter le sppiner
  invoiceSelected: boolean = false; //j'ai besoin de ça pour afficher le bloc du fichier téléchargé

  constructor(private fb: FormBuilder, private activatedRoute: ActivatedRoute, private studentService: StudentService) {

  }

  ngOnInit(): void {
    //initialisaztion de ma liste de type de paiement
    // for (let elt in PayementType) {
    //   if(isNaN(Number(elt))) {
    //     this.paymentsList1.push(PayementType[elt]);
    //   }
    // }
    // console.log(this.paymentsList1);

    //je vais virer tous ce qui ne sont pas de nombre. je vais virer tous ce qui non pas pas visa pour le hadj

    Object.keys(PayementType).filter(item => !isNaN(Number(item))); //ça me donne la liste des index qui sont dans mon eum PayementType. donc pour les recuperer je peux utiliser l
    //https://stackoverflow.com/questions/48768774/how-to-get-all-the-values-of-an-enum-with-typescript


    const keysType = Object.keys(PayementType).filter((item) => {
      return !isNaN(Number(item))
    }
    );
    console.log(keysType.join("\n"));
    const keysType2 = Object.keys(PayementType).filter(item => !isNaN(Number(item)));
    console.log(keysType2);

    for (let key in keysType) {
      let value = PayementType[key];

      var payementKeyVal: PayementKeyVal = {
        value: key,
        viewValue: value
      }
      console.log(payementKeyVal);
      this.paymentsList.push(payementKeyVal);

    }



    //j'injecte le code ici, le parametre qui m'intersse ici c'est le studentCode
    this.studentCode = this.activatedRoute.snapshot.params['studentCode']; // dans l'itineraire en cours je veux le paramettre nomé studentCode.
    // console.log(this.studentCode);


    // à l'interieur de cet objet je vais declarer les champs que je vais saisir
    //je vais utiliser this.paymentformGroup = this.fb.group( {})
    this.paymentformGroup = this.fb.group({
      //les champs que je vais saisir
      date: this.fb.control('', Validators.required),
      amount: this.fb.control(''),
      type: this.fb.control(''),
      studentCode: this.fb.control(this.studentCode), //par ce que je connais le code de l'etudiant sur lequel je vais ajouter le paiement
      fileName: this.fb.control(this.fileName), //si c'est le nom du fichier qui m'interesse
      fileSoure: this.fb.control(''), //si c'est le fichier qui m'interesse
      //mais je garde les deux

    })
  }

  //cette fonction reçois un objet de type Observable Event qui represente le fichier télechargé
  /**
   * Qu'est ce que je vais faire quand je selectionne ?
   * @param $event 
   */
  selectFile($event: Event) {
    //https://github.com/microsoft/TypeScript/issues/31816
    /**
     * const target = event.target as HTMLInputElement;
const files = target.files;
     */

    //https://www.bezkoder.com/angular-material-17-file-upload/
    const target = $event.target as HTMLInputElement;
    const files = target.files;
    if (files && files.length > 0) {
      let file = files[0];
      this.paymentformGroup.patchValue({
        fileName: file.name,
        fileSoure: file,
      });
      this.pdfFileUrl = window.URL.createObjectURL(file);
      this.invoiceSelected = true;
      this.fileName = file.name;
      //voilà ce que je vais faire dans selectFile
    } else {
      this.fileName = 'Select File';
    }

  }

  //methode d'enregistrement d'un paiement
  /**
   * Qu'est ce que je vais faire quand je vais faire save ?
   */
  savePayment(): void {
    this.showProgress = true;
    let formData: FormData = new FormData();
    /**
     *  où se trouve file ?
     * il est dans fileSoure
     */

    let date: Date = new Date(this.paymentformGroup.value.date);
    //ici j'ai la date formatée et ce que je vais envoyer
    //const formatDate = formatDateToString(date);
    // test formatDateToStringBis
    //const formatDateBis = formatDateToStringBis(date);
    //ok
    //ou en utisant une library like date-fns
    const formatDate = format(date, 'yyyy-MM-dd');

    const valueViewr = PayementType[this.paymentformGroup.value.type]
    console.log(valueViewr);

    formData.set('file', this.paymentformGroup.value.fileSoure);
    //formData.set('date', this.paymentformGroup.value.date); //ko format rejeté par le back
    //formData.set('date', '2025-07-06'); ok
    formData.set('date', formatDate);
    formData.set('amount', this.paymentformGroup.value.amount);
    //formData.set('type', this.paymentformGroup.value.type);
    formData.set('type', PayementType[this.paymentformGroup.value.type]);
    formData.set('studentCode', this.paymentformGroup.value.studentCode);
    //une fois que j'ai les données, je vais aller créer une methode dans le service student service qui permet de faire ça
    this.studentService.saveStudentPayment(formData).subscribe({
      next: data => {
        this.showProgress = false;
        alert('Payment saved successfully!')
      }, error: err => {
        alert('Payement refusé');
        console.log(err);
      }
    });
  }
  ///je ne veux rien faire parès upload
  afterLoadComplete($event: PDFDocumentProxy) {
    console.log($event);

  }

}

function formatDateToString(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const day = String(date.getDate()).padStart(2, '0');
  const formatted = `${year}-${month}-${day}`;
  console.log(formatted); // "2025-07-07"
  return formatted;
};
//ou 
function formatDateToStringBis(date: Date): string {
  const formatted = new Intl.DateTimeFormat('en-CA').format(date); // '2025-07-07'
  console.log(formatted);
  return formatted;
};