import cyberImg from "@/assets/course-cyber.jpg";
import hackImg from "@/assets/course-hacking.jpg";
import dataImg from "@/assets/course-data.jpg";
import pyImg from "@/assets/course-python.jpg";
import type { Course } from "@/components/site/CourseCard";

export const courses: Course[] = [
  {
    slug: "cyber-security-expert",
    title: "Cyber Security Expert",
    image: cyberImg,
    duration: "6 Months",
    level: "Advanced",
    highlights: [
      "SOC operations & incident response",
      "Network defense & firewalls",
      "Industry certifications prep",
      "Live SOC lab access",
    ],
  },
  {
    slug: "ethical-hacking",
    title: "Ethical Hacking & Pentesting",
    image: hackImg,
    duration: "4 Months",
    level: "Intermediate",
    highlights: [
      "OWASP Top 10 in-depth",
      "Web & network pentesting",
      "Bug bounty methodology",
      "Kali Linux mastery",
    ],
  },
  {
    slug: "data-science-ai",
    title: "Data Science & AI",
    image: dataImg,
    duration: "8 Months",
    level: "Advanced",
    highlights: [
      "Python, ML, deep learning",
      "Real-world capstone projects",
      "Generative AI & LLMs",
      "Portfolio on GitHub",
    ],
  },
  {
    slug: "python-programming",
    title: "Python Programming",
    image: pyImg,
    duration: "3 Months",
    level: "Beginner",
    highlights: [
      "Core Python fundamentals",
      "OOP, data structures, APIs",
      "Automation & scripting",
      "Mini projects portfolio",
    ],
  },
];
