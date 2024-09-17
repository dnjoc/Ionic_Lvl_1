import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonButton, IonIcon, IonBackButton, IonItem, IonLabel, IonText } from '@ionic/angular/standalone';

@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.page.html',
  styleUrls: ['./iniciosesion.page.scss'],
  standalone: true,
  imports: [IonText, IonLabel, IonItem, IonBackButton, IonIcon, IonButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule ]
})

export class IniciosesionPage {


  constructor() { }

}
