import { Component } from '@angular/core';
import {HeaderComponent} from "../header/header.component";

@Component({
  selector: 'app-stu',
  standalone: true,
  imports: [
    HeaderComponent
  ],
  templateUrl: './stu.component.html',
  styleUrl: './stu.component.css'
})
export class StuComponent {

}
