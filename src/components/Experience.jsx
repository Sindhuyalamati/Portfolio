import React from 'react'
import { motion } from 'framer-motion'
import { FaCheck, FaBriefcase, FaTools } from 'react-icons/fa'
import '../styles/Experience.css'

const experiences = [
  {
    role: 'Graduate Research Assistant - Full-Stack Development',
    company: 'University of Nevada, Reno',
    period: 'August 2025 – Present',
    icon: <FaBriefcase />,
    details: [
      'Developing an environmental monitoring platform with FastAPI backend',
      'Designing and implementing PostgreSQL schemas for data management',
      'Building React dashboards for data visualization and analysis',
      'Creating AWS workflows for automated data processing and deployment'
    ]
  },
  {
    role: 'AI Software Development Intern - AIJINTSEE',
    company: 'Pluto in Aquarius LLC',
    period: 'August 2025 – Present',
    icon: <FaBriefcase />,
    details: [
      'Building AI marketing automation pipeline for client strategy',
      'Producing comprehensive client strategy blueprints using AI tools',
      'Creating brand personas through AI-driven analysis',
      'Integrating LangChain with FastAPI for seamless AI workflow automation'
    ]
  },
  {
    role: 'Interface Designer Intern',
    company: 'SLEKE.',
    period: 'June 2025 – August 2025',
    icon: <FaBriefcase />,
    details: [
      'Designed wireframes and interaction flows in Figma',
      'Refined mobile UI screens with focus on user experience',
      'Integrated third-party APIs for enhanced functionality',
      'Developed neumorphic UI system and conducted user testing'
    ]
  },
  {
    role: 'AI Prompt Engineer & Full-Stack Developer Intern',
    company: 'FoxTow, Inc',
    period: 'March 2025 – June 2025',
    icon: <FaBriefcase />,
    details: [
      'Enhanced web application UI/UX with HTML, CSS, React, and Spring',
      'Developed new Kits features and improved navigation systems',
      'Contributed to PostgreSQL database design and optimization',
      'Utilized Git/GitHub and Cursor AI for efficient development workflows'
    ]
  },
  {
    role: 'QA and DevOps Engineer',
    company: 'Eficens System',
    period: '2021–2023',
    icon: <FaTools />,
    details: [
      'Led QA team for real-time project Flair',
      'Developed automated test scripts with Selenium and Robot Framework',
      'Designed and implemented CI/CD pipelines for continuous deployment',
      'Utilized Terraform for Infrastructure as Code and AWS cloud services',
      'Managed version control with GitHub and production deployment workflows'
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
      <div className="experience-timeline">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            className="experience-timeline-item"
            custom={idx}
            initial="hidden"
            whileInView="visible"
            variants={fadeInVariants}
            viewport={{ once: true }}
          >
            <div className="timeline-marker">
              <div className="timeline-icon-wrapper">
                {exp.icon}
              </div>
              {idx < experiences.length - 1 && <div className="timeline-line" />}
            </div>
            <div className="experience-card">
              <div className="experience-header">
                <div className="experience-title-row">
                  <h3>{exp.role}</h3>
                  <span className="period-badge">{exp.period}</span>
                </div>
                <span className="company">@ {exp.company}</span>
              </div>
              <ul className="experience-details">
                {exp.details.map((detail, i) => (
                  <li key={i}>
                    <FaCheck className="check-icon" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

export default Experience 
