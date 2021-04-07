import { Component, OnInit } from '@angular/core';
import { styleJSON } from 'src/assets/json-variables/styles';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Thumbs,
  Controller,
  Swiper,
  Autoplay,
} from 'swiper/core';

SwiperCore.use([
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Thumbs,
  Controller,
  Autoplay,
]);

@Component({
  selector: 'app-product-view-detail',
  templateUrl: './product-view-detail.component.html',
  styleUrls: ['./product-view-detail.component.scss'],
})
export class ProductViewDetailComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const swiper1 = new Swiper('.product-demo-swiper', {
      slidesPerView: 1,
      spaceBetween: 16,
      autoplay: {
        delay: 4000,
      },
    });
    this.descriptionSwiper = new Swiper('.product-info-swiper', {
      slidesPerView: 1,
      spaceBetween: 16,
      allowTouchMove: false,
    });
  }

  toggleProductInfo(slide: number) {
    this.isDesriptionSlideActive = 0 == slide;
    this.descriptionSwiper.slideTo(slide);
  }

  descriptionSwiper: Swiper;
  isDesriptionSlideActive = true;

  styles = styleJSON;
}
