import { Component } from '@angular/core';

@Component({
  selector: 'app-dialog-visa',
  templateUrl: './dialog-visa.component.html',
  styleUrls: ['./dialog-visa.component.scss']
})
export class DialogVisaComponent {

  qualite:string[] = [
    'Président CVGFR',
    'Sécrétaire',
    'Membre',
    'Sachant',
    'Frère',
    'Soeur',
    'Démandeur',
  ];
}
