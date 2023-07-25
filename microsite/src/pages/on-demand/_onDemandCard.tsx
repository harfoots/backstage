export interface IOnDemandData {
  title: string;
  category: string;
  description: string;
  date: string;
  youtubeUrl: string;
  youtubeImgUrl: string;
  rsvpUrl: string;
  eventUrl: string;
  children?: React.ReactNode;
}