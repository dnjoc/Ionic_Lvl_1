import { Component } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonAvatar, IonIcon, IonButtons, IonImg, IonAlert, IonActionSheet, IonCard, IonCardHeader, IonCardTitle, IonItem, IonCardContent, IonLabel, IonFooter, IonText, IonRadioGroup, IonRadio } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { addCircleOutline } from "ionicons/icons";
import { addIcons } from 'ionicons';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-examen',
  templateUrl: './examen.page.html',
  styleUrls: ['./examen.page.scss'],
  standalone: true,
  imports: [IonRadio, IonRadioGroup, IonText, IonFooter, IonLabel, IonCardContent, IonItem, IonCardTitle, IonCardHeader, IonCard, IonActionSheet, IonAlert, IonImg, IonButtons, IonIcon, IonAvatar, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, NgIf]
})
export class ExamenPage {

  indice: number = 0;

  preguntas: any[] = [
    {
      id: 1,
      enunciado: '¿Cuál es el primer planeta del sistema solar?',
      opciones: ['Mercurio', 'Venus', 'Tierra', 'Marte'],
    },
    {
      id: 2,
      enunciado: '¿Cuál es el nombre del río más largo del mundo?',
      opciones: ['Nilo', 'Amazonas', 'Yangtsé', 'Misisipi'],
    },
    {
      id: 3,
      enunciado: '¿Con qué elemento químico se combina para formar el agua?',
      opciones: ['Hidrógeno y oxígeno', 'Carbono y oxígeno', 'Metano y nitrógeno', 'Helio y neón'],
    },
      {
        id: 4,
        enunciado:'¿En qué año se produjo la revolución industrial?',
        opciones:['1765','1800','1900','1950'],
      },
      {
        id:"5",
        enunciado: "¿Qué país fue fundado por Christopher Columbus?",
        opciones: ["España","Francia","Inglaterra","Portugal"],
      },
    ];

  constructor(private router: Router, private alertController: AlertController) {
    addIcons({addCircleOutline})
  }

  actionSheetButtons2 = [
    {
      text: 'Abandonar desafio teorico',
      role: 'destructive',
      handler: () => {
        this.router.navigate(['/home']);
        this.indice = 0;
      }
    },
    {
      text: 'Continuar',
      role: 'cancel',
      data: {
        action: 'cancel',
      },
    },
  ];

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Fin del desafío',
      message: 'Has llegado al final del desafío teórico.',
      buttons: ['OK'],
    });
    await alert.present();

    this.router.navigate(['/home']);
    this.indice = 0
  }

  sumar() {
    this.indice++;
  }

  restar() {
    this.indice--;
  }

}
