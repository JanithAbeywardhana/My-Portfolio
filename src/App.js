
import './App.css';
import { NavBar } from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import bgImage from './assets/vedio/VedioBg.mov';
import { Projects } from './components/Projects';
import { Cv } from './components/Cv';
import { Contact } from './components/Contact';
import { Blog } from './components/Blog';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <video autoPlay loop muted>
        <source src={bgImage} type='video/mp4'/>
      </video>
      
       <NavBar/>
       <Banner />
       <Skills />
       <Projects />
       <Cv />
       <Contact />
       <Blog />
       <Footer />
        
       
    </div>
  );
}

export default App;
