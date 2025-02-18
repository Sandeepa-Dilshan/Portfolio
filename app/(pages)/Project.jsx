"use client";

import Image from "next/image";
import {
  animate,
  motion,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import useCustomScroll from "../hooks/useCustomScroll";
import MotionBtn from "@/components/MotionBtn";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import isMobile from "is-mobile";
import { FaFigma } from "react-icons/fa";

//import ProjectItem from "@/components/ProjectItem";
/* import dynamic from "next/dynamic";
const ProjectItem = dynamic(() => import("@/components/ProjectItem") , {
  ssr: false,
}); */

const Project = () => {

  const projects = [
    /* {
      title: "BikzIK E-Commerce Platform",
      image: "/assets/projects/BikzIK.png",
      description: "BIKZIK is a modern, full-stack e-commerce platform that offers seamless shopping experiences. It is built using the latest technologies with features like user authentication, product management, and cloud image storage.",
      link: "https://bikzik.vercel.app",
      git: "https://github.com/Buddika-Kasun/BikzIK_E-commarce_Web-MERN-"
    }, 
    {
      title: "My Portfolio",
      image: "/assets/projects/Portfolio.png",
      description: "A sleek and responsive personal portfolio website built with Next.js 15, React 19, and Tailwind CSS. It showcases projects, skills, and experiences with smooth animations powered by Framer Motion. Optimized for performance and accessibility.",
      link: "https://sandeepa.vercel.app", 
      git: "https://github.com/Buddika-Kasun/Portfolio",
      figma: "a", 
    }, */   
    {
      title: "Portfolio Design",
      image: "/assets/projects/myPortfolio.jpg",
      description: "This is my personal portfolio UI design created in Figma. It showcases my skills in UI/UX design, typography, layout structuring, and responsive web design. The dark mode theme gives a sleek look, and the interactive elements ensure a smooth user experience.",
      link: "",    
      git: "https://www.figma.com/design/QueP9sbMw2aOjhXAFfxVb1/Untitled?node-id=1-2&t=vgWTQNORRnIzhPrg-0",
      figma: "https://www.figma.com/design/QueP9sbMw2aOjhXAFfxVb1/Untitled?node-id=1-2&t=vgWTQNORRnIzhPrg-0", 
    },
    {
      title: "UniCore - University Management System UI",
      image: "/assets/projects/SupplementAdmin.png",
      description: "I designed the UniCore University Management System UI to provide an efficient and user-friendly experience for university-wide management. The interface focuses on intuitive navigation, modern UI/UX principles, and seamless functionality to enhance administrative tasks, student collaboration, and overall system accessibility.",
      link: "",
      git: "https://www.figma.com/design/QueP9sbMw2aOjhXAFfxVb1/Untitled?node-id=1-2&t=vgWTQNORRnIzhPrg-0",
      figma: "https://www.figma.com/design/ZQyTdJcYPrpWdSJiLLE0oU/LoginUIConcept-(Community)?node-id=0-1&p=f&t=y85XweCLUyqd7qHL-0", 
    },
    /*{
      title: "Simple Coin Collection Game",
      image: "/assets/projects/SupplementClient.png",
      description: "This is a simple coin collection game developed in Unity. The objective is to navigate the environment and collect coins while showcasing smooth movement and interaction mechanics. This project highlights my skills in game development, C# scripting, physics-based movement, and Unity engine functionalities. The game provides an engaging experience with responsive controls and a basic reward system.",
      link: "",
      git: "https://www.figma.com/design/QueP9sbMw2aOjhXAFfxVb1/Untitled?node-id=1-2&t=vgWTQNORRnIzhPrg-0",
      figma: "a", 
    },*/
  ];

  const { scrollYProgress } = useCustomScroll({
    sectionsClassName: "projects",
  }); //console.log(scrollYProgress); output = 0 to 1 value

  /* const ref2 = useRef();
  const { scrollYProgress: scroll } = useScroll(ref2);
  const xxTranslate = useTransform(scroll, [0,1], [0, - window?.innerWidth * projects?.length]); console.log(xxTranslate); */

  // Dynamically calculate the X translation
  //const translateX = scrollYProgress * -window.innerWidth * (projects?.length - 0.55 || 1);
  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    // Add an event listener to handle scroll and update the translateX value dynamically
    const handleScroll = () => {
      const progress = scrollYProgress;
      const width = window?.innerWidth || 0;
      const translation =
        progress * -width * (projects?.length - 0.55 || 1);
      setTranslateX(translation);
    };

    // Trigger the scroll update once at mount
    handleScroll();

    // Add event listener
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollYProgress, projects]);

  const imageVariant = {
    initial: {
      opacity: 0,
      y: 500,
      x: -500,
    },
    animate: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const textVariant = {
    initial: {
      opacity: 0,
      y: 500,
      x: 500,
    },
    animate: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        staggerChildren: 0.5,
      },
    },
  };
  

  const ListItem = ({ item }) => {
    const ref = useRef();

    const inView = useInView(ref, { margin: "-100px" });

    return (
      <div
        ref={ref}
        className="h-full min-w-full overflow-hidden flex flex-col lg:flex-row lg:gap-20 items-start  lg:justify-center lg:px-8 lg:pl-16"
      >
        <div className="w-full lg:min-w-[400px] lg:max-w-[400px] rounded-md">
          <Image
            src={item.image}
            width={200}
            height={200}
            alt={item.title}
            loading="lazy"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="flex flex-col gap-4 p-2 lg:p-0">
          <h2 className="text-lg lg:text-3xl font-semibold text-ellipsis line-clamp-2 leading-tight lg:leading-normal text-accent">
            {item.title}
          </h2>
          <p className="lg:py-4 leading-tight lg:leading-normal">{item.description}</p>
          <div className="flex gap-6">
            { 
              item.link &&
              <Link
                href={item.link}
                target="_blank"
                className="bg-accent rounded-lg w-fit px-4 text-primary lg:hover:bg-accent-hover cursor-none lg:hover:scale-105 lg:hover:transition-all duration-200"
              >
                View Project
              </Link>
            }
            <MotionBtn
              whileHover={{ rotate: 360, scale: 1.2 }}
              transition={{
                duration: 0.5,
                type: "spring",
                stiffness: 400,
                damping: 10,
              }}
            >
              { item.figma &&
                <Link href={item.git} target="_blank" className='w-9 h-9 border-[1.5px] border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500 cursor-none pl-[1px]'>
                  <FaFigma />
                </Link>
              }
            </MotionBtn>
          </div>
        </div>
      </div>
    );
  };

  const ref = useRef(null);

  const inView = useInView(ref, { margin: "-40% 0px -40% 0px" });

  const isInMobile = isMobile();

  const leftVariant = {
    initial: {
      opacity: 0,
      x: -100,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    }
  }

  const rightVariant = {
    initial: {
      opacity: 0,
      x: 100,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    }
  }

  return (
    <div
      //ref={ref}
      className="container max-auto lg:pt-[120px] mb-8 lg:mb-0 min-h-[calc(100vh)] h-full relative projects z-10"
    >
      {
        !isInMobile ? (
          /* Desktop */
          <>
          <div className="sticky hidden lg:block top-24 lg:top-28 w-full overflow-hidden">
            <motion.h1 
              initial={{
                opacity: 0,
                y: -50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.8,
                },
              }}
              viewport={{
                margin: "-15% 0px -25% 0px",
                //once: true,
              }}
              className="text-2xl font-semibold pb-4 lg:pb-8"
            >
              Projects
            </motion.h1>
            <motion.div
              className="flex h-full lg:items-center w-full sticky top-0 gap-8"
              style={{
                transform: `translateX(${translateX}px)`, // Apply X translation based on scroll progress
                transition: "transform 0.1s ease-out", // Smooth transition
              }}
              //style={{x: xxTranslate}}
              
            >
              {projects.map((project, index) => (
                <ListItem key={index} item={project} />
              ))}
            </motion.div>
          </div>
          {/* Add extra space for smooth scrolling */}
          <div className="hidden lg:block">
            {[...Array(projects.length)].map((_, i) => (
              <div key={i} className="min-h-[100vh]" />
            ))}
          </div>
          </>
        ) : (
          /* Mobile */
          <div className="lg:hidden w-full">
            <motion.h1
              initial={{
                opacity: 0,
                y: -50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.8,
                },
              }}
              viewport={{
                margin: "-25% 0px -25% 0px",
                //once: true,
              }}
              className="text-2xl font-semibold pb-4 lg:pb-8"
            >
                Projects
            </motion.h1>
            <div className="flex flex-col gap-16">
              {projects.map((project, index) => (
                //<ProjectItem item={project} key={index} />
                // <ListItem key={index} item={project} />
                <motion.div
                  key={index}
                  variants={textVariant}
                  //initial="initial"
                  //animate={inView ? 'animate' : 'initial'}
                  //whileInView="animate"
                  //viewport={{amount: 0.5}}
                  className="h-full min-w-full overflow-hidden flex flex-col lg:flex-row lg:gap-20 items-start  lg:justify-center lg:px-8 lg:pl-16"
                >
                  <motion.div
                    variants={leftVariant}
                    initial='initial'
                    whileInView='animate'
                    viewport={{
                      margin: "-25% 0px -25% 0px",
                    }}
                    className="w-full lg:min-w-[400px] lg:max-w-[400px] rounded-md"
                  >
                    <Image
                      src={project.image}
                      width={200}
                      height={200}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover rounded-md -z-10"
                      />
                  </motion.div>
                  <div className="flex flex-col gap-4 p-2 lg:p-0">
                    <motion.h2 
                      variants={rightVariant}
                      initial='initial'
                      whileInView='animate'
                      viewport={{
                        margin: "-25% 0px -25% 0px",
                      }}
                      className="text-lg lg:text-3xl font-semibold text-ellipsis line-clamp-2 leading-tight lg:leading-normal text-accent">
                      {project.title}
                    </motion.h2>
                    <motion.p
                      variants={leftVariant}
                      initial='initial'
                      whileInView='animate'
                      viewport={{
                        margin: "-25% 0px -25% 0px",
                      }}
                      className="lg:py-4 leading-tight lg:leading-normal">
                        {project.description}
                      </motion.p>
                    <motion.div
                      variants={rightVariant}
                      initial='initial'
                      whileInView='animate'
                      viewport={{
                        margin: "-25% 0px 0px 0px",
                      }}
                      className="flex gap-6"
                    >
                      { 
                        project.link &&
                        <Link
                        href={project.link}
                        target="_blank"
                        className="bg-accent rounded-lg w-fit px-4 text-primary lg:hover:bg-accent-hover cursor-none"
                        >
                          View Project
                        </Link>
                      }
                        <Link href={project.git} target="_blank" className='w-9 h-9 border-[1.5px] border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500 cursor-none'>
                          <FaGithub />
                        </Link>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )
      }

    </div>
  );
};

export default Project;
