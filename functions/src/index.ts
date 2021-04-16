import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

// Has to be initialized as soon as possible because user code relies on it
admin.initializeApp();

import { app } from './http';
// import { onCreateStylizedImage } from './firestore/stylized-images';
import { onCreateStylizationJob } from './firestore/stylization-jobs';

export const api = functions.region('europe-west3').https.onRequest(app);
export const createStylizationJob = functions
  .region('europe-west3')
  .firestore.document('stylization-jobs/{stylizationJobId}')
  .onCreate(onCreateStylizationJob);
/* export const createStylizedImage = functions.firestore
  .document('stylized-images/{stylizedImageId}')
  .onCreate(onCreateStylizedImage); */
