import * as functions from 'firebase-functions';
import { sendMail } from '../utils/mail-service';
import { StylizationJob } from '../models/stylization-job.model';

export const onCreateStylizationJob = async (
  snapshot: functions.firestore.QueryDocumentSnapshot,
  context: functions.EventContext
) => {
  const stylizationJob = snapshot.data() as StylizationJob;
  const emailBody = `
            <h1>
                Es gibt Arbeit zu tun
            </h1>
            <p>
                Ein neuer Job ist reingekommen. Hier die Daten dazu: <br>
                <br>
                Content image: <a href=${stylizationJob.contentImagePublicUrl}>${stylizationJob.contentImagePublicUrl}</a> <br>
                Style image: <a href=${stylizationJob.styleImagePublicUrl}>${stylizationJob.styleImagePublicUrl}</a>
            </p>
        `;
  await sendMail('jonas-wolfram@web.de', 'Neuer Job', emailBody);
};
