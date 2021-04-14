import { StylizationJob } from './stylization-job.model';
import { DocumentReference } from '@angular/fire/firestore';

export interface StylizedImage {
  publicUrl: string;
  userId: string;
  stylizationJob: DocumentReference<StylizationJob>;
  slideshowImagePublicUrls: string[];
}
