import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-principal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-principal.html',
  styleUrls: ['./menu-principal.scss']
})
export class MenuPrincipal {

  displayButton = [
    {id: 1, content: 'Clique quand t\'est prête bg', position: 25, display: true},
    {id: 2, content: 'T\'as cru ça allait être aussi simple ?', position: 10, display: false},
    {id: 3, content: 'Promis c\'est le dernier', position: 75, display: false},
    {id: 4, content: 'Un petit dernier pour la route', position: 20, display: false},
  ]

  displayFooter = false;

  paths = new Array(7);

  constructor(private router: Router){
  }

  nextButton(id: number){

    this.displayButton[id].display = false;

    if(id < (this.displayButton.length-1)){ this.displayButton[id+1].display = true; }
    else{ this.router.navigate(['/etape']); }
  }
}


