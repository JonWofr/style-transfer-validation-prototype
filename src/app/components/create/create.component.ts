import { Component, OnInit } from '@angular/core';
import { slideInOutBottom } from 'src/app/components/shared/animations';
import { StyleImage } from '../../models/style-image.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { StylizationJob } from 'src/app/models/stylization-job.model';
import { AngularFireStorage } from '@angular/fire/storage';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'page-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  animations: [slideInOutBottom],
})
export class CreateComponent implements OnInit {
  constructor(
    private auth: AngularFireAuth,
    private firestore: AngularFirestore,
    private storage: AngularFireStorage
  ) {}

  imageSrc = '/assets/images/upload-picture.svg';
  selectedFile?: File;
  shouldShowUploadModal = false;
  shouldShowResponseModal = false;

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

  submittedImagesCount = 0;
  maxSubmittedImagesCount = 3;
  hasCreatedNewDocument = false;

  ngOnInit(): void {
    this.contentImages = this.stylizedImages;
  }

  toggleUploadModal(shouldShow: boolean) {
    this.shouldShowUploadModal = shouldShow;
  }

  async onSelectFile(file: File) {
    try {
      this.toggleUploadModal(false);
      this.selectedFile = file;
      this.imageSrc = await this.readFile(file);
    } catch (error) {
      console.error(error);
    }
  }

  readFile(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.addEventListener('load', () => {
        resolve(fileReader.result as string);
      });
      fileReader.addEventListener('error', reject);
      fileReader.readAsDataURL(file);
    });
  }

  onChangeSelectedStyleIndex(index: number) {
    this.selectedStyleImageIndex = index;
    this.contentImages = this.stylizedImages.filter((image) => {
      return (
        image.image.appliedStyle ===
        this.styleImages[this.selectedStyleImageIndex].artist
      );
    });
  }

  async onSubmitForm(email: string) {
    try {
      const userId = await this.getUserId();
      const colRef = this.firestore.collection('stylization-jobs').ref;
      const query = await colRef.where('userId', '==', userId).get();
      const querySize = query.size;

      if (querySize < 3) {
        const contentImagePublicUrl = await this.uploadFile(this.selectedFile);
        const stylizationJob: StylizationJob = {
          userId,
          email,
          contentImagePublicUrl,
          styleImagePublicUrl: this.styleImages[this.selectedStyleImageIndex]
            .image.publicUrl,
        };
        await colRef.add(stylizationJob);
        this.hasCreatedNewDocument = true;
        this.submittedImagesCount = querySize + 1;
      } else {
        this.hasCreatedNewDocument = false;
        this.submittedImagesCount = querySize;
      }
      this.toggleResponseModal(true);
    } catch (error) {
      console.error(error);
    }
  }

  async uploadFile(file: File): Promise<string> {
    const filePath = `content-images/${uuidv4()}`;
    const fileRef = this.storage.ref(filePath);
    await fileRef.put(file);
    const publicUrl = await fileRef.getDownloadURL().toPromise();
    return publicUrl;
  }

  async getUserId(): Promise<string> {
    let user = await this.auth.currentUser;
    // If the user deletes all application data after the site has been loaded
    if (user === null) {
      user = (await this.auth.signInAnonymously()).user;
    }
    return user.uid;
  }

  toggleResponseModal(shouldShow: boolean) {
    this.shouldShowResponseModal = shouldShow;
  }

  onClickSendAnotherButton() {
    this.toggleResponseModal(false);
  }
}
