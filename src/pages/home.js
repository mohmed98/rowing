import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Image } from "react-bootstrap";

function Home() {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  const [lastYpos, setLastYPos] = useState(0);
  useEffect(() => {
    function handelScroll() {
      const yPos = window.scrollY;
      const isScrollingUp = yPos < lastYpos;
      setShouldAnimate(isScrollingUp);
      setLastYPos(yPos);
    }
    window.addEventListener("scroll", handelScroll, false);

    return () => {
      window.removeEventListener("scroll", handelScroll, false);
    };
  });
  return (
    <>
      <div className="pageBody">
        <motion.div whileTap={{ scale: 0.9 }}>
          <h1>Home</h1>
        </motion.div>
        <motion.div
          className="topElement"
          animate={{ opacity: shouldAnimate ? 1 : 0 }}
          initial={{ opacity: 0 }}
        >
          <Image src="https://images.unsplash.com/photo-1569406125624-98ee19b01d4a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" />
        </motion.div>
        <motion.div
          className="lastElement"
          animate={{ opacity: shouldAnimate ? 0 : 1 }}
          initial={{ opacity: 0 }}
        >
          <p>
            Donec sit amet augue at enim sollicitudin porta. Praesent finibus ex
            velit, quis faucibus libero congue et. Quisque convallis eu nisl et
            congue. Vivamus eget augue quis ante malesuada ullamcorper. Sed orci
            nulla, eleifend eget dui faucibus, facilisis aliquet ante.
            Suspendisse sollicitudin nibh lacus, ut bibendum risus elementum a.
          </p>
        </motion.div>
      </div>
    </>
  );
}

export default Home;
