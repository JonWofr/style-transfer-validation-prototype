import * as firebase from 'firebase/app';

export interface StylizationJob {
  contentImagePublicUrl: string;
  styleImagePublicUrl: string;
  email: string;
  userId: string;
  status: 'PENDING' | 'COMPLETED';
  creationDate: firebase.default.firestore.Timestamp;
}
