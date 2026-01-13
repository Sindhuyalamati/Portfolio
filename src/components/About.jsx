import React from 'react'
import { motion } from 'framer-motion'
import { FaGraduationCap, FaUniversity, FaPython, FaJs, FaCode, FaServer, FaCloud, FaCogs, FaFlask, FaDocker, FaAws, FaRobot, FaLeaf, FaCheckCircle, FaRocket, FaTools, FaHtml5, FaCss3Alt, FaDatabase, FaGitAlt, FaGithub, FaTable } from 'react-icons/fa'
import { SiSupabase, SiJenkins, SiVercel, SiTableau, SiPandas, SiReact, SiFastapi, SiNodedotjs, SiSpring, SiTypescript, SiNextdotjs, SiTailwindcss, SiFigma, SiPostgresql, SiMysql, SiFirebase, SiTerraform } from 'react-icons/si'
import { TbBolt } from 'react-icons/tb'
import { MdOutlineSmartToy } from 'react-icons/md'
import '../styles/About.css'

const education = [
  {
    icon: <FaUniversity color="#00bcd4" size={24} />, // bright cyan
    school: 'University of Nevada, Reno',
    degree: 'Masters in Computer Science',
    period: 'Jan 2024-present',
    gpa: 'GPA: 3.9/4',
  },
  {
    icon: <FaGraduationCap color="#ffb300" size={24} />, // bright yellow
    school: 'Sasi Institute of Technology and Engineering, India',
    degree: 'Bachelors in Computer Science and Engineering',
    period: 'Aug 2019 – May 2023',
    gpa: 'GPA: 3.56/4',
  },
]

// Unified skill cards (icon, name, color)
const skillCards = [
  { icon: <FaPython color="#3776ab" />, name: 'Python', color: '#3776ab' },
  { icon: <FaJs color="#f7df1e" />, name: 'JavaScript', color: '#f7df1e' },
  { icon: <SiTypescript color="#3178c6" />, name: 'TypeScript', color: '#3178c6' },
  { icon: <SiReact color="#61dafb" />, name: 'ReactJS', color: '#61dafb' },
  { icon: <SiNextdotjs color="#000" />, name: 'Next.js', color: '#fff' },
  { icon: <SiFastapi color="#009688" />, name: 'FastAPI', color: '#009688' },
  { icon: <FaFlask color="#000" />, name: 'Flask', color: '#fff' },
  { icon: <SiNodedotjs color="#339933" />, name: 'Node.js', color: '#339933' },
  { icon: <SiSpring color="#6db33f" />, name: 'Spring Boot', color: '#6db33f' },
  { icon: <FaHtml5 color="#e44d26" />, name: 'HTML', color: '#e44d26' },
  { icon: <FaCss3Alt color="#1572b6" />, name: 'CSS', color: '#1572b6' },
  { icon: <SiTailwindcss color="#06b6d4" />, name: 'Tailwind CSS', color: '#06b6d4' },
  { icon: <SiPostgresql color="#336791" />, name: 'PostgreSQL', color: '#336791' },
  { icon: <SiMysql color="#4479a1" />, name: 'MySQL', color: '#4479a1' },
  { icon: <SiFirebase color="#ffca28" />, name: 'Firebase', color: '#ffca28' },
  { icon: <SiSupabase color="#3ecf8e" />, name: 'Supabase', color: '#3ecf8e' },
  { icon: <FaCloud color="#00bcd4" />, name: 'AWS', color: '#00bcd4' },
  { icon: <SiVercel color="#fff" />, name: 'Vercel', color: '#fff' },
  { icon: <FaDocker color="#2496ed" />, name: 'Docker', color: '#2496ed' },
  { icon: <SiJenkins color="#d33833" />, name: 'Jenkins', color: '#d33833' },
  { icon: <SiTerraform color="#7b42bc" />, name: 'Terraform', color: '#7b42bc' },
  { icon: <FaGitAlt color="#f34f29" />, name: 'Git', color: '#f34f29' },
  { icon: <FaGithub color="#fff" />, name: 'GitHub', color: '#fff' },
  { icon: <SiFigma color="#f24e1e" />, name: 'Figma', color: '#f24e1e' },
  { icon: <FaRobot color="#b3b3b3" />, name: 'Selenium', color: '#b3b3b3' },
  { icon: <SiPandas color="#130754" />, name: 'Pandas', color: '#130754' },
  { icon: <SiTableau color="#005f9e" />, name: 'Tableau', color: '#005f9e' },
  { icon: <MdOutlineSmartToy color="#e50914" />, name: 'Cursor AI', color: '#e50914' },
  { icon: <TbBolt color="#ffb300" />, name: 'Bolt.diy', color: '#ffb300' },
]

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: Math.min(i * 0.02, 0.4),
      duration: 0.4,
      ease: "easeOut",
    },
  }),
}

const skillsContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.02,
      delayChildren: 0.05,
    },
  },
}

const skillCardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
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
        <video className="about-bg-video" src="images/aboutbg.mp4" autoPlay loop muted playsInline />
        <div className="about-bg-overlay" />
      </div>
      <div className="container about-modern about-maxw-7xl" style={{ position: 'relative', zIndex: 2 }}>
        <motion.h2 className="about-heading" initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, type: 'spring' }} viewport={{ once: true }}>
          About Me
        </motion.h2>
        {/* Education Section */}
        <motion.div className="about-education-section" initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
          <h3 className="education-heading">Education</h3>
          <div className="education-cards">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                className="education-card"
                custom={i}
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="education-icon-wrapper">
                  {edu.icon}
                </div>
                <div className="education-content">
                  <h4 className="education-school">{edu.school}</h4>
                  <p className="education-degree">{edu.degree}</p>
                  <div className="education-meta">
                    <span className="education-period">{edu.period}</span>
                    <span className="education-gpa">{edu.gpa}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        {/* Unified Skill Cards Grid */}
        <h3 className="skills-cards-heading">My Top Skills</h3>
        <motion.div 
          className="about-skills-cards-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={skillsContainerVariants}
        >
          {skillCards.map((skill, i) => (
            <motion.div
              className="skill-card"
              key={i}
              variants={skillCardVariants}
              whileHover={{ scale: 1.07, boxShadow: `0 8px 32px 0 ${skill.color}44` }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="skill-icon" style={{ color: skill.color, fontSize: '2.2rem', marginBottom: '1.2rem' }}>{skill.icon}</div>
              <div className="skill-info">
                <span className="skill-name">{skill.name}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About 