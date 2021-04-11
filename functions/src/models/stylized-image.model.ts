import * as admin from 'firebase-admin';
import { StylizationJob } from './stylization-job.model';

export interface StylizedImage {
  publicUrl: string;
  userId: string;
  stylizationJob: admin.firestore.DocumentReference<StylizationJob>;
}
