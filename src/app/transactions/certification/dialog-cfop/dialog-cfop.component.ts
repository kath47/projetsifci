import { Component, Host } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog-cfop',
  templateUrl: './dialog-cfop.component.html',
  styleUrls: ['./dialog-cfop.component.scss']
})
export class DialogCfopComponent {

  typdemandeur:string[] = [
    'Physique',
    'Famille',
    'Morale privée',
    'Gouvernement',
    'Etablissement public',
    'Collectivité territoriale',
  ];

  roledemandeur:string[] = [
    'Demandeur',
    'Gestionnaire',
  ];

  region: string[] = [
    'ABIDJAN',
    'AGNEBI-TIASSA',
    'BAFING',
    'BAGOUE',
    'BELIER',
    'BERE',
    'BOUNKANI',
    'CAVALLY',
    'FOLON',
    'GBEKE',
    'GBÔKLE',
    'GÔH',
    'GONTOUGO',
    'GRAND-PONTS',
    'GUEMON',
    'HAMBOL',
    'IFFOU',
    'INDENIE-DJUABLIN',
    'KABADOUGOU',
    'LOH-DJIBOUA',
    'MARAHOUE',
    'ME',
    'MORONOU',
    "N'ZI",
    'NAWA',
    'PORO',
    'SAN PEDRO',
    'SASSANDRA',
    'SUD-COMOE',
    'TCHOLOGO',
    'TONKPI',
    'WORODOUGOU',
    'YAMOUSSOUKRO',
  ];

departement: string[] =[
  'Abidjan',
  'Daloa',
  'Issia',
  'Vavoua',
  'Zoukougbeu',
  'Korhogo',
  'Dikodougou',
  'Sinematiali',
  "M'bengue",
  'Bouaké',
  'Béoumi',
  'Sakassou',
  'Botro',
  'Abengourou',
  'Agnibilekrou',
  'Bettié',
  
];

sprefecture: string[] =[
  'Anyama',
  'Bingerville',
  'Tiebissou',
  'Toumodi',
  'Didievi',
  "Tie n'diekro",
  'Angoda',
  'Kokumbo',
  'Djekanou',
  'Kpouebo',

];
   
   }

