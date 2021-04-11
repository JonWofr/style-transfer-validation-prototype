import * as functions from 'firebase-functions';
// import { StylizationJob } from '../models/stylization-job.model';
import { StylizedImage } from '../models/stylized-image.model';
import { sendMail } from '../utils/mail-service';

export const onCreateStylizedImage = async (
  snapshot: functions.firestore.QueryDocumentSnapshot,
  context: functions.EventContext
) => {
  try {
    const stylizedImage = snapshot.data() as StylizedImage;
    const stylizationJobDocument = await stylizedImage.stylizationJob.get();
    const stylizationJob = stylizationJobDocument.data()!;
    const emailBody = `
    <h1>
      Hooraay! Your picture has been styled. 
    </h1>
    <p>
      Check out the following link to see the outcome. <br>
      <br>
      <a href=${functions.config().frontend.url}/product-view?userId=${
      stylizationJob.userId
    }>Your stylized picture</a>
    </p>
    `;
    sendMail(stylizationJob.email, 'Your stylized picture', emailBody);
    await stylizedImage.stylizationJob.update({ status: 'COMPLETED' });
  } catch (err) {
    console.error(err);
  }
};
