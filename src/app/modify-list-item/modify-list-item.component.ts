import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FormsComponent} from "../forms/forms.component";

@Component({
  selector: 'app-modify-list-item',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, FormsComponent],
  templateUrl: './modify-list-item.component.html',
  styleUrl: './modify-list-item.component.css'
})
export class ModifyListItemComponent {

  // constructor(
  //   private fb: FormBuilder,
  //   private route: ActivatedRoute,
  //   private studentService: StudentService,
  //   private router: Router
  // )

}
