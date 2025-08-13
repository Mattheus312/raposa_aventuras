// models/etape.model.ts
export interface Step {
  id: number;
  nom: string;
  description: string;
  reponse: string; // réponse correcte attendue
  format: 'texte' | 'nombre' | 'choix'; // format attendu
  encours?: boolean; // si cette étape est validée
  validee?: boolean;
  display?: boolean
}
