import { Component, input, output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Conference } from '../../Models/conference';

@Component({
  selector: 'app-conference-details',
  imports: [DatePipe],
  templateUrl: './conference-details.html',
  styleUrl: './conference-details.css',
})
export class ConferenceDetails {
  // Reçu du parent (ConferenceList)
  conference = input<Conference | null>(null);

  // Envoyé au parent quand on clique sur "S'inscrire"
  registered = output<Conference>();

  remaining(c: Conference): number {
    return c.maxParticipants - c.nbParticipants;
  }

  onRegister(c: Conference) {
    this.registered.emit(c);
  }
}