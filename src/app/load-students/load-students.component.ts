import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-load-students',
  standalone: false,
  templateUrl: './load-students.component.html',
  styleUrl: './load-students.component.css'
})
export class LoadStudentsComponent implements OnInit {
  public students: any;
  public dataSource: any;

  ngOnInit(): void {
    //je recupère les données dans le backend
    this.students = [];
    for (let i: number = 1; i < 100; i++) {
      this.students.public(
        {
          id: i,
          firstName: Math.random().toString(20),
          latsName: Math.random().toString(20),
        }
      )
    }
    //ue fois que j'ai recupérer les données , je vais données à ma data source pour qu'elle les envoye en affichage.
    this.dataSource = new MatTableDataSource(this.dataSource);

    throw new Error('Method not implemented.');
  }

}
