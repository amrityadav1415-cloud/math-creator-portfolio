import { useEffect } from "react";
import AnimatedCursor from "react-animated-cursor";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SocialSection from "./components/SocialSection";
import Videos from "./components/Videos";
import Reels from "./components/Reels";
import About from "./components/About";
import Brands from "./components/Brands";
import Testimonials from "./components/Testimonials";
import FooterCTA from "./components/FooterCTA";

function App() {

  useEffect(() => {

    const cursor =
      document.querySelector(".sigma-cursor");

    const moveCursor = (e) => {

      if(cursor){

        cursor.style.left =
          `${e.clientX}px`;

        cursor.style.top =
          `${e.clientY}px`;
      }
    };

    window.addEventListener(
      "mousemove",
      moveCursor
    );

    return () => {

      window.removeEventListener(
        "mousemove",
        moveCursor
      );
    };

  }, []);

  return (

    <>

      <AnimatedCursor
        innerSize={0}
        outerSize={0}

        color='139,92,246'

        outerAlpha={0}
        innerScale={0}
        outerScale={0}

        clickables={[
          'a',
          'button',
          '.video-card',
          '.reel-card',
          '.social-card',
          '.brand-card'
        ]}
      />

      <div className="sigma-cursor">
        Σ
      </div>

      <Navbar />

      <Hero />

      <SocialSection />

      <Videos />

      <Reels />

      <About />

      <Brands />

      <Testimonials />

      <FooterCTA />

    </>
  );
}

export default App;