/* DEPENDENCIES */
import React, { useEffect, useState } from "react";

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

  // If videos are loaded, show videos
  return (
    <div id="homepage">
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
        <button className="borders" id="start-crafting">
          Take survey
        </button>
      </div>
    </div>
  );
};

/* EXPORT */
export default Home;
