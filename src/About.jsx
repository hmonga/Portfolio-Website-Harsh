import { useNavigate } from 'react-router-dom'
import SplitText from './components/SplitText'
import Threads from './components/Threads'
import './About.css'

function About() {
  const navigate = useNavigate()

  return (
    <div className="about-page">
      {/* Threads Background */}
      <div className="threads-background">
        <Threads />
      </div>

      <button className="back-button" onClick={() => navigate('/')}>
        ← Back to Home
      </button>
      
      <div className="about-container">
        <div className="about-header">
          <SplitText 
            text="About Me" 
            tag="h1"
            delay={50}
            duration={0.8}
            splitType="chars"
            from={{ opacity: 0, y: 50 }}
            to={{ opacity: 1, y: 0 }}
          />
        </div>

        <div className="about-content">
          {/* Profile Section */}
          <section className="profile-section">
            <div className="profile-image-container">
              <img src="/profile.png" alt="Harsh Monga" className="profile-image" />
            </div>
            <div className="profile-info">
              <h2>Harsh Monga</h2>
              <p className="title">Computer Science & Data Science Student</p>
              <p className="university">Rutgers University • Class of 2027 • GPA: 3.9</p>
            </div>
          </section>

          {/* Main Content - Side by Side */}
          <div className="main-content-layout">
            {/* Bio Section */}
            <section className="bio-section">
              <p className="bio-paragraph">
                I'm Harsh Monga, a junior at Rutgers University majoring in Computer Science with a Data Science minor, graduating in 2027 with a 3.9 GPA. I'm passionate about using data to uncover patterns, drive decisions, and build solutions that create real-world impact.
              </p>
              
              <p className="bio-paragraph">
                I've gained hands-on experience through roles with the U.S. Army Reserve, Whole Foods Market, and a PSE&G Data Science Externship, where I learned how data, logistics, and teamwork come together to solve complex problems. I'm skilled in Python, SQL, Pandas, scikit-learn, and Tableau, and I'm currently developing new projects to strengthen my data science portfolio.
              </p>
              
              <p className="bio-paragraph">
                Based in Metuchen, NJ, I'm seeking data science internships where I can apply analytical thinking, coding skills, and curiosity to help organizations make smarter, data-driven decisions.
              </p>
            </section>

            {/* Gallery Section */}
            <section className="gallery-section">
              <h2>My Journey</h2>
              <div className="image-grid">
                <div className="image-card">
                  <img src="/Rutgers.png" alt="Rutgers University" className="gallery-image" />
                  <p className="image-caption">Rutgers University</p>
                </div>
                
                <div className="image-card">
                  <img src="/Vexu.jpg" alt="VEXU Robotics" className="gallery-image" />
                  <p className="image-caption">VEXU Robotics</p>
                </div>
                
                <div className="image-card">
                  <img src="/pseg.png" alt="PSE&G Externship" className="gallery-image" />
                  <p className="image-caption">PSE&G Data Science Externship</p>
                </div>
                
                <div className="image-card">
                  <img src="/army.jpeg" alt="U.S. Army Reserve" className="gallery-image" />
                  <p className="image-caption">U.S. Army Reserve</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

