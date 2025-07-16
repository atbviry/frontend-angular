import { Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/user';
import { AuthentificationService } from '../services/authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup;
   public pwdHide = true;

  formBuilder: FormBuilder = inject(FormBuilder);
  authentificationService: AuthentificationService = inject(AuthentificationService);
  router: Router = inject(Router);


  // onSubmit(): void {
  //   console.log("Form Submietted:", this.loginForm);
  //   let username = this.loginForm.value?.username;
  //   let password = this.loginForm.value?.password;
  //   console.log(username, password);

  // }


  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      user: this.formBuilder.group({
        name: this.formBuilder.control('', Validators.required),
        password: this.formBuilder.control('', Validators.required),
      }
      )
    }
    );
  }

  get user(): any {

    return this.loginForm.get('user');
  }

  onSubmit(): void {
    console.log("Form Submietted:", this.user);
    let username = this.loginForm.value?.user.name;
    let password = this.loginForm.value?.user.password;
    console.log(username, password);

    let userModel: User = {
      name: '',
      password: ''
    };
    userModel.name = this.loginForm.value?.user?.name;
    userModel.password = this.loginForm.value?.user?.password;
    //console.log("userModel", userModel);

    const auth: boolean = this.authentificationService.login(userModel);
    if (auth) {
      this.router.navigateByUrl("/admin")
    }

  }

  visibilityToggle() : boolean {
    return this.pwdHide = !this.pwdHide;
  }

  getIputType() : string{
    return this.pwdHide ? 'password' : 'text';
  }
  
  getVisibility() : string{
    return this.pwdHide ? 'visibility_off' : 'visibility';
  }

}
