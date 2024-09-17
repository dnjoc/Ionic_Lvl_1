import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgFor } from "@angular/common";
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonChip, IonIcon, IonLabel, IonAvatar, IonButtons, IonButton, IonImg, IonAlert, IonActionSheet, IonSegmentButton, IonSegment, IonFooter, IonToast } from '@ionic/angular/standalone';
import { heart, addCircle, home, pin, star, call, globe, basket, barbell, trash, person, caretForwardCircle, readerOutline, logoYoutube, addCircleOutline, newspaperOutline, documentAttachOutline, trailSignOutline } from "ionicons/icons";
import { addIcons } from 'ionicons';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonToast, IonFooter, IonSegment, IonSegmentButton, IonActionSheet, IonAlert, IonImg, IonButton, IonButtons, IonAvatar, IonLabel, IonIcon, IonChip, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonHeader, IonToolbar, IonTitle, IonContent, NgFor, RouterLink],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePage {
  videos: any = [
    {
      "id": 1,
      "title": "Introducción a la inteligencia artificial",
      "description": "Aprende los conceptos básicos de la inteligencia artificial en este video introductorio.",
      "views": 12345,
      "likes": 678,
      "dislikes": 12,
      "duration": "12:30",
      "url": "https://www.youtube.com/watch?v=video_id_1",
      "urlImg": "https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW50ZWxpZ2VuY2lhJTIwYXJ0aWZpY2lhbHxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      "id": 2,
      "title": "Recetas saludables para la semana",
      "description": "Descubre deliciosas recetas saludables que puedes preparar durante toda la semana.",
      "views": 54321,
      "likes": 987,
      "dislikes": 21,
      "duration": "15:45",
      "url": "https://www.youtube.com/watch?v=video_id_2",
      "urlImg": "https://media.istockphoto.com/id/1479189161/es/foto/hermosa-joven-preparando-s%C3%A1ndwiches-para-la-reuni%C3%B3n-social.webp?b=1&s=170667a&w=0&k=20&c=PjIqbfV2T8JX0oZ7pTF9hroQsboWIwak6h_kiP6MHys="
    },
    {
      "id": 3,
      "title": "Rutina de ejercicios en casa",
      "description": "Sigue esta rutina de ejercicios para mantenerte en forma desde la comodidad de tu hogar.",
      "views": 8765,
      "likes": 234,
      "dislikes": 4,
      "duration": "20:10",
      "url": "https://www.youtube.com/watch?v=video_id_3",
      "urlImg": "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGVqZXJjaWNpb3N8ZW58MHx8MHx8fDA%3D"
    },
    {
      "id": 4,
      "title": "Tutorial de maquillaje natural",
      "description": "Aprende a crear un look de maquillaje natural y radiante con estos consejos y trucos.",
      "views": 34567,
      "likes": 567,
      "dislikes": 9,
      "duration": "8:55",
      "url": "https://www.youtube.com/watch?v=video_id_4",
      "urlImg": "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFxdWlsbGFqZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      "id": 5,
      "title": "Reseña de la última película",
      "description": "Analizamos en detalle la trama, actuaciones y efectos especiales de la película más reciente.",
      "views": 7654,
      "likes": 123,
      "dislikes": 2,
      "duration": "18:20",
      "url": "https://www.youtube.com/watch?v=video_id_5",
      "urlImg": "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVsaWN1bGF8ZW58MHx8MHx8fDA%3D"
    },
    {
      "id": 6,
      "title": "Vlog de viaje: Explorando Nueva York",
      "description": "Acompáñanos en este emocionante vlog mientras recorremos los lugares más icónicos de Nueva York.",
      "views": 23456,
      "likes": 345,
      "dislikes": 6,
      "duration": "25:30",
      "url": "https://www.youtube.com/watch?v=video_id_6",
      "urlImg": "https://images.unsplash.com/photo-1418075285575-c402f1f7340f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG5ldyUyMHlvcmt8ZW58MHx8MHx8fDA%3D"
    },
    {
      "id": 7,
      "title": "Consejos para el cuidado de las plantas",
      "description": "Descubre cómo mantener tus plantas felices y saludables con estos consejos de expertos.",
      "views": 6543,
      "likes": 98,
      "dislikes": 1,
      "duration": "10:15",
      "url": "https://www.youtube.com/watch?v=video_id_7",
      "urlImg": "https://images.unsplash.com/photo-1590253053697-6084dbc9ff78?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dmVnZXRhY2lvbnxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      "id": 8,
      "title": "Entrevista con un astronauta",
      "description": "Conoce las experiencias en el espacio de un astronauta que vivió en la Estación Espacial Internacional.",
      "views": 5432,
      "likes": 76,
      "dislikes": 3,
      "duration": "14:05",
      "url": "https://www.youtube.com/watch?v=video_id_8",
      "urlImg": "https://images.unsplash.com/photo-1564053051381-5cb91813736b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFzdHJvbmF1dGF8ZW58MHx8MHx8fDA%3D"
    },
    {
      "id": 9,
      "title": "Tutorial de guitarra para principiantes",
      "description": "Aprende los conceptos básicos de tocar la guitarra y toca tus primeras canciones en poco tiempo.",
      "views": 9876,
      "likes": 234,
      "dislikes": 5,
      "duration": "22:40",
      "url": "https://www.youtube.com/watch?v=video_id_9",
      "urlImg": "https://images.unsplash.com/photo-1535587566541-97121a128dc5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGd1aXRhcnJhfGVufDB8fDB8fHww"
    },
    {
      "id": 10,
      "title": "Recorrido por un parque temático",
      "description": "Disfruta de la emoción y la diversión en nuestro recorrido por las atracciones de este parque temático.",
      "views": 4567,
      "likes": 67,
      "dislikes": 0,
      "duration": "16:30",
      "url": "https://www.youtube.com/watch?v=video_id_10",
      "urlImg": "https://images.unsplash.com/photo-1586836476603-ce713984045e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBhcnF1ZSUyMHRlbWF0aWNvfGVufDB8fDB8fHww"
    },
    {
      "id": 11,
      "title": "Cocinando platos exóticos",
      "description": "Explora sabores únicos y cocina platos exóticos de diferentes partes del mundo con nosotros.",
      "views": 7654,
      "likes": 123,
      "dislikes": 3,
      "duration": "19:25",
      "url": "https://www.youtube.com/watch?v=video_id_11",
      "urlImg": "https://images.unsplash.com/photo-1519624213695-6819a985fb0b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29taWRhJTIwZXhvdGljYXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      "id": 12,
      "title": "Tutorial de baile: Pasos básicos de salsa",
      "description": "Aprende los movimientos básicos de la salsa y sorprende en la pista de baile.",
      "views": 5432,
      "likes": 65,
      "dislikes": 1,
      "duration": "11:15",
      "url": "https://www.youtube.com/watch?v=video_id_12",
      "urlImg": "https://media.istockphoto.com/id/1717120928/es/foto/retrato-pareja-mayor-bailando-juntos.webp?b=1&s=170667a&w=0&k=20&c=cQLZ6eNUrrvoDoft2qcuJn2kVpTG2_xNn26QoM_5ET0="
    },
    {
      "id": 13,
      "title": "Reseña de videojuegos: Último lanzamiento",
      "description": "Analizamos a fondo el último videojuego que ha causado sensación en el mundo gamer.",
      "views": 8765,
      "likes": 234,
      "dislikes": 6,
      "duration": "17:50",
      "url": "https://www.youtube.com/watch?v=video_id_13",
      "urlImg": "https://images.unsplash.com/photo-1591976711776-4a91184e0bf7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHZpZGVvanVlZ298ZW58MHx8MHx8fDA%3D"
    },
    {
      "id": 14,
      "title": "Tutorial de origami: Cómo hacer grullas de papel",
      "description": "Aprende la hermosa técnica del origami y crea grullas de papel con este tutorial paso a paso.",
      "views": 2345,
      "likes": 34,
      "dislikes": 0,
      "duration": "9:10",
      "url": "https://www.youtube.com/watch?v=video_id_14",
      "urlImg": "https://media.istockphoto.com/id/1441296523/es/foto/desarrollo-de-habilidades.webp?b=1&s=170667a&w=0&k=20&c=aGjNPI_Se_3xg4qq4cyhcab3DwwUzlxy10c8dZ6tZbw="
    },
    {
      "id": 15,
      "title": "Consejos de moda para el verano",
      "description": "Descubre las últimas tendencias de moda para lucir increíble durante la temporada de verano.",
      "views": 5432,
      "likes": 76,
      "dislikes": 2,
      "duration": "13:40",
      "url": "https://www.youtube.com/watch?v=video_id_15",
      "urlImg": "https://media.istockphoto.com/id/2060305725/es/foto/desempacando-mis-preciadas-pertenencias-del-maletero-de-un-coche.webp?b=1&s=170667a&w=0&k=20&c=qKjw9rg3nzJgoAymRyx3S0cUmYWwMMb8f0dvORJLBXs="
    },
    {
      "id": 16,
      "title": "Viaje en crucero: Experiencia en alta mar",
      "description": "Embárcate en un emocionante viaje en crucero y descubre las maravillas del océano.",
      "views": 9876,
      "likes": 123,
      "dislikes": 4,
      "duration": "21:15",
      "url": "https://www.youtube.com/watch?v=video_id_16",
      "urlImg": "https://media.istockphoto.com/id/599881398/es/foto/3d-crucero-vacaciones-vacaciones-verano-concepto-de-ilustraci%C3%B3n.webp?b=1&s=170667a&w=0&k=20&c=YZFuMOVtUCGPDOOu3muXQ7GRi1VrSFJyfs18x_XSgq4="
    },
    {
      "id": 17,
      "title": "Aprende a tejer tu bufanda",
      "description": "Si siempre quisiste aprender a tejer, este tutorial te guiará para crear tu propia bufanda.",
      "views": 4567,
      "likes": 65,
      "dislikes": 1,
      "duration": "14:20",
      "url": "https://www.youtube.com/watch?v=video_id_17",
      "urlImg": "https://media.istockphoto.com/id/187670186/es/foto/pa%C3%B1uelo-azul-de-invierno.webp?b=1&s=170667a&w=0&k=20&c=SJx2ABXgp76Xi9sMzL4jbX7zvw5rio0NCPCzXV2ngB4="
    },
    {
      "id": 18,
      "title": "Documental de vida marina",
      "description": "Sumérgete en las profundidades del océano y descubre la asombrosa vida marina que habita en él.",
      "views": 7654,
      "likes": 234,
      "dislikes": 7,
      "duration": "26:30",
      "url": "https://www.youtube.com/watch?v=video_id_18",
      "urlImg": "https://media.istockphoto.com/id/498283106/es/foto/underwater-buceador-explore-arrecife-de-coral-del-mar-y-disfrute-de-la-vida.webp?b=1&s=170667a&w=0&k=20&c=L5Qhup6zrdKNc52chTra0MZ0xjShNvhWThddLAq2TvQ="
    },
    {
      "id": 19,
      "title": "Entrenamiento para maratón: Preparación y consejos",
      "description": "Si estás pensando en correr un maratón, estos consejos y entrenamientos te serán de gran ayuda.",
      "views": 2345,
      "likes": 56,
      "dislikes": 0,
      "duration": "16:55",
      "url": "https://www.youtube.com/watch?v=video_id_19",
      "urlImg": "https://images.unsplash.com/photo-1590333748338-d629e4564ad9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFyYXRvbnxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      "id": 20,
      "title": "Tour por mi estudio de arte",
      "description": "Descubre dónde sucede la magia en este recorrido por mi espacio de creación artística.",
      "views": 5432,
      "likes": 87,
      "dislikes": 3,
      "duration": "12:05",
      "url": "https://www.youtube.com/watch?v=video_id_20",
      "urlImg": "https://images.unsplash.com/photo-1600694795720-8f56ce39c094?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGVzdHVkaW8lMjBkZSUyMGFydGV8ZW58MHx8MHx8fDA%3D"
    }
  ]
  constructor() {
    addIcons({heart, addCircle, home, pin, star, call, globe, basket, barbell, trash, person, caretForwardCircle, readerOutline, logoYoutube, addCircleOutline, newspaperOutline, documentAttachOutline, trailSignOutline});
  }
  isToastOpen: boolean = false;
  toastMessage: string = "";
  alertButtons = ['Cerrar'];
  setOpen(isOpen: boolean, data: string) {
    this.isToastOpen = isOpen;
    this.toastMessage = data;
  }
  actionSheetButtons = [
    {
      text: 'Eliminar',
      role: 'destructive',
      data: {
        action: 'delete',
      },
    },
    {
      text: 'Compartir',
      data: {
        action: 'share',
      },
    },
    {
      text: 'Cancelar',
      role: 'cancel',
      data: {
        action: 'cancel',
      },
    },
  ];

}

