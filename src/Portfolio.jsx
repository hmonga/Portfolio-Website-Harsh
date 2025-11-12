import { useNavigate } from 'react-router-dom'
import SplitText from './components/SplitText'
import Threads from './components/Threads'
import './Portfolio.css'

function Portfolio() {
  const navigate = useNavigate()

  const projects = [
    {
      id: 1,
      title: 'NYC Citi Bike Station Status',
      description: 'Interactive Streamlit app that visualizes real-time Citi Bike availability across New York City. Pulls live GBFS feeds, overlays stations on a Folium map, lets you filter by dock/bike counts or bike type, and finds the nearest station to any address with optional routing via OSRM.',
      tags: ['Python', 'Streamlit', 'Folium', 'GBFS API', 'OSRM', 'Data Visualization'],
      github: 'https://github.com/hmonga/NYC-Citi-Bike-Station-Status',
      demo: 'https://nycbikestatus.streamlit.app/',
      image: '/Bike.png'
    },
    {
      id: 2,
      title: 'Sales Data Analysis',
      description: 'End-to-end sales data analysis project featuring data cleaning, exploratory analysis, and predictive modeling using linear regression. Analyzes sales patterns across products and regions with Python, Pandas, and scikit-learn.',
      tags: ['Python', 'Pandas', 'scikit-learn', 'Linear Regression', 'Data Cleaning', 'EDA'],
      github: 'https://github.com/hmonga/Sales_Data_Analysis',
      demo: null,
      image: '/Sales.png'
    },
    {
      id: 3,
      title: 'PocketLab - Science Lab in Your Pocket',
      description: 'Lead Developer & Project Manager | Empower Hacks 3.0 (2nd Place Winner). Mobile-accessible science lab web app that transforms smartphones into real-time physics and chemistry tools. Features 180+ interactive chemical reactions with a custom chemistry engine, drag-and-drop interactions, and temperature-dependent simulations. Built as an offline-first Progressive Web App using Service Workers to reach students in low-connectivity regions. Aligned with UN SDG 4 (Quality Education) and distributed as open-source.',
      tags: ['HTML5', 'JavaScript', 'PWA', 'Web APIs', 'Service Workers', 'Chemistry Engine', 'Vercel', 'Firebase'],
      github: 'https://github.com/hmonga/EduConnect',
      demo: 'https://edu-connect-cyan.vercel.app/',
      image: '/Pocket.png'
    },
    {
      id: 4,
      title: 'Election Analysis',
      description: 'Java data visualization tool for analyzing historical U.S. House and Senate election results. Parses CSV files and organizes data using custom linked data structures (YearNode, StateNode, ElectionNode). Features a graphical interface for exploring voter trends, candidate details, and winning parties across states and years.',
      tags: ['Java', 'Data Structures', 'Linked Lists', 'GUI', 'Data Visualization', 'CSV Parsing'],
      github: 'https://github.com/hmonga/Election-Analysis',
      demo: null,
      image: '/Election.png'
    },
    {
      id: 5,
      title: 'LeetCode Tracker',
      description: 'Web application to track LeetCode progress and statistics in real-time. Features user authentication with Firebase, tracks solved problems (easy/medium/hard breakdown), acceptance rate, streak tracking, and progress visualization with charts. Full-stack application with React frontend and Spring Boot backend.',
      tags: ['React', 'Vite', 'Firebase', 'Spring Boot', 'Java', 'Axios', 'Data Visualization'],
      github: 'https://github.com/hmonga/LeetCode-Tracker',
      demo: 'https://leet-code-tracker-roan.vercel.app/',
      image: '/Leetcode.png'
    }
  ]

  return (
    <div className="portfolio-page">
      {/* Threads Background */}
      <div className="threads-background">
        <Threads />
      </div>

      <button className="back-button" onClick={() => navigate('/')}>
        ← Back to Home
      </button>
      
      <div className="portfolio-container">
        <div className="portfolio-header">
          <SplitText 
            text="My Portfolio" 
            tag="h1"
            delay={50}
            duration={0.8}
            splitType="chars"
            from={{ opacity: 0, y: 50 }}
            to={{ opacity: 1, y: 0 }}
          />
          <p className="portfolio-subtitle">Showcasing my data science and development projects</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={project.id} className="project-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="project-image-container">
                {project.image && project.image.startsWith('/') && !project.image.includes('placeholder') ? (
                  <img src={project.image} alt={project.title} className="project-image" />
                ) : (
                  <div className="project-image-placeholder">
                    <span className="project-number">Project {project.id}</span>
                    <span className="add-image-text">Add project image</span>
                  </div>
                )}
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  {project.github && project.github !== '#' && (
                    <a href={project.github} className="project-link github-link" target="_blank" rel="noopener noreferrer">
                      <span>GitHub</span>
                    </a>
                  )}
                  {project.demo && project.demo !== '#' && project.demo !== null && (
                    <a href={project.demo} className="project-link demo-link" target="_blank" rel="noopener noreferrer">
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio

