import { useEffect } from 'react';
import "./index.css";
import Navbar from './components/navbar/Navbar';
import Banner from './components/banner/Banner';
import Features from './components/features/Features';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Project from './components/projects/Project';
import Resume from './components/resume/Resume';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import FooterBottom from './components/footer/FooterBottom';
import "react-circular-progressbar/dist/styles.css";

function setCookie(name: string, value: string, days:number) {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
function App() {
  useEffect( () => {
    setCookie("mycookie", "vanessa", 3)
  }, []); 

  return (
    <div>
      <div className="w-full h-auto bg-bodyColor text-lihtText ">
        <div className='max-w-screen-xl mx-auto '>
          <Navbar />
        </div>
        <Banner />
        <Features />
        <Project />
        <Resume />
        <Contact />
        <Footer />
        <FooterBottom />
      </div>
    </div>
  );
 
}

export default App;
