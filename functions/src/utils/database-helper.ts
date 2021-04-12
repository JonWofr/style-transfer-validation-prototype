import * as admin from 'firebase-admin';

export const getCollectionConverter = <
  T
>(): admin.firestore.FirestoreDataConverter<T> => ({
  toFirestore: (data: T) => data as admin.firestore.DocumentData,
  fromFirestore: (document: admin.firestore.QueryDocumentSnapshot) =>
    document.data() as T,
});
