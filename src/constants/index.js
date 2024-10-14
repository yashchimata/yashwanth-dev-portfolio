import project1 from "../assets/projects/ecommerce.jpg";
import project2 from "../assets/projects/corddle.jpg";
import project3 from "../assets/projects/netflix.jpg";
import project4 from "../assets/projects/admin.jpg";

export const HERO_CONTENT = `I am Yashwanth Kumar Chimata, a Full Stack Developer who thrives on turning ideas into seamless digital experiences. With 4 years of experience, I blend the best of front-end finesse and back-end power—React, Next.js, Java, Spring Boot—to build apps that are as fast as they are functional. Let’s create something extraordinary, one line of code at a time.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly applications. With 4 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, Java, Spring, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Full Stack Developer",
    company: "JPMorgan Chase",
    description: `As a Full Stack Developer at JPMorgan Chase, I optimized enterprise-level applications with a focus on performance and scalability. Utilizing technologies like Next.js, React, and Java Spring Boot, I implemented solutions that improved load times, reduced response latency, and enhanced user experiences. I also integrated GraphQL APIs and Dockerized applications, driving a reduced load time and decreased deployment efforts. My work on optimizing data fetching and managing seamless connections with legacy systems further bolstered application reliability and performance.`,
    technologies: ["Javascript", "React.js", "Next.js", "Java", "Spring Boot", "PostgreSQL", "REST API", "Docker", "CI/CD", "AWS"],
  },
  {
    year: "2019 - 2022",
    role: "Full Stack Developer",
    company: "KPIT Technologies",
    description: `I developed and optimized web applications using Angular and Java Spring Boot to create responsive, efficient user interfaces and robust backend systems. By utilizing AWS services and MongoDB, I successfully reduced deployment times and query latency. My contributions also included implementing OAuth2 and JWT for enhanced security, building RESTful APIs, and streamlining the CI/CD pipeline, resulting in faster and more secure software delivery.`,
    technologies: ["HTML", "CSS", "Angular", "Vue.js", "mySQL", "Spring Framework", "Java", "AWS", "NoSQL", "OAuth", "REST API"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional, scalable e-commerce platform designed to streamline the online shopping experience. Built using Next.js, React, and TailwindCSS for a seamless user interface and Node.js with Prisma for efficient back-end operations. Features include product listing, dynamic pricing, a secure shopping cart, and user authentication. The platform is integrated with Stripe for payment processing and offers an intuitive admin panel for product management. The application also supports search, pagination, and responsive design for optimal performance across devices.",
    technologies: ["HTML", "TailwindCSS", "React", "Next.js", "Node.js", "Prisma"],
    github: "https://github.com/yashchimata/ecommerce-site", // Added GitHub link
  },
  {
    title: "Corddle - Discord Clone",
    image: project2,
    description:
      "A full-featured Discord clone offering real-time messaging, audio, and video channels. Built with React and Node.js for seamless communication and community management.",
    technologies: ["HTML", "CSS", "Angular", "Firebase", "OAuth", "Next.js", "React", "Prisma"],
    github: "https://github.com/yashchimata/Corddle-project", // Added GitHub link
  },
  {
    title: "Full Stack Netflix Clone",
    image: project3,
    description:
      "Streamlined entertainment platform mimicking Netflix's design and functionality. Built with Next.js, Tailwind, and MongoDB, offering a complete user experience from browsing to watching shows.",
    technologies: ["HTML", "TailwindCSS", "React", "MongoDB", "Express"],
    github: "https://github.com/yashchimata/nextjs14-netflix-clone", // Added GitHub link
  },
  {
    title: "E-Commerce Admin Dashboard",
    image: project4,
    description:
      "A powerful, all-in-one platform built with Next.js, React, and Stripe to manage stores, products, and orders with ease. Track sales, customize promotions, and handle everything from a user-friendly dashboard.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL", "Next.js"],
    github: "https://github.com/yashchimata/nextjs14-ecommerce-store", // Added GitHub link
  },
];

export const CONTACT = {
  address: "912 Golden Crest Cir, Birmingham, AL - 35205",
  phoneNo: "+1 205 515 5562",
  email: "ch.yashwanth386@gmail.com",
};
