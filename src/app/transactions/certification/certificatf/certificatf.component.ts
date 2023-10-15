import { AfterViewInit, Component } from '@angular/core';
import { StepperOrientation } from '@angular/material/stepper';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogPvrdcComponent } from './dialog-pvrdc/dialog-pvrdc.component';

@Component({
  selector: 'app-certificatf',
  templateUrl: './certificatf.component.html',
  styleUrls: ['./certificatf.component.scss']
})
export class CertificatfComponent implements AfterViewInit {

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });
  stepperOrientation: Observable<StepperOrientation>;

  constructor(
    public _formBuilder: FormBuilder,
    breakpointObserver: BreakpointObserver,
    private _dialog: MatDialog // Ajout de private ici
  ) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 900px)')
      .pipe(map(({ matches }) => (matches ? 'horizontal' : 'vertical')));
  }

  openDialog() { // Correction : Déplacement de la fonction openDialog ici
    this._dialog.open(DialogPvrdcComponent);
  }

  ngAfterViewInit(): void {
    // Correction : Suppression de "throw new Error('Method not implemented.');"
  }



  typepiece: string[] = [
   'Acte de naissance',
   "Carte nationale d'identité",
   "Carte CMU",
   "Passeport", 
   "Permis de conduire", 
   "Non renseigné"];

    typeoccupation:string []= ["Propriété Privée","Coutumier","Propriété d'Etat"] ;
    
    limite:string []= ["Propriété Privée","Coutumier","Propriété d'Etat"] ;
  

  profession: string[] = [
    'Artisan',
    'Eleveur',
    'Salarié',
    'Commerçant',
    'Agriculteur',
    'Industriel',
    'Libéral',
    'Fonctionnaire',
    'Retraité',
    'Autre',
  ];

  Nationalite: string[] = [
 'Albanaise',
 'Afghane',
 'Algérienne', 
 'Allemande',
 'Américaine',
 'Andorran',
 'Angolaise',
 'Antiguaise et barbudienne',
 'Argentin',
   'Armenienne',
   'Australienne',
   'Autrichienne',
   'Azerbaïdjanaise',
   'Bahamienne',
   'Bahreinienne',
   'Bangladaise', 
   'Barbadienne',
   'Belge',
   'Bélizienne',
   'Béninoise',
   'Bhoutanaise',
   'Bielorusse',
   'Birmane',
   'Bissau-Guinéenne',
   'Bolivienne',
   'Bosnienne',
   'Botswanaise',
   'Brésilienne',
   'Britannique',
   'Bruneienne',
   'Bulgare',
   'Burkinabe',
'Burundaise',
'Cambodgienne',
'Camerounaise',
'Canadienne',
'Cap-verdienne',
'Centrafricaine',
'Chilienne',
'Chinoise',
'Chypriote',
'Colombienne',
'Comorienne',
'Congolaise',
'Costaricaine',
'Croate',
'Cubaine',
'Danoise',
'Djiboutienne',
'Dominicaine',
'Dominiquaise',
'Egyptienne',
'Emirienne',
'Equato-guinéenne',
'Equatorienne',
'Erytroisenne',
'Espagnole',
'Est-timoraise',
'Estonienne',
'Ethiopienne',
'Fidjienne',
'Finlandaise',
'Française' ,
'Gabonaise' ,
'Gambienne' ,
'Georgienne' ,
'Ghaneenne' ,
'Grenadienne' ,
'Guatemalteque' ,
'Guinéenne' ,
'Guyanienne' ,
'Haïtienne' ,
'Hellenique' ,
'Hondurienne' ,
'Hongroise' ,
'Indienne' ,
'Indonésienne' ,
'Irakienne' ,
'Irlandaise',
'Islandaise',
'Israélienne',
'Italienne',
'Ivoirienne',
'Jamaïcaine',
'Japonaise',
'Jordanienne',
'Kazakhstanaise',
'Kenyane',
'Kirghize',
'Kiribatienne',
'Kittitienne-et-nevicienne',
'Kossovienne',
'Koweitienne',
'Laotienne',
'Lesothane',
'Lettone',
'Libanaise',
'Libérienne',
'Libyenne' ,
'Liechtensteinoise' ,
'Macédonienne' ,
'Maldivienne' ,
'Malgache' ,
'Malienne' ,
'Maltaise',
'Marocaine',
'Marshallaise',
'Mauricienne',
'Mauritanienne',
'Mexicaine',
'Micronésienne',
'Moldave',
'Monégasque',
'Mongole',
'Monténégrin',
'Mozambicaine',
'Namibienne',
  'Nauruane',
  'Neerlandaise',
  'Néo-zélandaise',
  'Népalaise',
  'Nicaraguayenne',
  'Nigeriane',
  'Nigerienne',
  'Nord-coréenne',
  'Norvégienne',
  'Omanaise',
  'Ougandaise',
  'Ouzbeke',
  'Pakistanaise',
  'Palau',
  'Palestinienne',
  'Panameenne',
  'Papouane-neoguineenne',
  'Paraguayenne',
  'Péruvienne',
  'Philippine',
  'Polonaise',
  'Portoricaine',
  'Portugaise' ,
  'Qatarienne' ,
  'Roumaine' ,
  'Russe' ,
  'Rwandaise' ,
  'Saint-lucienne' ,
  'Saint-marinaise' ,
  'Saint-vincentaise-et-grenadine' ,
  'Salomonaise' ,
  'Salvadorienne' ,
  'Samoane' ,
  'Santomeenne' ,
  'Saoudienne' ,
  'Sénégalaise' ,
  'Serbe' ,
'Seychelloise',
'Sierra-léonaise',
'Singapourienne',
'Slovaque',
'Slovène',
'Somalienne',
'Soudanaise',
'Sri-lankaise',
'Sud-africaine',
'Sud-coréenne',
'Suedoise',
'Suisse',
'Surinamaise',
'Swazie',
'Syrienne',
'Tadjike',
'Taiwanaise',
'Tanzanienne',
'Tchadienne',
'Tcheque',
'Thaïlandaise',
'Togolaise',
'Tonguienne',
'Trinidadienne',
'Tunisienne',
'Turkmene',
'Turque',
'Tuvaluane',
'Ukrainienne',
'Uruguayenne',
'Vanuatuane',
'Venezuelienne',
'Vietnamienne',
'Yéménite',
'Zambienne',
'Zimbabweenne',
  ];
 
 
  

  
}


function openDialog() {
  throw new Error('Function not implemented.');
}

