import { Component } from '@angular/core';
import {DUMMY_USERS} from "../dummy-users";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  selectedUser = DUMMY_USERS[Math.floor(Math.random() * DUMMY_USERS.length)];
}
