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
    nom: 'Mise en bouche',
    description: "",
    format: 'texte',
    reponse: 'IKEA, pug, avoine',
    encours: false,
    validee : false,
    display: false
  },
  {
    id: 2,
    nom: 'Là où tout commence',
    description: "",
    format: 'texte',
    reponse: 'Opera, Muses, Les Muses',
    encours: false,
    validee : false,
    display: false
  },
  {
    id: 3,
    nom: 'Tequila & tunning',
    description: "",
    format: 'texte',
    reponse: '8523',
    encours: false,
    validee : false,
    display: false
  },
  {
    id: 4,
    nom: 'Copilote',
    description: "",
    format: 'texte',
    reponse: 'Pancakes, pancake',
    encours: false,
    validee : false,
    display: false
  },
  {
    id: 5,
    nom: 'Kiffeuse de pictos va',
    description: "",
    format: 'texte',
    reponse: 'Célestins',
    encours: false,
    validee : false,
    display: false
  },
  {
    id: 6,
    nom: 'Leçon de piano',
    description: "",
    format: 'texte',
    reponse: '',
    encours: false,
    validee : false,
    display: false
  }
];
