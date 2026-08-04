export interface Partner {
  id: string;
  banner: string;        // public/images/partners/xxx.png
  alt: string;           // altテキスト
  website: string | null;
  displayOrder: number;
}
