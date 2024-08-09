/* DEPENDENCIES */
import React from "react";

/* STYLES */
const styles = {
  background: {
    background: "var(--clear)",
    position: "relative",
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
  },
  iframe: {
    background: "var(--clear)",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    border: "none",
    pointerEvents: "none",
    zIndex: "-1",
  },
  heading: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "white",
    fontSize: "3rem",
    textAlign: "center",
    zIndex: "1",
  },
};

/* ERROR PAGE */
const Error = () => {
  return (
    <div style={styles.background}>
      <iframe
        src="https://player.vimeo.com/video/996390689?autoplay=1&loop=1&background=1"
        allow="autoplay; fullscreen"
        title="painting"
        style={styles.iframe}
      ></iframe>
      <h1 className="sofia" style={styles.heading}>
        This page doesn't exist!
      </h1>
    </div>
  );
};

/* EXPORT */
export default Error;
