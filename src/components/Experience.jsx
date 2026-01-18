import React from 'react'
import { motion } from 'framer-motion'
import { FaCheck, FaBriefcase, FaTools, FaCloud, FaDatabase, FaReact, FaAws, FaDocker, FaPython, FaBrain } from 'react-icons/fa'
import { SiFastapi, SiPostgresql, SiSpring, SiReact, SiFigma, SiJenkins, SiTerraform } from 'react-icons/si'
import '../styles/Experience.css'

const experiences = [
  {
    role: 'Software Engineer (Full-Stack)',
    company: 'Tahoe Institute for Global Sustainability, Nevada',
    period: 'Aug 2025 – Present',
    icon: <FaBriefcase />,
    techIcons: [<SiFastapi key="fastapi" />, <SiPostgresql key="postgres" />, <SiReact key="react" />, <FaAws key="aws" />, <FaDocker key="docker" />],
    details: [
      'Developed and deployed an end-to-end, cloud-based environmental monitoring platform on AWS, supporting real-time watershed and ecosystem data collection from distributed sensors',
      'Containerized backend services using Docker and deployed via AWS ECR and App Runner, enabling scalable RESTful APIs with managed infrastructure',
      'Built production-grade RESTful APIs using FastAPI for real-time sensor ingestion, improving data throughput by 40% and enabling secure pipelines to AWS S3',
      'Designed scalable PostgreSQL database schemas and indexing strategies for high-throughput time-series and geospatial data, reducing query latency by 30%',
      'Deployed a static frontend to AWS S3 and CloudFront, delivering globally cached, low-latency access to interactive dashboards built with React, HTML, and CSS'
    ]
  },
  {
    role: 'Software Engineer (AI & Automation)',
    company: 'Pluto in Aquarius LLC, Reno NV (Part time)',
    period: 'Aug 2025 – Present',
    icon: <FaBriefcase />,
    techIcons: [<SiFastapi key="fastapi" />, <FaBrain key="ai" />, <FaPython key="python" />, <FaCloud key="cloud" />],
    details: [
      'Built an end-to-end AI marketing automation pipeline with intake chatbots, strategy generation, and automated content workflows',
      'Produced client Strategy Blueprints using SWOT, Blue Ocean, 7 Powers, and BCG frameworks, reducing prep time by 50%',
      'Created brand personas, emotional identities, and SPARK-based messaging from structured client interview data',
      'Planned 6-month campaigns and 30-day content calendars, enabling 40% faster LLM-driven content turnaround',
      'Designed microservices-based FastAPI systems with LangChain pipelines for scalable, multi-client content generation'
    ]
  },
  {
    role: 'Software Engineer (UI/UX & Frontend)',
    company: 'SLEKE., Reno NV',
    period: 'Jun 2025 – Aug 2025',
    icon: <FaBriefcase />,
    techIcons: [<SiFigma key="figma" />, <SiReact key="react" />, <SiSpring key="spring" />, <SiPostgresql key="postgres" />],
    details: [
      'Designed wireframes and interaction flows in Figma to define core user journeys, reducing design iteration time by 30%',
      'Implemented frontend design patterns emphasizing accessibility, responsive layouts, and performance optimization, improving UI responsiveness by 25%',
      'Integrated third-party APIs and developed backend features using Spring Boot and PostgreSQL',
      'Developed and deployed a live neumorphic UI system across Sleke screens in collaboration with developers',
      'Conducted internal user testing and delivered a complete design system covering spacing, typography, icons, colors, and components'
    ]
  },
  {
    role: 'Software Engineer Intern (Full-Stack & AI)',
    company: 'FoxTow, Reno NV',
    period: 'Mar 2025 – Jun 2025',
    icon: <FaBriefcase />,
    techIcons: [<SiReact key="react" />, <SiSpring key="spring" />, <SiPostgresql key="postgres" />, <FaPython key="python" />],
    details: [
      'Enhanced web application UI/UX using HTML, CSS, React, and Spring to improve design consistency, responsiveness, and usability',
      'Developed new Kits features with full-stack technologies while integrating third-party APIs and backend logic in PostgreSQL',
      'Contributed to PostgreSQL database design, query optimization, and backend troubleshooting for stable, high-performance operation',
      'Utilized Git/GitHub and Cursor AI tools for efficient version control, prompt engineering, testing, and automation workflows'
    ]
  },
  {
    role: 'DevOps Engineer',
    company: 'Eficens System, Hyderabad, India',
    period: 'Feb 2021 – Dec 2023',
    icon: <FaTools />,
    techIcons: [<SiJenkins key="jenkins" />, <SiTerraform key="terraform" />, <FaAws key="aws" />, <FaCloud key="cloud" />],
    details: [
      'Designed and maintained CI/CD pipelines using Jenkins for real-time production systems, reducing deployment time by 40%',
      'Provisioned and managed scalable cloud infrastructure with Terraform (IaC) across AWS and Azure, ensuring high availability',
      'Implemented automated reliability and validation checks using Selenium and Robot Framework, improving release stability by 30%',
      'Collaborated with development and operations teams to streamline deployments, monitoring, and release processes',
      'Managed GitHub workflows for version control, CI/CD integration, and infrastructure change management'
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
              {exp.techIcons && (
                <div className="experience-tech-icons">
                  {exp.techIcons.map((techIcon, techIdx) => (
                    <motion.div
                      key={techIdx}
                      className="tech-icon-wrapper"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.15 + techIdx * 0.05, duration: 0.3 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.2, y: -3 }}
                    >
                      {techIcon}
                    </motion.div>
                  ))}
                </div>
              )}
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
