import { Component, OnInit } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
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
  stylizedImages = [];
  items = [];
  descriptionSwiper: Swiper;
  isDesriptionSlideActive = true;

  constructor(
    private firestore: AngularFirestore,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  async ngOnInit(): Promise<void> {
    const userId = this.route.snapshot.queryParamMap.get('userId');
    if (!userId) {
      await this.router.navigateByUrl('');
      return;
    }
    const stylizedImageDocuments = await this.fetchStylizedImageDocuments(
      userId
    );
    if (stylizedImageDocuments.length === 0) {
      await this.router.navigateByUrl('');
      return;
    }
    this.stylizedImages = stylizedImageDocuments.map((stylizedImageDocument) =>
      stylizedImageDocument.data()
    );
    new Swiper('.product-demo-swiper', {
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

  async fetchStylizedImageDocuments(userId: string) {
    const query = await this.firestore
      .collection('stylized-images')
      .ref.where('userId', '==', userId)
      .get();
    return query.docs;
  }

  toggleProductInfo(slide: number) {
    this.isDesriptionSlideActive = 0 == slide;
    this.descriptionSwiper.slideTo(slide);
  }
}
