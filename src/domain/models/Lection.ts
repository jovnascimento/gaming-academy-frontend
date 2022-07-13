export interface Lection {
  _id?: string;
  created_at?: Date;
  updated_at?: Date;
  name: string;
  description: string;
  video: string;
  duration: number;  
}