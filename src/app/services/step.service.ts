import { Injectable } from '@angular/core';
import { Step } from '../models/etape.model';
import { DEFAULT_STEPS } from '../data/default-steps';

@Injectable({
  providedIn: 'root'  // singleton accessible partout
})
export class StepService {
  private steps: Step[] = [];
  private currentStepIndex: number = 0;

  constructor() {
    this.loadSteps();
  }

  private loadSteps() {
    if (typeof window !== 'undefined' && window.localStorage) {
      const saved = localStorage.getItem('steps');
      if (saved) {
        this.steps = JSON.parse(saved);
        // Déterminer l'étape courante (première non complétée)
        this.currentStepIndex = this.steps.findIndex(s => !s.encours);
        if (this.currentStepIndex === -1) this.currentStepIndex = 0;
      } else {
        this.steps = DEFAULT_STEPS;
        this.currentStepIndex = 0;
        this.saveSteps();
      }
    } else {
      this.steps = DEFAULT_STEPS;
      this.currentStepIndex = 0;
    }
  }

  private saveSteps() {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('steps', JSON.stringify(this.steps));
    }
  }

  // Getter pour toutes les étapes
  getSteps(): Step[] {
    return this.steps;
  }

  // Getter pour l'étape courante
  getCurrentStep(): Step {
    return this.steps[this.currentStepIndex];
  }

  // Passer à l'étape suivante
  nextStep(index: number) {
    if (index < this.steps.length - 1) {
        this.steps[index].display = false;
        this.steps[index + 1].encours = true;
        this.steps[index + 1].display = true;
        this.saveSteps();
    }
  }

  // Marquer une étape comme complétée
  completeStep(index: number) {
    this.steps[index].validee = true;
    this.steps[index].encours = false;
    this.saveSteps();
  }

  // Réinitialiser toutes les étapes (optionnel)
  resetSteps() {
    this.steps = DEFAULT_STEPS.map(s => ({ ...s, completed: false }));
    this.currentStepIndex = 0;
    this.saveSteps();
  }
}
