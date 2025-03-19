import { Trump, Elon, Modi } from "src/assets/img";

export type HackerTestimonialsData = {
  id: number;
  name: string;
  tagline: string;
  description: string;
  image: string;
};

const hackerTestimonialsData: HackerTestimonialsData[] = [
  {
    id: 0,
    name: "Trump",
    tagline: "Undergraduate Hacker",
    description:
      "Now describes a genuine journey of an undergraduate with limited coding experience who found valuable mentorship and built a meaningful project connecting students.",
    image: Trump,
  },
  {
    id: 1,
    name: "Elon",
    tagline: "Experienced Hacker, High School Student, STEM Field Hacker",
    description:
      "Highlights how Bolt.new welcomes younger participants with ambitious ideas, describing a realistic project focused on environmental monitoring rather than unrealistic futuristic concepts.",
    image: Elon,
  },
  {
    id: 2,
    name: "Modi",
    tagline: "First Time Hacker, High School Student, Non-STEM Field Hacker",
    description:
      "Emphasizes inclusivity for beginners from non-technical backgrounds, describing the journey of learning new skills and the supportive environment.",
    image: Modi,
  },
];

export default hackerTestimonialsData;
