import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import '../styles/Projects.css'

const MAX_DESC_LENGTH = 220;

const highlightTech = (desc, techs) => {
  // Sort techs by length descending to avoid partial matches
  const sortedTechs = [...techs].sort((a, b) => b.length - a.length);
  let replaced = desc;
  sortedTechs.forEach(tech => {
    // Regex: match tech as a whole word, case-insensitive
    const regex = new RegExp(`\\b${tech.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'gi');
    replaced = replaced.replace(regex, match => `<span class='desc-tech'>${match}</span>`);
  });
  return replaced;
};

const Projects = () => {
  const projects = [
    {
      title: 'Portfolio Website Development',
      description: 'A responsive personal portfolio website showcasing my projects, experience, and skills. Built with modern web technologies focusing on UI/UX best practices. Features include smooth animations, responsive design, and optimized performance. Deployed on Vercel for fast global content delivery.',
      image: 'images/first_project.png',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Vercel'],
      github: 'https://github.com/Sindhuyalamati',
      live: 'https://sindhu-yalamati.vercel.app/'
    },
    {
      title: 'Territory Maker - Interactive Web GIS Application',
      description: 'A full-stack ZIP code territory management application built with React, Leaflet.js, Supabase, and TypeScript. Features dynamic ZIP code boundary loading based on map viewport, optimized map rendering for performance, and interactive territory creation. Users can select ZIP codes directly on the map to define territories, with real-time updates and smooth panning/zooming capabilities. The application efficiently handles large datasets across the entire United States.',
      image: 'images/image.png',
      technologies: ['React', 'Leaflet.js', 'Supabase', 'TypeScript'],
      github: 'https://github.com/Sindhuyalamati/Territory_Tool',
      live: 'https://territory-tool.vercel.app/'
    },
    {
      title: 'E-Commerce Web Application',
      description: 'A full-stack e-commerce application developed as a course project for Database Management Systems. Built with Flask (backend), ReactJS (frontend), and PostgreSQL (database). Focused on comprehensive database design with 7 well-structured tables managing users, products, and carts. Implemented optimized SQL queries with proper indexing for performance, ensured data integrity and normalization. Integrated Firebase authentication for secure user accounts and seamless session management.',
      image: 'images/ECommerce.png',
      technologies: ['Flask', 'ReactJS', 'PostgreSQL', 'Firebase'],
      github: 'https://github.com/Sindhuyalamati/database_final_project',
      live: ''
    }
  ]

  const [expanded, setExpanded] = useState(Array(projects.length).fill(false));

  const handleReadMore = idx => {
    setExpanded(prev => prev.map((val, i) => (i === idx ? !val : val)))
  }

  return (
    <section className="projects" id="projects">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>
        <motion.div
          className="projects-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
            hidden: {}
          }}
        >
          {projects.map((project, index) => {
            const isLong = project.description.length > MAX_DESC_LENGTH;
            const showFull = expanded[index];
            const desc = isLong && !showFull
              ? project.description.slice(0, MAX_DESC_LENGTH) + '...'
              : project.description;
            const isReverse = index % 2 === 1;
            return (
              <motion.div
                key={index}
                className={`project-card${isReverse ? ' reverse' : ''}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: 'easeOut' }}
                viewport={{ once: true }}
                style={{ display: 'flex', flexDirection: isReverse ? 'row-reverse' : 'row', alignItems: 'center', minHeight: 320 }}
              >
                <motion.div
                  className="project-window"
                  whileHover={{ y: -8, boxShadow: '0 8px 32px 0 rgba(229,9,20,0.18)' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <motion.div
                    className="project-image"
                    whileHover="zoom"
                    style={{ overflow: 'hidden' }}
                  >
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                      variants={{
                        zoom: { scale: 1.06 },
                        initial: { scale: 1 }
                      }}
                      initial="initial"
                      whileHover="zoom"
                      transition={{ duration: 0.35, ease: 'easeOut' }}
                    />
                  </motion.div>
                </motion.div>
                <div className="project-content" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
                  <h3>{project.title}</h3>
                  <p style={{ flex: 1 }}>
                    <span dangerouslySetInnerHTML={{
                      __html: highlightTech(desc, project.technologies)
                    }} />
                    {isLong && (
                      <span
                        className="read-more"
                        style={{ color: '#e50914', cursor: 'pointer', fontWeight: 600, marginLeft: 6 }}
                        onClick={() => handleReadMore(index)}
                      >
                        {showFull ? ' Show Less' : ' Read More'}
                      </span>
                    )}
                  </p>
                  <motion.div
                    className="project-tech"
                    initial="hidden"
                    animate="visible"
                    variants={{
                      visible: { transition: { staggerChildren: 0.08 } },
                      hidden: {}
                    }}
                  >
                    {project.technologies.map((tech, i) => (
                      <motion.span
                        key={i}
                        className="tech-tag"
                        variants={{
                          visible: { opacity: 1, y: 0 },
                          hidden: { opacity: 0, y: 10 }
                        }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <FaGithub /> Code
                    </a>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects 