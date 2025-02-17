import { Component, computed, EventEmitter, input, Output, output } from '@angular/core';

type User = {
  id: string; 
  name: string;
  avatar: string
};

@Component({
  selector: 'app-user',
  imports: [],
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

  // id = input.required<string>();
  // name = input.required<string>();
  // avatar = input.required<string>();

  select = output<string>();

  imagePath = computed(() => '/assets/users/' + this.user().avatar);

  onSelectUser() {
    this.select.emit(this.user().id);
  }
}
