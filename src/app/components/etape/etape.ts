import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Step } from '../../models/etape.model';
import { StepService } from '../../services/step.service';

@Component({
  selector: 'app-etape',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './etape.html',
  styleUrls: ['./etape.scss']
})

export class Etape implements OnInit {

  steps: Step[] = [];
  reponseText: string = '';
  code: number[] = new Array(4);

  constructor(public stepService: StepService) {}

  ngOnInit() {
    // Réinitialise les steps si nécessaire
    this.stepService.resetSteps();


    // Récupère les steps et initialise la propriété reponse si nécessaire
    this.steps = this.stepService.getSteps().map(step => ({
      ...step,
      reponse: step.reponse ?? '' // Toujours avoir une chaîne vide si undefined
    }));

  }

  nextStep(id: number) {
    // Validation de l'étape
    this.stepService.nextStep(id);
    this.steps = this.stepService.getSteps().map(step => ({
      ...step,
      reponse: step.reponse ?? '' // Toujours avoir une chaîne vide si undefined
    }));


     const lastValidatedIndex = this.steps
      .map((s, i) => ({ encours: s.encours, index: i }))
      .filter(s => s.encours)
      .map(s => s.index)
      .pop();
      const currentIndex = lastValidatedIndex !== undefined ? lastValidatedIndex : 0;

   }

  validateStep(index: number){
    this.stepService.completeStep(index);
    this.steps = this.stepService.getSteps().map(step => ({
      ...step,
      reponse: step.reponse ?? '' // Toujours avoir une chaîne vide si undefined
    }));

    if(index == 0){ //Pas d'affichage de résultats, passage direct à étape 1 depuis validaiton intro
      this.nextStep(index);
    }
    

  }

  checkResponseText(index: number) {  
    const step = this.steps[index];

    if (!step || step.reponse === undefined) {
      console.error('Step ou step.reponse non défini', step);
      return;
    }
    
    if(this.reponseText === '' || this.reponseText === null){
      console.error('Réponse vide ou nulle');
      return;
    }
    // Normalisation pour comparaison insensible à la casse et aux accents
    const normalize = (str: string) =>
      str
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase();

    const normalizedInput = normalize(this.reponseText);
    const normalizedReference = normalize(step.reponse);


    const isContained = normalizedReference.includes(normalizedInput);
    this.reponseText = '';

    if(isContained){
     this.validateStep(index);
    }


  }

  focusNext(event: Event, position: number) {
    const input = event.target as HTMLInputElement;
    if (input.value.length === 1) {
      const next = document.querySelectorAll<HTMLInputElement>('.pin-input input')[position];
      if (next) {
        next.focus();
      }
    }
  }

  checkCode(index: number) {
    const reponse = this.steps[index].reponse;
    const userCode = this.code.join('');

    if (userCode === reponse) {
      this.validateStep(index);
    }
    else{
      this.code = new Array(4).fill(null);
    }
    
  }
}
