import { Step } from "../models/etape.model";

export const DEFAULT_STEPS: Step[] = [
  {
    id: 0,
    nom: 'Chasse au trésor',
    description: "",
    format: 'texte',
    reponse: '',
    encours: true,
    validee : false,
    display: true
  },
  {
    id: 1,
    nom: '#1 - Là où tout commence',
    description: "",
    format: 'texte',
    reponse: 'Opera, Muses, Les Muses',
    encours: false,
    validee : false,
    display: false
  },
  {
    id: 2,
    nom: '#2 - Tequila & tunning',
    description: "",
    format: 'texte',
    reponse: '8523',
    encours: false,
    validee : false,
    display: false
  },
  {
    id: 3,
    nom: '#3 - Copilote',
    description: "",
    format: 'texte',
    reponse: 'Pancakes, pancake',
    encours: false,
    validee : false,
    display: false
  },
  {
    id: 4,
    nom: '#4 - Kiffeuse de pictos va',
    description: "",
    format: 'texte',
    reponse: 'Célestins, théâtre',
    encours: false,
    validee : false,
    display: false
  }
];
