export interface StylizationJob {
  contentImagePublicUrl: string;
  styleImagePublicUrl: string;
  email: string;
  userId: string;
  status: 'PENDING' | 'COMPLETED';
}
