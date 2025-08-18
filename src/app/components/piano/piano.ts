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
  userNote: string = '';
  noteValidation: boolean[] = [false, false, false, false, false, false, false, false, false, false];
  progress = 0;
  synth = new Tone.Synth().toDestination();

  constructor() {
    console.log(this.expectedSequence);
    
  }

  playNote(note: string) {
    this.synth.triggerAttackRelease(note, '8n');
    //this.userSequence.push(note);
    this.userNote = note;
    this.checkSequence();
    //console.log(this.userSequence);
  }

  checkSequence() {

    if(this.userNote == this.expectedSequence[this.progress]){
      this.noteValidation[this.progress] = true;
      this.progress++
    }
    else{
      this.noteValidation = new Array(10).fill(false);
      this.progress = 0;
    }

    if(this.progress == this.expectedSequence.length){
      this.unlocked.emit(); 
      this.noteValidation = new Array(10).fill(false); 
      this.progress = 0;
    }

  }
}
