import { Component , signal} from '@angular/core';

@Component({
  selector: 'app-profil',
  imports: [],
  templateUrl: './profil.html',
  styleUrl: './profil.css',
})
export class Profil {
  user= signal({
    name:"Ali",
    email: "Ali@esprit.tn"
  })
}
