import { Component, computed, input, output } from '@angular/core';
import { type User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

@Component({
  selector: 'app-user',
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;
  // @Input({required: true}) id!: string;
  // @Output() select = new EventEmitter();

  // get imagePath() {
  //   return '/assets/users/' + this.avatar;
  // }

  // onSelectUser() {
  //   this.select.emit(this.id());
  // }

  user = input.required<User>();
  selected = input.required<boolean>();

  // id = input.required<string>();
  // name = input.required<string>();
  // avatar = input.required<string>();

  select = output<string>();

  imagePath = computed(() => '/assets/users/' + this.user().avatar);

  onSelectUser() {
    this.select.emit(this.user().id);
  }
}
