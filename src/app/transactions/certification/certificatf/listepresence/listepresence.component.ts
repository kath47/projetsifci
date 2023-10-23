import { Component } from '@angular/core';

@Component({
  selector: 'app-listepresence',
  templateUrl: './listepresence.component.html',
  styleUrls: ['./listepresence.component.scss']
})
export class ListepresenceComponent {

  qualite:string[] = [
    'Voisin limitrophe',
    'Président CVGFR',
    'Sécrétaire CVGFR',
    'Membre CVGFR',
    'Sachant du village',
    'Parents du demandeur',
    'Le cedant',
    'Demandeur',
  ];


  village:string[] = [
    'Bodokro',
    'Koffikro',
    'Konielekaha',
    'Guitrozon',
    'Gueyo',
    'Sintinfla',
    'Approomponou',
  ];
}
