import { HoverEffect } from "./ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="w-[85vw] mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Understanding Music Theory",
    description:
      "Dive deep into the fundamentals of music theory and ehance your musical skills.",
    link: "",
  },
  {
    title: "The Art of Songwriting",
    description:
      "Learn the craft of song writing from experienced and songwriters.",
    link: "",
  },
  {
    title: "Mastering Your Instruments",
    description:
      "Advanced techniques to master your musical instrument of choice.",
    link: "",
  },
  {
    title: "Live Performance Techniques",
    description:
      "Enhance your live performance skills with expert tips and strategies.",
    link: "",
  },
  {
    title: "Digital Music Marketing",
    description:
      "Learn how to promote your music effectively in the digital age.",
    link: "",
  },
  {
    title: "Music Production Essential",
    description:
      "Get started with music production with this comprehensive overview.",
    link: "",
  },
];
