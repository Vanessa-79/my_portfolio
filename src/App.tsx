import React, { useEffect } from 'react';
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
import FloatingButtons from './components/FloatingButtons';
import { ThemeProvider } from './context/ThemeContext';
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

const App: React.FC = () => {
  useEffect(() => {
    setCookie("mycookie", "vanessa", 3);
  }, []); 

  return (
    <ThemeProvider>
      <div className="w-full h-auto bg-[#ffffff] text-[#1e2024] dark:bg-[#212428] dark:text-[#c4cfde] transition-colors duration-200">
        <div className='max-w-screen-xl mx-auto'>
          <Navbar />
        </div>
        <Banner />
        <Features />
        <Project />
        <Resume />
        <Contact />
        <Footer />
        <FooterBottom />
        <FloatingButtons />
      </div>
    </ThemeProvider>
  );
};

export default App;
