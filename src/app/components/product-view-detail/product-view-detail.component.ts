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
    this.stylizedImages = await this.fetchStylizedImages(userId);
    if (this.stylizedImages.length === 0) {
      await this.router.navigateByUrl('');
      return;
    }
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

  async fetchStylizedImages(userId: string) {
    const query = await this.firestore
      .collection('stylized-images')
      .ref.where('userId', '==', userId)
      .get();
    const populatedDocuments = await Promise.all(
      query.docs.map(async (document) => {
        const documentData = document.data()
        const referenceKey = 'stylizationJob'
        const referencedDocument = await (documentData[referenceKey] as DocumentReference).get()
        documentData[referenceKey] = referencedDocument.data()
        return documentData
      }));
    return populatedDocuments as any;
  }

  toggleProductInfo(slide: number) {
    this.isDesriptionSlideActive = 0 == slide;
    this.descriptionSwiper.slideTo(slide);
  }

  descriptionSwiper: Swiper;
  isDesriptionSlideActive = true;

  styles = styleJSON;
}
