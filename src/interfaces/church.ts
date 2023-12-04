export interface Church {
  id: string;
  address: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  name: string;
  images: {
    image_intro: string;
    image_intro_alt: string;
    float_intro: string;
    image_intro_caption: string;
    image_fulltext: string;
    image_fulltext_alt: string;
    float_fulltext: string;
    image_fulltext_caption: string;
  };
}
