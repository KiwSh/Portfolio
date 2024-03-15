import { useEffect, useState } from 'react';
import Navbar from './Navbar';

export default function HeroSection() {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const greetingsArray = ["Hai, Saya Muhammad Rifqi Dwi Putra"];

    let countGreeting = 0;
    let indexGreeting = 0;
    let currentGreeting = '';
    let letterGreeting = '';

    const typingEffect = () => {
      if (countGreeting === greetingsArray.length) {
        countGreeting = 0;
      }
      currentGreeting = greetingsArray[countGreeting];
      letterGreeting = currentGreeting.slice(0, ++indexGreeting);
      setGreeting(letterGreeting);
      if (letterGreeting.length === currentGreeting.length) {
        countGreeting++;
        indexGreeting = 0;
      }
    };

    const typingInterval = setInterval(typingEffect, 150);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      <Navbar style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: '9999' }} /> {/* Atur posisi navbar */}
      <section id="heroSection" className={`hero--section slide-in`}>
        <div className="hero--section--content--box">
          <div className="hero--section--content">
            <p className="section--title">{greeting}</p>
            <h1 className="hero--section--title">
              <span className="hero--section-title--color">Saya Pelajar SMKN 1 Ciomas</span> <br />
            </h1>
            <p className="hero--section-description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              <br /> Dolorum, quas. Amet soluta assumenda cum?
            </p>
          </div>
          <button className="btn btn-primary">Get In Touch</button>
        </div>
        <div className="hero--section--img">
          <img src="./img/fotorifqi.png" alt="Hero Section" />
        </div>
      </section>
    </div>
  );
}
