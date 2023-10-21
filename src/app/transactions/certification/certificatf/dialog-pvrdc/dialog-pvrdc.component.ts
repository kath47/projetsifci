import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as RecordRTC from 'recordrtc';


@Component({
  selector: 'app-dialog-pvrdc',
  templateUrl: './dialog-pvrdc.component.html',
  styleUrls: ['./dialog-pvrdc.component.scss']
})
export class DialogPvrdcComponent {


      record: any;
      recording = false;
      url:any;
      error: any;

      constructor(private domSanitizer: DomSanitizer){}

      sanitize(url:string){
        return this.domSanitizer.bypassSecurityTrustUrl(url);
      }


      startRecording(){
        this.recording = true;
        let mediaConstraints = {
          video: false,
          audio: true,
        };
        navigator.mediaDevices
          .getUserMedia(mediaConstraints)
          .then(this.successCallback.bind(this), this.errorCallback.bind(this));
      }

      successCallback(stream: MediaStream){
          var options:any = {
            mineType: 'audio/wav',
          };

          var StereoAudioRecorder = RecordRTC.StereoAudioRecorder;
          this.record = new StereoAudioRecorder(stream, options);
          this.record.record();
      }

      stopRecording(){
        this.recording = false;
        this.record.stop(this.processRecording.bind(this));
      }


      processRecording(blob: Blob | MediaSource){
        this.url = URL.createObjectURL(blob);
        console.log('blob', blob);
        console.log('url', this.url);
      }

      errorCallback(error: any){
        this.error = 'Vous ne pouvez pas lire cet audio sur votre navigateur';
      }

      /* Transcription de l'audio */
      


      qualite:string[] = [
        'Président CVGFR',
        'Sécrétaire CVGFR',
        'Membre CVGFR',
        'Sachant du village',
        'Parents du demandeur',
        'Le cedant',
        'Demandeur',
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
