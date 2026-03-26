export interface Brand {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  url: string;
  logoSrc: string;
  logoAlt: string;
}

export const brands: Brand[] = [
  {
    slug: "heartland-lawns",
    name: "Heartland Lawns",
    tagline: "Omaha's most trusted lawn care company since 1990.",
    description:
      "Voted Best of Omaha® for lawn care 16 years running, Heartland Lawns offers a complete suite of premium services — from their signature 6-Step Turf Wellness™ Program to landscape design, irrigation, tree & shrub care, and pest control. They're the standard we measure everything else against.",
    url: "https://www.heartlandlawns.com",
    logoSrc: "/logos/heartland-lawns-logo.svg",
    logoAlt: "Heartland Lawns logo",
  },
];
