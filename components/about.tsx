"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I also have a strong grasp of{" "}
        <span className="font-medium"> Data Structures and Algorithms</span>, I
        decided to pursue my passion for programming.{" "}
        <span className="font-medium">
          I am a Candidate Master (2044) on CodeForces
        </span>
        . <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I am also a{" "}
        <span className="underline">2x ICPC</span> Regionalist and ranked 25 in
        Kanpur Regionals and 57 in Amritapuri Regionals.{" "}
        <span className="font-medium">
          I help students and working professionals
        </span>
        to prepare for tech interviews in DSA and System Design. learn new
        technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I do a lot of stuff
        other than Software Engineering like <span className="font-medium"> building startups and financial
        assetss</span>.
      </p>
    </motion.section>
  );
}
