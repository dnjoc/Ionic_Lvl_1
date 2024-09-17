import { Component } from '@angular/core';
import { IonHeader, IonAccordion, IonToolbar, IonTitle, IonContent, IonImg, IonButtons, IonFooter, IonLabel, IonAccordionGroup, IonItem, IonButton, IonIcon, IonText } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonText, IonIcon, IonButton, IonItem, IonAccordionGroup, IonLabel, IonAccordion, IonFooter, IonButtons, IonImg, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  constructor() {}
}
