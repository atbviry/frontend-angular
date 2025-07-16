import { AfterViewInit, Component, Inject, inject, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { StudentService } from '../services/student.service';
import { Student, Students } from '../models/student';

@Component({
  selector: 'app-students',
  standalone: false,
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent implements OnInit, AfterViewInit {

  private students!: Students;
  public dataSource!:MatTableDataSource<Student>;
  //on definit ici les colonnes qu'on va afficher.
  //Quelles sont les colonnes qu'on va afficher ?
  /**
   * on va afficher les colonnes id/firstName/latsName qui on des trigger
   * + la colonne payments qui n'a pas de trigger
   */
  displayedColumns: string[] = ["id", "firstName", "lastName", "payments"];
  /* ici, j'ai declaré l'objet paginator de type MatPaginator associé à un élément paginator declaré dans la partie UI de mon composant
  ensuite je dois associer mon data source à cet paginator
  */
  //je prend/je declare cette paginator pour faire le lien entre cette data source et sa paginator.
  /**
Qu'est ce qu'il fait Viewchild ?
Il va me le chercher le nombre d'élements choisis à afficher dans la page l'affecter à mon paginar (ma variable paginator)
  */
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort

  private studentService: StudentService = inject(StudentService);
  private router: Router = inject(Router);

  // ngOnInit(): void {
  //   //je recupère les données dans le backend
  //   this.students = [];
  //   for (let i: number = 1; i < 100; i++) {
  //     this.students.push(
  //       {
  //         id: i,
  //         firstName: Math.random().toString(20),
  //         lastName: Math.random().toString(20)

  //       }
  //     )
  //   }
  //   //ue fois que j'ai recupérer les données , je vais données à ma data source pour qu'elle les envoye en affichage.
  //   this.dataSource = new MatTableDataSource(this.students);
  //   //throw new Error('Method not implemented.');
  // }

/**
 * j'apelle le service students studentService.getAllStudents(), je recupère les données
 * je fais subcribe
 *  uand 'il y' des données je les recupère => j'utilise next
 * Quand il y'a des ereurs je  les recupère => jutilise error
 * En suite je fais l'affichage dans le template
 */
  ngOnInit(): void {
    //je recupère les données dans le backend
    this.studentService.getAllStudents().subscribe({
      next: data => {
        this.students = data;
        this.dataSource = new MatTableDataSource<Student>(this.students);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

      }, error: err => {
        console.log(err);

      }
    });

  }

  ngAfterViewInit(): void {
    ///le panator de cette data est le paginator que j'ai declaré ici
    //this.dataSource.paginator = this.paginator;
    //this.dataSource.sort = this.sort;
  }

  //fonction qui fait filtrer mon dataSource(mes etudiants)
  filterStudents(event: Event): void {
    let value: string = (event.target as HTMLInputElement).value;
    this.dataSource.filter = value;
    //throw new Error('Method not implemented.');
  }

  //fontion permet de naviguer vers les paiements d'un étudiant te par la suite on vera commnet faire pour afficher les paiements de l'etudiant.
  ///pour le moment on ne transmet pas le paramtere
  public studentPaiements(student: Student): void {
    //this.router.navigateByUrl("/admin/payments");
    //this.router.navigateByUrl(`${environment.backendhost}/students/byCode/${student.code}/payements`);
    this.router.navigateByUrl(`/admin/student-details/${student.code}`);
  }
}
