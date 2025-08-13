import { Step } from "../models/etape.model";

export class StepStorage {
  
  private static STORAGE_KEY = 'step-progress';

  // Sauvegarder toutes les étapes
  static saveSteps(steps: Step[]) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(steps));
  }

  // Charger les étapes depuis localStorage
  static loadSteps(): Step[] | null {
    const data = localStorage.getItem(this.STORAGE_KEY);
    return data ? JSON.parse(data) : null;
  }

  // Mettre à jour une étape spécifique
  static updateStep(step: Step) {
    const steps = this.loadSteps() || [];
    const index = steps.findIndex(s => s.id === step.id);
    if (index >= 0) {
      steps[index] = step;
      this.saveSteps(steps);
    }
  }

  
}
