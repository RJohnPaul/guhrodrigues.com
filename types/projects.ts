import { StaticImageData } from "next/image";

export interface ProjectsProps {
  id: number;
  image: StaticImageData;
  title: string;
  smallDescription: string;
  description: {
    content: string;
  }[];
  techs: {
    image: StaticImageData;
    name: string;
  }[];
  code: string;
  visit?: string;
  slug: string;
}
