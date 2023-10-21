import { Component } from '@angular/core';
import { AngularSignaturePadModule } from '@almothafar/angular-signature-pad/public-api';


@Component({
  selector: 'app-dialog-visa',
  templateUrl: './dialog-visa.component.html',
  styleUrls: ['./dialog-visa.component.scss']
})
export class DialogVisaComponent {

  qualite:string[] = [
    'Président CVGFR',
    'Sécrétaire CVGFR',
    'Membre CVGFR',
    'Sachant du village',
    'Parents du demandeur',
    'Le cedant',
    'Demandeur',
  ];

 
}
