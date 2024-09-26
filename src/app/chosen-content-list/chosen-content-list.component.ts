import {Component, Input} from '@angular/core';
import {ChosenContentListItemComponent} from "../chosen-content-list-item/chosen-content-list-item.component";

@Component({
  selector: 'app-chosen-content-list',
  standalone: true,
  imports: [
    ChosenContentListItemComponent
  ],
  templateUrl: './chosen-content-list.component.html',
  styleUrl: './chosen-content-list.component.css'
})
export class ChosenContentListComponent {
  @Input() title?: string;
}
