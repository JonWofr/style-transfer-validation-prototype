import { Component, OnInit } from '@angular/core';
import { styleJSON } from 'src/assets/json-variables/styles';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';

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
import { ActivatedRoute, Router } from '@angular/router';
import { StylizedImage } from 'src/app/models/stylized-image.model';

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
  imageSrc = '/assets/images/output-129.jpg';

  stylizedImages = []
  styleImages = []

  selectedStyleIndex = 1;

  constructor(
    private firestore: AngularFirestore,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  async ngOnInit(): Promise<void> {
    const userId = this.route.snapshot.queryParamMap.get('userId');
    if (!userId) {
      await this.router.navigateByUrl('');
      return
    }
    this.stylizedImages = await this.fetchStylizedImages(userId); 
    if (this.stylizedImages.length === 0) {
      await this.router.navigateByUrl('');
      return
    }
    const swiper = new Swiper('.product-demo-swiper', {
      slidesPerView: 1,
      spaceBetween: 16,
      autoplay: {
        delay: 4000,
      },
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

  onClickStylizedImage(index: number) {
    this.selectedStyleIndex = index
  }
}
