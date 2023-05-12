import {animated, useSpring} from "@react-spring/web";
import {useRef} from "react";

export default function Fade({children, show, ...rest}) {
  const [springs, api] = useSpring(() => show ? {opacity: 1} : {opacity: 0})
  const isAlreadyMounted = useRef(false);
  const style = {...springs};

  if (show) {
    api.start({
      from: {opacity: 0},
      to: {opacity: 1}
    });
  } else {
    if (isAlreadyMounted) {
      api.start({
        from: {opacity: 1},
        to: {opacity: 0}
      });
    }
  }

  return (
    <animated.div style={style} {...rest}>{children}</animated.div>
  )
}
