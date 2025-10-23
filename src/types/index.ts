export interface Service {
  id: number;
  title: string;
  title_mobile?: string;
  images?: {
    desktop: string;
    mobile: string;
  };
  text: string;
  tag: string;
  fallback: string;
}

export interface Promo {
  id: number;
  img: string;
  text: {
    mobile: string;
    desktop: string;
  };
}
