import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Tone from 'tone';

@Component({
  selector: 'app-piano',
  standalone: true,
  styleUrls: ['./piano.scss'],
  imports: [CommonModule],
  templateUrl: './piano.html'
})
export class Piano {
  @Input() expectedSequence: string[] = []; // <-- sequence attendue depuis parent
  @Output() unlocked = new EventEmitter<void>(); // <-- notifier quand c’est bon

  notes = ['E4','F4','F#4','G4','G#4','A4','A#4','B4','C5','C#5','D5','D#5','E5'];
  userSequence: string[] = [];
  synth = new Tone.Synth().toDestination();

  playNote(note: string) {
    this.synth.triggerAttackRelease(note, '8n');
    this.userSequence.push(note);
    this.checkSequence();
  }

  checkSequence() {
    if (this.userSequence.length > this.expectedSequence.length) {
      this.userSequence = [];
    } else {
      const isCorrect = this.userSequence.every((n,i) => n === this.expectedSequence[i]);
      if (isCorrect && this.userSequence.length === this.expectedSequence.length) {
        this.unlocked.emit(); // <-- notifie le parent
        this.userSequence = [];
      }
    }
  }
}
