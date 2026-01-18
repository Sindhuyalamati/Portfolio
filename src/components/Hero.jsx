import React from 'react'
import { motion } from 'framer-motion'
import { FaChevronDown } from 'react-icons/fa'
import '../styles/Hero.css'

const fadeInVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      type: 'spring',
    },
  }),
}

const Hero = () => {
  return (
    <section id="home" className="hero netflix-hero-bg">
      <div className="hero-overlay" />
      <div className="hero-gradient-overlay" />
      <div className="container hero-container">
        <motion.div
          className="hero-content netflix-hero-content"
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
        >
          <motion.div className="hero-subtitle" variants={fadeInVariants} custom={0}>
            Welcome to my portfolio
          </motion.div>
          <motion.h1 className="netflix-hero-title" variants={fadeInVariants} custom={1}>
            Hi I&apos;m <span className="netflix-hero-name netflix-nowrap">Sindhu Yalamati</span>
          </motion.h1>
          <motion.h2 className="netflix-hero-subtitle" variants={fadeInVariants} custom={2}>
            Full-Stack Developer & AI Engineer
          </motion.h2>
          <motion.p className="netflix-hero-desc small-desc" variants={fadeInVariants} custom={3}>
            Results-driven Full-Stack Software Engineer with 4+ years of experience building and deploying cloud-native web applications. Proficient in React, FastAPI, PostgreSQL, and AWS, with strong expertise in UI/UX, scalable APIs, and CI/CD automation. Improved deployment speed by 40% and system performance and reliability by 30% through optimized backend, infrastructure, and DevOps workflows. Experienced in containerized deployments, managed cloud services, and end-to-end ownership of production systems.
          </motion.p>
          <motion.div className="hero-buttons" variants={fadeInVariants} custom={4}>
            <a href="#projects" className="btn btn-primary btn-solid">View My Work</a>
            <a href="#contact" className="btn btn-primary btn-solid">Contact Me</a>
          </motion.div>
        </motion.div>
      </div>
      <motion.a 
        href="#about" 
        className="hero-down-arrow" 
        initial={{ opacity: 0, y: 10 }} 
        animate={{ opacity: 0.7, y: 0 }} 
        transition={{ delay: 1.2, duration: 0.7, type: 'spring' }}
        aria-label="Scroll to About section"
      >
        <FaChevronDown size={32} />
      </motion.a>
    </section>
  )
}

export default Hero 
