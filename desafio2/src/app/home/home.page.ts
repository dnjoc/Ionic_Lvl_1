import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicSlides } from '@ionic/angular';
import { Swiper } from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  swiperModules = [IonicSlides];
  @ViewChild('swiper')
  swiperRef: ElementRef | undefined;
  swiper?: Swiper;

  constructor() {}

  swiperReady() {
    this.swiper = this.swiperRef?.nativeElement.swiper;
  }
  goNext() {
    console.log("click al next");
    this.swiper?.slideNext();
  }
  goPrev() {
    console.log("click al prev");
    this.swiper?.slidePrev();
  }
  
  swiperSlideChanged(e: any) {
    console.log(`changed: `, e);
  }
}

