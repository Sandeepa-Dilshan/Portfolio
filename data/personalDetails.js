const details = {
  name: {
    first: "Buddika",
    last: "Kasun",
  },
  dob: new Date("2001-05-12"),
  age: (() => {
    const currentDate = new Date();
    return currentDate.getFullYear() - details.dob.getFullYear();
  })(),
  nationality: "Sri Lankan",
  Languages: ["English", "Sinhala"],
  description:
    "I am currently pursuing a Bachelor of Information and Communication Technology (BICT) (Hons.) at the University of Sri Jayewardenepura, specializing in Software Engineering. My studies focus on areas such as Artificial Intelligence, Data Structures, Web and Mobile Development, Cybersecurity, Networking, and Database Management. I have worked on both self-driven and group projects, gaining valuable experience in applying my skills to real-world problems, and have over 2 years of practical experience in the field.",
  email: "buddikakasun80@gmail.com",
  phone: "+94 715 315 915",
  location: "N0:12, Parakkrama MW, panadura, Sri Lanka",
  social: {
    linkedIn: "https://www.linkedin.com/in/Kasun",
    github: "https://github.com/Buddika-Kasun",
  },
  resume: "https://resume.com/buddika",
  skills: ["JavaScript", "React", "Node.js", "MongoDB"],
};

export default details;
