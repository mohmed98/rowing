import { motion, useElementScroll } from "framer-motion";
import React, { useRef } from "react";

function RowingTypes() {
  const ref = useRef();
  const { scrollYProgress } = useElementScroll(ref);
  return (
    <>
      <h1>rowingTypes</h1>
      <p>
        Donec sit amet augue at enim sollicitudin porta. Praesent finibus ex
        velit, quis faucibus libero congue et. Quisque convallis eu nisl et
        congue. Vivamus eget augue quis ante malesuada ullamcorper. Sed orci
        nulla, eleifend eget dui faucibus, facilisis aliquet ante. Suspendisse
        sollicitudin nibh lacus, ut bibendum risus elementum a.
      </p>
      <div ref={ref}>
        <motion.div
          style={{ scaleX: scrollYProgress }}
          animate={{ scale: 0.5 }}
        >
          HEllo
        </motion.div>
      </div>
    </>
  );
}

export default RowingTypes;
