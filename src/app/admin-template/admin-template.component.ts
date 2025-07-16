import { Component, inject, OnInit } from '@angular/core';
import { AuthentificationService } from '../services/authentification.service';

@Component({
  selector: 'app-admin-template',
  standalone: false,
  templateUrl: './admin-template.component.html',
  styleUrl: './admin-template.component.css'
})
export class AdminTemplateComponent implements OnInit {

  public username!: any;
  public authenticated: boolean = false;
  public roles!: any;

  authentificationService: AuthentificationService = inject(AuthentificationService);

  ngOnInit(): void {
    this.authenticated = this.authentificationService.authenticated;
    this.username = this.authentificationService.username;
    this.roles = this.authentificationService.roles;

  }

  logout(): void {
    this.authentificationService.logout();

  }


}
