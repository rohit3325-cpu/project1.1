
import Hero from './components/Hero'
import Navbar from './components/Navbar'
// import './App.css
import Services from './components/Services'
import About from './components/About'
import Contactform from './components/Contactform'

function App() {
  

  return (
    <>
     <div className="w-full h-full">
         <Hero />
         <Navbar />
         <About />
         <Services />
         <Contactform />
     </div>
     </>
  )
}

export default App
