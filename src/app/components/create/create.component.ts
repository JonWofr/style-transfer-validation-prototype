import { AfterViewInit, Component, OnInit } from '@angular/core';
import { slideInOutBottom } from 'src/app/components/shared/animations';
import { ContentImage } from '../../models/content-image.model';
import { StyleImage } from '../../models/style-image.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { StylizationJob } from 'src/app/models/stylization-job.model';

@Component({
  selector: 'page-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  animations: [slideInOutBottom],
})
export class CreateComponent implements OnInit {
  constructor(
    private auth: AngularFireAuth,
    private firestore: AngularFirestore
  ) {}

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
    this.contentImages = this.stylizedImages;
  }

  openUploadModal() {
    this.showUploadModal = true;
  }

  uploadImage(imageFile: File | string | null) {
    this.showUploadModal = false;
    if (imageFile) {
      const resource = new FormData();
      resource.append('name', 'test');
      resource.append('contentImage', imageFile);

      this.isUploadingImage = true;
      this.imageSrc = imageFile as string;
    }
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

  async onSubmitForm(email: string) {
    let user = await this.auth.currentUser;
    // If the user deletes all application data after the site has been loaded
    if (user === null) {
      user = (await this.auth.signInAnonymously()).user;
    }

    const collectionRef = this.firestore.collection('stylization-jobs').ref;
    const query = await collectionRef.where('userId', '==', user.uid).get();
    if (query.size < 3) {
      const stylizationJob: StylizationJob = {
        userId: user.uid,
        email,
        contentImageUrl: '',
        styleImageUrl: '',
      };
      collectionRef.add(stylizationJob);
    } else {
      console.log('The maximum number has been reached for this device');
    }
  }
}
