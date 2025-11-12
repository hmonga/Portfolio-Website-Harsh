import { Suspense } from 'react'
import './App.css'
import Beams from './components/Beams'
import InfiniteMenu from './components/InfiniteMenu'

const menuItems = [
  {
    image: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
    link: 'https://github.com/hmonga',
    title: 'GitHub',
    description: 'Code & Projects'
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png',
    link: 'https://www.linkedin.com/in/harsh-monga/',
    title: 'LinkedIn',
    description: 'Professional Network'
  },
  {
    image: 'https://api.iconify.design/material-symbols/folder-open.svg?color=%23667eea&width=800&height=800',
    link: '/portfolio',
    title: 'Portfolio',
    description: 'My Work'
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg',
    link: '/contact',
    title: 'Contact',
    description: 'Get in Touch'
  },
  {
    image: '/profile.png',
    link: '/about',
    title: 'About',
    description: 'Learn More'
  }
]

function Home() {
  return (
    <div className="App">
      <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
        {/* Beams Background */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
          <Beams
            beamWidth={2}
            beamHeight={15}
            beamNumber={12}
            lightColor="#ffffff"
            speed={2}
            noiseIntensity={1.75}
            scale={0.2}
            rotation={0}
          />
        </div>
        
        {/* InfiniteMenu Overlay */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}>
          <InfiniteMenu items={menuItems} />
        </div>
      </div>
    </div>
  )
}

export default Home

