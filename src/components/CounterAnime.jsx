/* eslint-disable react/prop-types */

import AnimatedNumber from "react-animated-numbers";

export default function CounterAnime({
  children = 0,

  className,
}) {
  let end = parseFloat(children, 10);

  return (
    <AnimatedNumber
      transitions={(index) => ({
        type: "spring",
        duration: index + 0.1,
      })}
      animateToNumber={end}
      className={className}
    />
  );
}
