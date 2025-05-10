import React from 'react'
import Hero from './sections/Hero.jsx'
import ShowcaseSection from './sections/ShowcaseSection.jsx';
import AppShowcase from './sections/ShowcaseSection.jsx'
import Projects from './sections/Projects.jsx';
import LogoShowcase from './components/LogoSection.jsx';
import FeaturedCard from './sections/FeaturedCard.jsx';
import Experience from './sections/ExperienceSection.jsx';
import TechStack from './sections/TechStack.jsx';
import Contact from './sections/Contact.jsx';

const App = () => {
  return (
<>
<Hero />
<ShowcaseSection />
<Projects />
<LogoShowcase />
<FeaturedCard />
<Experience />
<TechStack /> 
<Contact />

</>
  )
}

export default App