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
            DevOps & Full-Stack Developer
          </motion.h2>
          <motion.p className="netflix-hero-desc small-desc" variants={fadeInVariants} custom={3}>
            Experienced in building scalable web applications, enhancing UI/UX, and integrating cloud and DevOps solutions. Passionate about leveraging technology to solve real-world problems and improve user experiences.
          </motion.p>
          <motion.div className="hero-buttons" variants={fadeInVariants} custom={4}>
            <a href="#projects" className="btn btn-primary btn-solid">View My Work</a>
            <a href="#contact" className="btn btn-primary btn-solid">Contact Me</a>
{/*             <a href="images/Sindhu_resume.pdf" download className="btn btn-primary btn-solid">Download Resume</a>
          </motion.div> */}
        </motion.div>
      </div>
      <motion.div className="hero-down-arrow" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 0.7, y: 0 }} transition={{ delay: 1.2, duration: 0.7, type: 'spring' }}>
        <FaChevronDown size={32} />
      </motion.div>
    </section>
  )
}

export default Hero 
