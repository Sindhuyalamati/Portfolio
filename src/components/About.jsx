import React from 'react'
import { motion } from 'framer-motion'
import { FaGraduationCap, FaUniversity, FaPython, FaJs, FaCode, FaServer, FaCloud, FaCogs, FaFlask, FaDocker, FaAws, FaRobot, FaLeaf, FaCheckCircle, FaRocket, FaTools, FaHtml5, FaCss3Alt, FaDatabase, FaGitAlt, FaGithub, FaTable } from 'react-icons/fa'
import { SiSupabase, SiJenkins, SiVercel, SiTableau, SiPandas, SiReact } from 'react-icons/si'
import { TbBolt } from 'react-icons/tb'
import { MdOutlineSmartToy } from 'react-icons/md'
import '../styles/About.css'

const education = [
  {
    icon: <FaUniversity color="#00bcd4" size={24} />, // bright cyan
    school: 'University of Nevada, Reno',
    degree: 'Masters in Computer Science',
    period: '2024–present',
  },
  {
    icon: <FaGraduationCap color="#ffb300" size={24} />, // bright yellow
    school: 'Sasi Institute of Technology and Engineering',
    degree: 'B.Tech in Computer Science and Engineering',
    period: '2019–2023',
  },
]

// Unified skill cards (icon, name, color)
const skillCards = [
  { icon: <FaPython color="#3776ab" />, name: 'Python', color: '#3776ab' },
  { icon: <SiReact color="#61dafb" />, name: 'ReactJS', color: '#61dafb' },
  { icon: <FaJs color="#f7df1e" />, name: 'JavaScript', color: '#f7df1e' },
  { icon: <FaHtml5 color="#e44d26" />, name: 'HTML', color: '#e44d26' },
  { icon: <FaCss3Alt color="#1572b6" />, name: 'CSS', color: '#1572b6' },
  { icon: <FaDatabase color="#336791" />, name: 'PostgreSQL', color: '#336791' },
  { icon: <SiSupabase color="#3ecf8e" />, name: 'Supabase', color: '#3ecf8e' },
  { icon: <SiJenkins color="#d33833" />, name: 'Jenkins', color: '#d33833' },
  { icon: <SiVercel color="#fff" />, name: 'Vercel', color: '#fff' },
  { icon: <MdOutlineSmartToy color="#e50914" />, name: 'Cursor', color: '#e50914' },
  { icon: <TbBolt color="#ffb300" />, name: 'Bolt.diy', color: '#ffb300' },
  { icon: <SiTableau color="#005f9e" />, name: 'Tableau', color: '#005f9e' },
  { icon: <FaGitAlt color="#f34f29" />, name: 'Git', color: '#f34f29' },
  { icon: <FaGithub color="#fff" />, name: 'GitHub', color: '#fff' },
  { icon: <SiPandas color="#130754" />, name: 'pandas', color: '#130754' },
  { icon: <FaServer color="#b3b3b3" />, name: 'SQL', color: '#b3b3b3' },
  { icon: <FaLeaf color="#4caf50" />, name: 'Django', color: '#4caf50' },
  { icon: <FaCloud color="#00bcd4" />, name: 'AWS', color: '#00bcd4' },
  { icon: <FaCogs color="#e50914" />, name: 'CI/CD', color: '#e50914' },
  { icon: <FaDocker color="#2496ed" />, name: 'Docker', color: '#2496ed' },
  { icon: <FaRobot color="#b3b3b3" />, name: 'Selenium', color: '#b3b3b3' },
]

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.10,
      duration: 0.7,
      type: 'spring',
    },
  }),
}

const CircularProgress = ({ value, color }) => (
  <svg width="64" height="64" viewBox="0 0 64 64">
    <circle
      cx="32" cy="32" r="28"
      stroke="#222" strokeWidth="8" fill="none"
    />
    <circle
      cx="32" cy="32" r="28"
      stroke={color}
      strokeWidth="8"
      fill="none"
      strokeDasharray={2 * Math.PI * 28}
      strokeDashoffset={2 * Math.PI * 28 * (1 - value / 100)}
      strokeLinecap="round"
      style={{ transition: 'stroke-dashoffset 1s cubic-bezier(.4,2,.6,1)' }}
    />
    <text x="32" y="38" textAnchor="middle" fontSize="1.2rem" fill="#fff" fontWeight="bold">{value}%</text>
  </svg>
)

const About = () => {
  return (
    <section id="about" className="about about-bg-video-section">
      <div className="about-bg-video-wrapper">
        <video className="about-bg-video" src="src/Page/aboutbg.mp4" autoPlay loop muted playsInline />
        <div className="about-bg-overlay" />
      </div>
      <div className="container about-modern about-maxw-7xl" style={{ position: 'relative', zIndex: 2 }}>
        <motion.h2 className="about-heading" initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, type: 'spring' }} viewport={{ once: true }}>
          About Me
        </motion.h2>
        {/* Education Full Width */}
        <motion.div className="about-education-full" initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
          <h3>Education</h3>
          <ul>
            {education.map((edu, i) => (
              <li key={i} className="timeline-item">
                <span className="timeline-icon">{edu.icon}</span>
                <div className="timeline-content">
                  <span className="timeline-school">{edu.school}</span>
                  <span className="timeline-degree">{edu.degree}</span>
                  <span className="timeline-period">{edu.period}</span>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>
        {/* Unified Skill Cards Grid */}
        <h3 className="skills-cards-heading">My Top Skills</h3>
        <div className="about-skills-cards-grid">
          {skillCards.map((skill, i) => (
            <motion.div
              className="skill-card"
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
              viewport={{ once: true }}
              whileHover={{ scale: 1.07, boxShadow: `0 8px 32px 0 ${skill.color}44` }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="skill-icon" style={{ color: skill.color, fontSize: '2.2rem', marginBottom: '1.2rem' }}>{skill.icon}</div>
              <div className="skill-info">
                <span className="skill-name">{skill.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About 