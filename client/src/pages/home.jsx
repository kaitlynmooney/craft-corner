/* DEPENDENCIES */
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

/* HOMEPAGE */
const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  // When videos are loaded, move off loading screen
  const handleLoad = () => {
    setLoading(false);
  };

  const navigate = useNavigate();

  const handleStartSurvey = () => {
    navigate('/survey');
  };

  // If videos are loaded, show videos
  return (
    <div id="homepage" className='bg-image'>
      <div id="homepage-video">
        {!loading ? (
          <iframe
            src={`https://player.vimeo.com/video/997764101?autoplay=1&loop=1&background=1`}
            allow="autoplay; fullscreen"
            title="Various crafts"
            onLoad={() => handleLoad()}
          ></iframe>
        ) : (
          <div className="loading-spinner"></div>
        )}
      </div>
      <div id="homepage-content">
        <button className="borders" id="start-crafting" type="submit" onClick={handleStartSurvey}>
          Start Crafting! &#8594;
        </button>
      </div>
    </div>
  );
};

/* EXPORT */
export default Home;
