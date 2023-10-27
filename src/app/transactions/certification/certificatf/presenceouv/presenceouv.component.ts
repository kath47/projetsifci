import { Component } from '@angular/core';

@Component({
  selector: 'app-presenceouv',
  templateUrl: './presenceouv.component.html',
  styleUrls: ['./presenceouv.component.scss']
})
export class PresenceouvComponent {
  
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
}
