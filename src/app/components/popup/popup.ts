import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-popup',
  imports: [CommonModule],
  templateUrl: './popup.html',
  styleUrl: './popup.scss'
})

export class Popup {
  @Input() isVisible = false;
  @Input() title = 'Pop-up';

  close() {
    this.isVisible = false;
  }
}