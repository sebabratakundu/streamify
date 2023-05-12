import {animated, useSpring} from "@react-spring/web";
import {useEffect, useRef} from "react";

export default function Flip({children, show, onClose, ...rest}) {
  const [springs, api] = useSpring(() => ({transform: show ? 'scaleX(1)' : 'scaleX(0)'}));
  const isAlreadyMounted = useRef(false);
  const style = {...springs};

  if (show) {
    api.start({
      from: {transform: 'scaleX(0)'},
      to: {transform: 'scaleX(1)'}
    });
  } else {
    if (isAlreadyMounted) {
      api.start({
        from: {transform: 'scaleX(1)'},
        to: {transform: 'scaleX(0)'}
      });
    }
  }

  return (
    <animated.div style={style} {...rest}>{children}</animated.div>
  )
}
