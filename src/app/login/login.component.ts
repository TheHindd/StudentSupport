import {Component, OnInit} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {MatButtonModule} from "@angular/material/button";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {faUser, faLock} from "@fortawesome/free-solid-svg-icons";
import {
  FormBuilder,
  FormGroup, ReactiveFormsModule,
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  Validators
} from "@angular/forms";
import {Router} from "@angular/router";
import {UserProfile} from "../models";
import {ServiceService} from "../service.service";
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FaIconComponent,
    MatButtonModule,
    MatButtonToggleModule,
    ReactiveFormsModule,
  ],

  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent implements OnInit {

  fauser=faUser;
  falock=faLock;
  loginForm!: UntypedFormGroup;
  userProfile?: UserProfile|null;
  private role:any;
  private group: any;


  constructor(private formBuilder: UntypedFormBuilder,
              private ServiceService:ServiceService,
              private router: Router) {
  }

  ngOnInit(){
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  onsubmit(){
    this.ServiceService.userLogin(this.loginForm.value).subscribe( (data) => {
      if (data){
        console.log('login',data)
        this.ServiceService.userProfile.subscribe((data) => {
          this.userProfile = data;
          console.log('userProfile',this.userProfile?.user_id)

        });

        this.ServiceService.getAccountData( this.userProfile?.user_id).subscribe(data => {
          this.role = data;
          this.group= this.role.group
          console.log(this.group);

          console.log(this.role.group[0].id)
          if (this.role.group[0].id==1){
            this.router.navigate(['./stu'])


          }else {
            this.router.navigate(['./emp'])

          }


        });
      } else
        alert('اسم المستخدم او كلمة المرور خاطئة !!!')
    })




  }

}
