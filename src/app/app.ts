import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './Components/header/header';
import { Friends } from './Components/friends/friends';
import { Footer } from './Components/footer/footer';
import { Notifications } from './Components/notifications/notifications';
import { Navbar } from './Components/navbar/navbar';
import { Profil } from './Components/profil/profil';
import { ConferenceList } from './Components/conference-list/conference-list';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Friends, Footer, Navbar, Notifications, Profil, ConferenceList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  //protected readonly title = signal('Conferencia');
title = "Conf"
}
