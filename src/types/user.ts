export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: string;
  facebookId?: string;
  facebookUrl?: string;
  instagramId?: string;
  instagramUrl?: string;
  instagramUsername?: string;
  instagramAccountType?: string;
  instagramMediaCount?: number;
}