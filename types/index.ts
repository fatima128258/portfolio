export type NavItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: "github";
};

export type SkillCategory = {
  title: string;
  skills: Skill[];
};

export type Skill = {
  name: string;
  level: number;
  icon?: string;
  description?: string;
};

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  image: string;
  techStack: string[];
  features: string[];
  githubUrl: string;
  liveUrl: string;
  category: string;
};

export type Service = {
  title: string;
  description: string;
  icon: string;
};

export type Experience = {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  duration?: string;
  type?: "teaching" | "development" | "other";
  description: string;
  achievements: string[];
};

export type Education = {
  degree: string;
  institution: string;
  period: string;
  status: string;
  description: string;
};

export type Certification = {
  title: string;
  issuer: string;
  year: string;
  description: string;
};

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
};

export type Stat = {
  label: string;
  value: number;
  suffix: string;
};

export type TimelineItem = {
  year: string;
  title: string;
  description: string;
};

export type Fact = {
  label: string;
  value: string;
};

export type ContactInfo = {
  email: string;
  github: string;
  location: string;
};

export type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export type Achievement = {
  id: string;
  number: string;
  title: string;
  description: string;
};
