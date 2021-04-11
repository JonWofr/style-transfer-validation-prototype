import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { StyleImage } from 'src/app/models/style-image.model';

import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Thumbs,
  Controller,
  Swiper,
  Mousewheel,
} from 'swiper/core';

SwiperCore.use([
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Thumbs,
  Controller,
  Mousewheel,
]);

@Component({
  selector: 'create-image-style-slider',
  templateUrl: './image-style-slider.component.html',
  styleUrls: ['./image-style-slider.component.scss'],
})
export class ImageStyleSliderComponent implements OnInit {
  constructor(private route: Router) {}

  @Output() clickAddImageButton = new EventEmitter<void>();

  @Input() selectedImageIndex = 0;
  @Output() selectedImageIndexChange = new EventEmitter<number>();

  @Input() selectedStyleIndex: number;
  @Output() changeSelectedStyleIndex = new EventEmitter<number>();

  @Input() matchingStylizedImagePreviews: {
    publicUrl: string;
    appliedStyleImageName: string;
  }[] = [];
  @Input() styleImages: StyleImage[] = [];

  @Input() uploadedImage = false;

  showAttentionSeekerUpload = true;

  @Input() shouldShowFitStyleView = false;
  @Output() changeShouldShowFitStyleView = new EventEmitter<boolean>();

  _isUploadingImage: boolean;
  @Input() set isUploadingImage(uploading: boolean) {
    if (this.imgSwiper) {
      this.imgSwiper.slideTo(0);
      this.updateSelectedImageIndex(0);
      setTimeout(() => {
        this.imgSwiper.update();
      }, 1000);
    }
    this._isUploadingImage = uploading;
  }
  get isUploadingImage() {
    return this._isUploadingImage;
  }

  @Output() submitForm = new EventEmitter<string>();

  isHorizontalMode = true;

  imgSwiper: Swiper;
  styleSwiper: Swiper;

  imageActive = false;

  ngOnInit(): void {}

  @ViewChild('swiperSlide') set swiperSlide(el: ElementRef) {}

  @ViewChild('imgSwiper') set _imgSwiper(el: ElementRef) {
    if (el) {
      this.imgSwiper = new Swiper('.img-swiper', {
        slidesPerView: 'auto',
        spaceBetween: 16,
        freeMode: true,
        slidesOffsetAfter: 16,
        on: {
          afterInit: () => {
            setTimeout(() => {
              this.imgSwiper.update();
            });
          },
        },
        breakpoints: {
          1000: {
            direction: 'vertical',
          },
        },
      });
      this.isHorizontalMode = this.imgSwiper.params.direction == 'horizontal';
    }
  }

  @ViewChild('styleSwiper') set _styleSwiper(el: ElementRef) {
    if (el) {
      this.styleSwiper = new Swiper('.style-swiper', {
        slidesPerView: 'auto',
        spaceBetween: 16,
        freeMode: true,
        slidesOffsetAfter: 16,
        breakpoints: {
          1000: {
            direction: 'vertical',
            slidesPerColumnFill: 'row',
            spaceBetween: 32,
            slidesPerColumn: 2,
          },
        },
        on: {
          click: (swiper: Swiper) => {
            this.updateSelectedStyleIndex(swiper.clickedIndex);
          },
          afterInit: () => {
            setTimeout(() => {
              this.styleSwiper.update();
            });
          },
        },
      });
      this.isHorizontalMode = this.styleSwiper.params.direction == 'horizontal';
    }
  }

  toggleImage(shouldShowImages: boolean) {
    this.imageActive = shouldShowImages;
  }

  finished() {
    if (this.selectedStyleIndex !== undefined) {
      this.route.navigate(['shop/1']);
    } else {
      alert('please select a style first');
    }
  }

  updateSelectedStyleIndex(index: number) {
    if (index !== undefined) {
      this.selectedStyleIndex = index;
      this.changeSelectedStyleIndex.emit(index);
      setTimeout(() => {
        this.imgSwiper.update();
        this.imgSwiper.slideTo(0);
      }, 200);
    }
  }

  updateSelectedImageIndex(index: number) {
    if (index !== undefined) {
      this.selectedImageIndex = index;
      this.selectedImageIndexChange.emit(index);
    }
  }

  openUploadModal() {
    this.clickAddImageButton.emit();
    this.showAttentionSeekerUpload = false;
  }
}
