import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-friends',
  imports: [FormsModule],
  templateUrl: './friends.html',
  styleUrl: './friends.css',
})
export class Friends {

  friendsList = [
    { name: 'Sami', email:'alice@example.com' },
    { name: 'Sarra', email:'bob@example.com' },
    { name: 'Ahmed', email:'charlie@example.com' }]

}
