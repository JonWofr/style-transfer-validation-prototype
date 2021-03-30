import { AfterViewInit, Component, OnInit } from '@angular/core';
import { slideInOutBottom } from 'src/app/components/shared/animations';
import { ContentImage } from '../../models/content-image.model';
import { StyleImage } from '../../models/style-image.model';

@Component({
  selector: 'page-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  animations: [slideInOutBottom],
})
export class CreateComponent implements OnInit {
  constructor() {}

  imageSrc = '/assets/images/upload-picture.svg';
  showUploadModal = false;

  contentImages = [];
  selectedContentImageIndex = 0;

  stylizedImages = [
    {
      image: {
        publicUrl: '/assets/images/husky-styled.jpg',
        appliedStyle: 'Abstract',
      },
    },
    {
      image: {
        publicUrl: '/assets/images/husky-unstyled.jpg',
        appliedStyle: 'Abstract',
      },
    },
    {
      image: {
        publicUrl: '/assets/images/canvas-demo.png',
        appliedStyle: 'Abstract2',
      },
    },
    {
      image: {
        publicUrl: '/assets/images/alu-demo.png',
        appliedStyle: 'Abstract2',
      },
    },
  ];

  styleImages: StyleImage[] = [
    {
      image: {
        filename: 'abstract.jpg',
        size: 703080,
        publicUrl:
          'https://storage.googleapis.com/petai-bdd53.appspot.com/style-images/abstract.jpg',
        width: 1000,
        height: 1000,
        timestamp: {
          _seconds: 1617092862,
          _nanoseconds: 547000000,
        },
      },
      artist: 'Abstract',
      name: 'Abstract',
      id: 'yG571A7o01wabNulmA3K',
    },
    {
      image: {
        filename: 'abstract.jpg',
        size: 703080,
        publicUrl:
          'https://storage.googleapis.com/petai-bdd53.appspot.com/style-images/abstract.jpg',
        width: 1000,
        height: 1000,
        timestamp: {
          _seconds: 1617092862,
          _nanoseconds: 547000000,
        },
      },
      artist: 'Abstract2',
      name: 'Abstract',
      id: 'yG571A7o01wabNulmA3K',
    },
  ];
  selectedStyleImageIndex = 0;

  isUploadingImage = false;
  isApplyingStyle = false;

  ngOnInit(): void {
    this.contentImages = this.stylizedImages.filter((image) => {
      console.log('done');
      return (
        image.image.appliedStyle ==
        this.styleImages[this.selectedStyleImageIndex].artist
      );
    });
    console.log('hello');
  }

  openUploadModal() {
    this.showUploadModal = true;
  }

  uploadImage(imageFile: File | null) {
    this.showUploadModal = false;
  }

  selectedStyle(index: number) {
    this.selectedStyleImageIndex = index;
    this.contentImages = this.stylizedImages.filter((image) => {
      return (
        image.image.appliedStyle ==
        this.styleImages[this.selectedStyleImageIndex].artist
      );
    });
  }

  fitStyle(element) {}
}
