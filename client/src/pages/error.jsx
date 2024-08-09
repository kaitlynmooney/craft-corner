/* DEPENDENCIES */
import React from "react";
import Header from "../components/Header";

/* STYLES */
const styles = {
  heading: {
    position: "absolute",
    top: "48%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "var(--text-color)",
    fontSize: "3rem",
    textAlign: "center",
    zIndex: "1",
    fontWeight: "300",
  },
};

/* ERROR PAGE */
const Error = () => {
  return (
    <div>
      <Header />
      <h1 className="inter" style={styles.heading}>
        This page doesn't exist!
      </h1>
    </div>
  );
};

/* EXPORT */
export default Error;
