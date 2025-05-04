import React from 'react'
import { motion } from 'framer-motion'
import { FaCheck, FaBriefcase, FaTools } from 'react-icons/fa'
import '../styles/Experience.css'

const experiences = [
  {
    role: 'AI Prompt Engineer & Full-Stack Developer Intern',
    company: 'FoxTow, Inc',
    period: 'March 2025 – Present',
    icon: <FaBriefcase />,
    details: [
      'Enhanced web UI/UX using React and Spring',
      'Built and optimized full-stack features',
      'Integrated APIs and PostgreSQL database',
      'Implemented CI/CD with Git and GitHub'
    ]
  },
  {
    role: 'QA and DevOps Engineer Intern',
    company: 'Eficens system',
    period: '2020–2023',
    icon: <FaTools />,
    details: [
      'Led QA team for real-time project Flair',
      'Automated testing with Selenium',
      'Managed CI/CD pipelines with Jenkins',
      'Deployed and managed AWS infrastructure'
    ]
  }
]

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

const Experience = () => (
  <section id="experience" className="experience">
    <div className="container experience-maxw-7xl">
      <motion.h2 
        className="experience-heading"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: 'spring' }}
        viewport={{ once: true }}
      >
        Experience
      </motion.h2>
      <div className="experience-grid">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            className="experience-card"
            custom={idx}
            initial="hidden"
            whileInView="visible"
            variants={fadeInVariants}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="experience-header">
              <span className="experience-title-icon">{exp.icon}</span>
              <h3>{exp.role}</h3>
              <span className="company">@ {exp.company}</span>
            </div>
            <span className="period-badge">{exp.period}</span>
            <ul className="experience-details">
              {exp.details.map((detail, i) => (
                <li key={i}>
                  <FaCheck className="check-icon" />
                  {detail}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

export default Experience 