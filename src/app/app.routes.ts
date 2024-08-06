import { Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {StuComponent} from "./stu/stu.component";
import {EmpComponent} from "./emp/emp.component";

export const routes: Routes = [

 { path: "login",
  component: LoginComponent
 },

 {path:"",
 component: LoginComponent},

  {path:"stu",
  component: StuComponent},

  {path:"emp",
    component: EmpComponent},

]
