import React, { useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Presentation from "./components/Presentation";
import Video from "./components/Video";
import Footer from "./components/Footer";

function App() {
  const videoRef = useRef(null);
  const footerRef = useRef(null);

  // Function to scroll to the Video component
  const scrollToVideo = () => {
    if (videoRef.current) {
      videoRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToFooter = () => {
    if (footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="App">
      <Header scrollToVideo={scrollToVideo} scrollToFooter={scrollToFooter} />
      <Presentation />
      <div ref={videoRef}>
        <Video />
      </div>
      <Footer ref={footerRef} />
    </div>
  );
}

export default App;
