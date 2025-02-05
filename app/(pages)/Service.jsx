"use client"

import { motion } from "framer-motion";
import isMobile from "is-mobile";
import React from "react";

const Service = () => {
  const services = [
    {
      title: "Game Development",
      description:
        "Building interactive, fun, and dynamic gaming experiences. Specializing in designing, coding, and testing video games using modern game development tools and engines. Passionate about creating unique gameplay mechanics, immersive worlds, and engaging storylines.",
      variant: {
        initial: {
          opacity: 0,
          y: -50,
          x: -50,
        }
      }
    },
    {
      title: "Graphic Designing",
      description:
        "Designing visually appealing graphics, logos, and branding materials that communicate your message clearly. Specialized in creating designs that attract attention and enhance brand identity, ensuring a strong visual impact for both digital and print media.",
      variant: {
        initial: {
          opacity: 0,
          y: -50,
          x: 50,
        }
      }
    },
    {
      title: "3D Modeling",
      description:
        "Bringing concepts to life with realistic and visually striking 3D models. Experience in creating detailed 3D assets for games, animation, and virtual simulations. Proficient in modeling, texturing, and rendering to produce immersive, high-quality 3D designs.",
      variant: {
        initial: {
          opacity: 0,
          y: 50,
          x: -50,
        }
      }
    },
    {
      title: "Content Creation",
      description:
        "Crafting engaging and relevant content for diverse audiences. Expertise in writing, video production, and digital media management. Focused on delivering high-quality, informative, and creative content that resonates with users across different platforms.",
      variant: {
        initial: {
          opacity: 0,
          y: 50,
          x: 50,
        }
      }
    },
  ];

  const viewportMarginH1 = isMobile()
    ? "-25% 0px -25% 0px" // For mobile devices
    : "-15% 0px -25% 0px"; // For larger screens

  const viewportMarginP = isMobile()
    ? "-40% 0px -25% 0px" // For mobile devices
    : "-30% 0px -30% 0px"; // For larger screens

  return (
    <div className="container mx-auto lg:pt-[120px]">
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
          margin: viewportMarginH1,
          //once: true,
        }}
        className="pb-4 lg:pb-0 text-2xl font-semibold"
      >
        Services
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:pt-8 xl:pb-8 gap-4 h-full overflow-hidden">
        {services.map((service, index) => (
          <motion.div
            variants={service.variant}
            initial='initial'
            whileInView={{
              opacity: 1,
              y: 0,
              x: 0,
              transition: {
                duration: 0.3,
              },
            }}
            viewport={{
              margin: viewportMarginP,
              //once: true,
            }}
            key={index}
            className="w-full bg-accent bg-opacity-80 rounded-md text-primary h-fit md:min-h-[35vh] lg:max-h-[35vh] py-4 px-6 hover:bg-accent-hover hover:shadow-md"
          >
            <h2 className="text-xl pb-2 font-semibold">{service.title}</h2>
            <p className="text-base py-2">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Service;
