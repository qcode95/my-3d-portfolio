const config = {
  title: "Nguyen Xuan Quy | Fullstack Web Developer",
  description: {
    long: "Explore the portfolio of Nguyen Xuan Quy, a fullstack web developer working with React, Angular, Next.js, Node.js, NestJS, and modern cloud infrastructure.",
    short:
      "Portfolio of Nguyen Xuan Quy, Fullstack Web Developer.",
  },
  keywords: [
    "Nguyen Xuan Quy",
    "qcode95",
    "portfolio",
    "fullstack web developer",
    "web development",
    "TypeScript",
    "React",
    "Angular",
    "Next.js",
    "Node.js",
    "NestJS",
    "Docker",
    "AWS",
  ],
  author: "Nguyen Xuan Quy",
  email: "quynx9523.work@gmail.com",
  site: "",

  // for github stars button
  githubUsername: "",
  githubRepo: "",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    linkedin: "https://www.linkedin.com/in/quynx9523/",
    instagram: "https://www.instagram.com/_qquy.9523/",
    github: "https://github.com/qcode95",
  },
};
export { config };
