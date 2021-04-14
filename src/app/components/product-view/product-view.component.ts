import { Component, OnInit } from '@angular/core';
import {
  AngularFirestore,
  DocumentData,
  DocumentReference,
  DocumentSnapshot,
  SnapshotOptions,
} from '@angular/fire/firestore';

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

  stylizedImages = [];

  selectedStylizedImageIndex = 0;

  stylizedImagesCollection = this.firestore
    .collection('stylized-images')
    .ref.withConverter(this.getCollectionConverter<StylizedImage>(false));

  userId: string;

  constructor(
    private firestore: AngularFirestore,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  async ngOnInit(): Promise<void> {
    this.userId = this.route.snapshot.queryParamMap.get('userId');
    if (!this.userId) {
      await this.router.navigateByUrl('');
      return;
    }
    this.stylizedImages = await this.fetchStylizedImages(this.userId);
    if (this.stylizedImages.length === 0) {
      await this.router.navigateByUrl('');
      return;
    }
    new Swiper('.product-demo-swiper', {
      slidesPerView: 1,
      spaceBetween: 16,
      autoplay: {
        delay: 4000,
      },
      observer: true,
    });
  }

  getCollectionConverter<T>(shouldAddId) {
    const collectionConverter = {
      toFirestore(documentData: T): DocumentData {
        return documentData as DocumentData;
      },
      fromFirestore(
        snapshot: DocumentSnapshot<DocumentData>,
        options: SnapshotOptions
      ): T {
        const data = snapshot.data(options);
        if (shouldAddId) {
          data.id = snapshot.id;
        }
        return data as T;
      },
    };
    return collectionConverter;
  }

  async fetchStylizedImages(userId: string) {
    const query = await this.stylizedImagesCollection
      .where('userId', '==', userId)
      .get();
    return query.docs.map((document) => document.data());
  }

  onClickStylizedImage(index: number) {
    this.selectedStylizedImageIndex = index;
  }
}
