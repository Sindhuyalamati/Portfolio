import React from 'react'
import { motion } from 'framer-motion'
import { FaCheck, FaBriefcase, FaTools } from 'react-icons/fa'
import '../styles/Experience.css'

const experiences = [
  {
    role: 'Software Engineer (Full-Stack)',
    company: 'Tahoe Institute for Global Sustainability, Nevada',
    period: 'Aug 2025 – Present',
    icon: <FaBriefcase />,
    details: [
      'Developed a cloud-integrated environmental monitoring platform',
      'Built and maintained production-grade RESTful services using FastAPI',
      'Designed scalable database schemas in PostgreSQL',
      'Created interactive, map-based dashboards using React, HTML, CSS, and Figma',
      'Collaborated with environmental research teams'
    ]
  },
  {
    role: 'Software Engineer (AI & Automation)',
    company: 'Pluto in Aquarius LLC, Reno NV (Part time)',
    period: 'Aug 2025 – Present',
    icon: <FaBriefcase />,
    details: [
      'Built end-to-end AI marketing automation pipeline',
      'Produced client Strategy Blueprints',
      'Created brand personas',
      'Planned 6-month campaign frameworks',
      'Designed and implemented microservices-based FastAPI systems integrating LangChain'
    ]
  },
  {
    role: 'Software Engineer (UI/UX & Frontend)',
    company: 'SLEKE., Reno NV',
    period: 'Jun 2025 – Aug 2025',
    icon: <FaBriefcase />,
    details: [
      'Designed wireframes and interaction flows in Figma',
      'Implemented frontend system design patterns',
      'Integrated third-party APIs and developed backend features using Spring Boot and PostgreSQL',
      'Developed and deployed a live neumorphic UI system',
      'Conducted internal testing and delivered a full design system'
    ]
  },
  {
    role: 'Software Engineer Intern (Full-Stack & AI)',
    company: 'FoxTow, Reno NV',
    period: 'Mar 2025 – Jun 2025',
    icon: <FaBriefcase />,
    details: [
      'Enhanced web application UI/UX',
      'Developed new Kits features',
      'Contributed to PostgreSQL database design, query optimization, and backend troubleshooting',
      'Utilized Git/GitHub and Cursor AI tools'
    ]
  },
  {
    role: 'DevOps Engineer',
    company: 'Eficens System, Hyderabad, India',
    period: 'Feb 2021 – Dec 2023',
    icon: <FaTools />,
    details: [
      'Designed and maintained CI/CD pipelines using Jenkins',
      'Provisioned and managed scalable cloud infrastructure using Terraform (IaC) across AWS and Azure',
      'Implemented automated reliability and validation checks with Selenium and Robot Framework',
      'Collaborated with development and operations teams',
      'Managed GitHub workflows'
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
