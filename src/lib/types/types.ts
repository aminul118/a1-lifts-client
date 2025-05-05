export type Children = Readonly<{
  children: React.ReactNode;
}>;

export type Params = {
  params: Promise<{ id: string }>;
};

export interface TypewriterProps {
  words: string[];
  loop?: number;
  typeSpeed?: number;
  deleteSpeed?: number;
  delaySpeed?: number;
  className?: string;
}

export type Banner = {
  heading?: string;
  description?: string;
  className?: string;
  backgroundImagePath?: string;
};

export type Services = {
  service: string;
  image: string;
  details: string[];
};