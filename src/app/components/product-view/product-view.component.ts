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
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss'],
})
export class ProductViewComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const swiper = new Swiper('.product-demo-swiper', {
      slidesPerView: 1,
      spaceBetween: 16,
      autoplay: {
        delay: 4000,
      },
    });
  }

  styles = styleJSON;

  imageSrc = '/assets/images/output-129.jpg';
}
