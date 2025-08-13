import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-lancement',
  imports: [],
  templateUrl: './lancement.html',
  styleUrl: './lancement.scss'
})
export class Lancement {

  constructor(private router: Router){
    setTimeout( () => { //Attente de 5 secondes
        this.router.navigate(['/menu']);; 
        console.log("test");
      },2000
    );
  }

}
