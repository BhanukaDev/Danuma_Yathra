/* eslint-disable react/prop-types */

import AnimatedNumber from "react-animated-numbers";
import { BrowserView, MobileView } from "react-device-detect";

export default function CounterAnime({
  children = 0,

  className,
}) {
  let end = parseFloat(children, 10);

  return (
    <>
      <BrowserView>
        <AnimatedNumber
          transitions={(index) => ({
            type: "spring",
            duration: index + 0.1,
          })}
          animateToNumber={end}
          className={className}
        />
      </BrowserView>
      <MobileView>{end}</MobileView>
    </>
  );
}
