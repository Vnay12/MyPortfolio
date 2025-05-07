import React from 'react'
import Hero from './sections/Hero.jsx'
import ShowcaseSection from './sections/ShowcaseSection.jsx';
import AppShowcase from './sections/ShowcaseSection.jsx'
import Projects from './sections/Projects.jsx';
import LogoShowcase from './components/LogoSection.jsx';

const App = () => {
  return (
<>
<Hero />
<ShowcaseSection />
<Projects />
<LogoShowcase />

</>
  )
}

export default App