import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePipe, NgClass, UpperCasePipe } from '@angular/common';
import { Conference } from '../../Models/conference';
import { ConferenceDetails } from '../conference-details/conference-details';

@Component({
  selector: 'app-conference-list',
  imports: [FormsModule, NgClass, UpperCasePipe, DatePipe, ConferenceDetails],
  templateUrl: './conference-list.html',
  styleUrl: './conference-list.css',
})
export class ConferenceList {
  searchText = '';

  conferences: Conference[] = [
    { id: 1, title: 'Angular Summit', description: 'Découvrez les nouveautés d\'Angular 21.',
      date: new Date('2027-01-15'), place: 'Tunis', maxParticipants: 100, nbParticipants: 60 },
    { id: 2, title: 'Web Security Day', description: 'Sécurité des applications web.',
      date: new Date('2027-02-10'), place: 'Sousse', maxParticipants: 50, nbParticipants: 45 },
    { id: 3, title: 'Cloud & DevOps', description: 'CI/CD et conteneurs.',
      date: new Date('2027-03-05'), place: 'Sfax', maxParticipants: 30, nbParticipants: 30 },
    { id: 4, title: 'Old Conference', description: 'Conférence déjà passée.',
      date: new Date('2025-05-20'), place: 'Tunis', maxParticipants: 80, nbParticipants: 20 },
  ];

  // Conférences à venir + filtrées par la recherche
  get filteredConferences(): Conference[] {
    const now = new Date();
    return this.conferences.filter(
      (c) =>
        c.date > now &&
        c.title.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  remaining(c: Conference): number {
    return c.maxParticipants - c.nbParticipants;
  }

  // Couleur du bouton : green / orange / red
  getColor(c: Conference): string {
    const left = this.remaining(c);
    if (left === 0) return 'red';
    if (left < 10) return 'orange';
    return 'green';
  }

  register(c: Conference) {
    if (this.remaining(c) > 0) {
      c.nbParticipants++;
    }
  }
  selectedConference: Conference | null = null;
  select(c: Conference) {
  this.selectedConference = c;
}
}