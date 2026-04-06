
export interface Course {
  id: string;
  tag: string;
  title: string;
  description: string;
  meta: string;
  price: string;
  color: string; // Used for secondary accents (red, green, yellow)
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  title: string;
}
