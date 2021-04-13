import { Component, OnInit } from '@angular/core';
import {
  AngularFirestore,
  DocumentData,
  DocumentReference,
  DocumentSnapshot,
  SnapshotOptions,
} from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/app/models/item.model';
import { Product } from 'src/app/models/product.model';
import { StylizedImage } from 'src/app/models/stylized-image.model';
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
  stylizedImages: StylizedImage[] = [];
  items: Item[] = [];
  descriptionSwiper: Swiper;
  isDesriptionSlideActive = true;
  totalPrice = 0;

  stylizedImagesCollection = this.firestore
    .collection('stylized-images')
    .ref.withConverter(this.getCollectionConverter<StylizedImage>(false));
  productsCollection = this.firestore
    .collection('products')
    .ref.withConverter(this.getCollectionConverter<Product>(true));

  constructor(
    private firestore: AngularFirestore,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  async ngOnInit(): Promise<void> {
    /*     const userId = this.route.snapshot.queryParamMap.get('userId');
    if (!userId) {
      await this.router.navigateByUrl('');
      return;
    }
    const stylizedImages = await this.fetchStylizedImages(userId);
    if (stylizedImages.length === 0) {
      await this.router.navigateByUrl('');
      return;
    }
    const products = await this.fetchProducts();
    const items = stylizedImages.map((stylizedImage) => ({
      product: products.find((product) => product.name === 'Canvas'),
      stylizedImage,
      quantity: 0,
    })); */

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
    /*     this.stylizedImages = stylizedImages;
    this.items = items; */
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

  async fetchProducts() {
    const query = await this.productsCollection.get();
    return query.docs.map((document) => document.data());
  }

  toggleProductInfo(slide: number) {
    this.isDesriptionSlideActive = 0 == slide;
    this.descriptionSwiper.slideTo(slide);
  }

  decrementStepper(stylizedImageIndex: number) {
    this.items[stylizedImageIndex].quantity -= 1;
    this.updateTotalPrice();
  }

  incrementStepper(stylizedImageIndex: number) {
    this.items[stylizedImageIndex].quantity += 1;
    this.updateTotalPrice();
  }

  updateTotalPrice() {
    let totalPrice = 0;
    this.items.forEach((item) => {
      totalPrice += item.quantity * item.product.price;
    });
    this.totalPrice = totalPrice;
  }

  onClickCheckoutButton() {
    localStorage.setItem('items', JSON.stringify(this.items));
    this.router.navigateByUrl('/checkout');
  }
}
