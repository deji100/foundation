export type initiative = {
    title: string,
    description: string,
    image: string,
    alt: string,
    link: string,
}

export interface NewsCardProps {
  title: string;
  description: string;
  description_paragraph_2: string;
  image: string;
  date: string;
}