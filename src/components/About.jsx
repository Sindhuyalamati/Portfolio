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

// Skills organized by categories
const skillsCategories = [
  {
    category: 'Programming Languages',
    skills: [
      { icon: <FaPython color="#3776ab" />, name: 'Python', color: '#3776ab' },
      { icon: <FaJs color="#f7df1e" />, name: 'JavaScript (ES6+)', color: '#f7df1e' },
      { icon: <SiTypescript color="#3178c6" />, name: 'TypeScript', color: '#3178c6' },
      { icon: <FaCode color="#555" />, name: 'C', color: '#555' },
    ]
  },
  {
    category: 'Backend APIs',
    skills: [
      { icon: <SiFastapi color="#009688" />, name: 'FastAPI', color: '#009688' },
      { icon: <FaFlask color="#000" />, name: 'Flask', color: '#fff' },
      { icon: <SiNodedotjs color="#339933" />, name: 'Node.js', color: '#339933' },
      { icon: <SiSpring color="#6db33f" />, name: 'Spring Boot', color: '#6db33f' },
      { icon: <FaServer color="#00bcd4" />, name: 'REST APIs', color: '#00bcd4' },
      { icon: <FaCheckCircle color="#4caf50" />, name: 'Authentication', color: '#4caf50' },
      { icon: <FaRocket color="#9c27b0" />, name: 'WebSockets', color: '#9c27b0' },
    ]
  },
  {
    category: 'Frontend Development',
    skills: [
      { icon: <SiReact color="#61dafb" />, name: 'ReactJS', color: '#61dafb' },
      { icon: <SiNextdotjs color="#000" />, name: 'Next.js', color: '#fff' },
      { icon: <FaHtml5 color="#e44d26" />, name: 'HTML', color: '#e44d26' },
      { icon: <FaCss3Alt color="#1572b6" />, name: 'CSS', color: '#1572b6' },
      { icon: <SiTailwindcss color="#06b6d4" />, name: 'Tailwind CSS', color: '#06b6d4' },
      { icon: <FaCheckCircle color="#00bcd4" />, name: 'Responsive UI Components', color: '#00bcd4' },
      { icon: <SiFigma color="#f24e1e" />, name: 'Modern UI/UX Practices', color: '#f24e1e' },
    ]
  },
  {
    category: 'Database Technologies',
    skills: [
      { icon: <SiPostgresql color="#336791" />, name: 'PostgreSQL', color: '#336791' },
      { icon: <SiMysql color="#4479a1" />, name: 'MySQL', color: '#4479a1' },
      { icon: <SiFirebase color="#ffca28" />, name: 'Firebase', color: '#ffca28' },
      { icon: <FaDatabase color="#00bcd4" />, name: 'SQL (queries & indexing)', color: '#00bcd4' },
      { icon: <FaTable color="#9c27b0" />, name: 'Time-Series & Geospatial Modeling', color: '#9c27b0' },
    ]
  },
  {
    category: 'Cloud & DevOps',
    skills: [
      { icon: <FaCloud color="#00bcd4" />, name: 'AWS (S3, RDS, ECR, CloudFront, App Runner, EC2, Route53, IAM)', color: '#00bcd4' },
      { icon: <SiVercel color="#fff" />, name: 'Vercel', color: '#fff' },
      { icon: <SiSupabase color="#3ecf8e" />, name: 'Supabase', color: '#3ecf8e' },
      { icon: <FaCheckCircle color="#4caf50" />, name: 'Ngrok', color: '#4caf50' },
      { icon: <FaDocker color="#2496ed" />, name: 'Docker', color: '#2496ed' },
      { icon: <SiJenkins color="#d33833" />, name: 'Jenkins', color: '#d33833' },
      { icon: <SiTerraform color="#7b42bc" />, name: 'Terraform', color: '#7b42bc' },
      { icon: <FaGitAlt color="#f34f29" />, name: 'Git/GitHub', color: '#f34f29' },
      { icon: <FaCogs color="#00bcd4" />, name: 'CI/CD', color: '#00bcd4' },
      { icon: <FaRocket color="#ff9800" />, name: 'IaC', color: '#ff9800' },
    ]
  },
  {
    category: 'Testing & Automation',
    skills: [
      { icon: <FaRobot color="#b3b3b3" />, name: 'Selenium', color: '#b3b3b3' },
      { icon: <FaCheckCircle color="#4caf50" />, name: 'Robot Framework', color: '#4caf50' },
      { icon: <FaTools color="#ff9800" />, name: 'Automated Testing', color: '#ff9800' },
      { icon: <FaCheckCircle color="#2196f3" />, name: 'QA Processes', color: '#2196f3' },
      { icon: <FaCogs color="#f44336" />, name: 'Debugging & Troubleshooting', color: '#f44336' },
    ]
  },
  {
    category: 'AI & Data Tools',
    skills: [
      { icon: <FaCheckCircle color="#e50914" />, name: 'Prompt Engineering', color: '#e50914' },
      { icon: <MdOutlineSmartToy color="#e50914" />, name: 'GPT-based Automation', color: '#e50914' },
      { icon: <SiPandas color="#130754" />, name: 'Pandas', color: '#130754' },
      { icon: <MdOutlineSmartToy color="#e50914" />, name: 'Cursor AI', color: '#e50914' },
      { icon: <TbBolt color="#ffb300" />, name: 'Bolt.diy', color: '#ffb300' },
      { icon: <FaRocket color="#9c27b0" />, name: 'AI Workflow Integration', color: '#9c27b0' },
    ]
  },
  {
    category: 'UI/UX & Visualization',
    skills: [
      { icon: <SiFigma color="#f24e1e" />, name: 'Figma (systems, wireframes, prototyping)', color: '#f24e1e' },
      { icon: <FaLeaf color="#4caf50" />, name: 'Leaflet.js', color: '#4caf50' },
      { icon: <FaCheckCircle color="#2196f3" />, name: 'Interactive Maps', color: '#2196f3' },
      { icon: <SiTableau color="#005f9e" />, name: 'Tableau', color: '#005f9e' },
      { icon: <FaCheckCircle color="#ff9800" />, name: 'Postman', color: '#ff9800' },
      { icon: <FaCode color="#007acc" />, name: 'VS Code', color: '#007acc' },
    ]
  },
  {
    category: 'Other Skills',
    skills: [
      { icon: <FaCheckCircle color="#00bcd4" />, name: 'Linux', color: '#00bcd4' },
      { icon: <FaCheckCircle color="#0078d4" />, name: 'Windows', color: '#0078d4' },
      { icon: <FaRocket color="#4caf50" />, name: 'Agile Methodologies', color: '#4caf50' },
      { icon: <FaCode color="#555" />, name: 'Bash Scripting', color: '#555' },
      { icon: <FaRocket color="#ff9800" />, name: 'Production Deployment Workflows', color: '#ff9800' },
    ]
  },
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
        {/* Skills by Categories - Badge Style */}
        <h3 className="skills-cards-heading">Skills</h3>
        <div className="skills-categories-container">
          {skillsCategories.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              className="skill-category"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={skillsContainerVariants}
            >
              <h4 className="skill-category-heading">{category.category}</h4>
              <motion.div 
                className="skills-badges-container"
                variants={skillsContainerVariants}
              >
                {category.skills.map((skill, i) => (
                  <motion.span
                    className="skill-badge"
                    key={i}
                    variants={skillCardVariants}
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                    style={{ '--skill-color': skill.color }}
                  >
                    <span className="skill-badge-icon">{skill.icon}</span>
                    <span className="skill-badge-name">{skill.name}</span>
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About 