import { useEffect, useState } from 'react';
import './Skills.css'; // Import file CSS untuk animasi
import data from "../../data/index.json"; // Import data statis

export default function MySkills() {
  const [isLoaded, setIsLoaded] = useState(false); // State untuk menandai apakah komponen sudah dimuat

  useEffect(() => {
    // Setelah komponen dimuat, atur state isLoaded menjadi true
    setIsLoaded(true);
  }, []);

  return (
    <section className={`skills--section ${isLoaded ? 'slide-in' : ''}`} id="mySkills">
      <div className="portfolio--container">
        <h2 className="skills--section--heading">My Expertise</h2>
      </div>
      <div className="skills--section--container">
        {data?.skills?.map((item, index) => (
          <div key={index} className="skills--section--card">
            <div className="skills--section--img">
              <img src={item.src} alt="Front End" style={{ width: "50px", height: "50px" }} />
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">{item.title}</h3>
              <p className="skills--section--description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
