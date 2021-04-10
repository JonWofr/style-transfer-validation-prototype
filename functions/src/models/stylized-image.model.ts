import { StylizationJob } from './stylization-job.model';

export interface StylizedImage {
  publicUrl: string;
  userId: string;
  stylizationJob: StylizationJob;
}
