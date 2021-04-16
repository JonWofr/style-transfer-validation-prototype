import { Component, OnInit } from '@angular/core';
import { slideInOutBottom } from 'src/app/components/shared/animations';
import { StyleImage } from '../../models/style-image.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { StylizationJob } from 'src/app/models/stylization-job.model';
import { AngularFireStorage } from '@angular/fire/storage';
import { v4 as uuidv4 } from 'uuid';
import { AngularFireAnalytics } from '@angular/fire/analytics';
import { stylizedImagePreviews } from 'src/assets/json-variables/stylizedImages';
import { styleImages } from 'src/assets/json-variables/styles';
import * as firebase from 'firebase/app';
import { initStylizedImagePreviews } from 'src/assets/json-variables/initStylizedImages';

declare const fbq: Function;

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
    private storage: AngularFireStorage,
    private analytics: AngularFireAnalytics
  ) {}

  imageSrc = '/assets/images/upload-picture.png';
  selectedFile?: File;
  shouldShowUploadModal = false;
  shouldShowResponseModal = false;
  shouldShowFitStyleView = false;

  matchingStylizedImagePreviews: {
    publicUrl: string;
    appliedStyleImageName: string;
  }[] = [];

  stylizedImagePreviews: {
    publicUrl: string;
    appliedStyleImageName: string;
  }[] = initStylizedImagePreviews;

  styleImages: StyleImage[] = styleImages;
  selectedStyleImageIndex = 0;

  isUploadingImage = false;
  shouldShowSpinner = false;

  submittedImagesCount = 0;
  maxSubmittedImagesCount = 3;
  hasCreatedNewDocument = false;

  ngOnInit(): void {
    this.matchingStylizedImagePreviews = this.stylizedImagePreviews;
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
    this.matchingStylizedImagePreviews =
      stylizedImagePreviews[
        this.styleImages[this.selectedStyleImageIndex].name
      ];
    // this.matchingStylizedImagePreviews = stylizedImagePreviews.filter(
    //   (stylizedImagePreview) =>
    //     stylizedImagePreview.appliedStyleImageName ===
    //     this.styleImages[this.selectedStyleImageIndex].name
    // );
  }

  async onSubmitForm(email: string) {
    try {
      const userId = await this.getUserId();
      const colRef = this.firestore.collection('stylization-jobs').ref;
      const query = await colRef.where('userId', '==', userId).get();
      const querySize = query.size;

      if (querySize < 3) {
        this.shouldShowSpinner = true;
        const contentImagePublicUrl = await this.uploadFile(this.selectedFile);
        const selectedStyleImage = this.styleImages[
          this.selectedStyleImageIndex
        ];
        const stylizationJob: StylizationJob = {
          userId,
          email,
          contentImagePublicUrl,
          styleImagePublicUrl: selectedStyleImage.publicUrl,
          status: 'PENDING',
          creationDate: firebase.default.firestore.Timestamp.fromMillis(
            Date.now()
          ),
        };
        await colRef.add(stylizationJob);
        this.hasCreatedNewDocument = true;
        this.submittedImagesCount = querySize + 1;
        this.shouldShowSpinner = false;
        this.analytics.logEvent('generate_lead', {
          value: selectedStyleImage.name,
        });
        fbq('track', 'Lead', { content_name: selectedStyleImage.name });
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
    this.toggleFitStyleView(false);
  }

  toggleFitStyleView(shouldShow: boolean) {
    this.shouldShowFitStyleView = shouldShow;
  }

  shuffle(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
}
