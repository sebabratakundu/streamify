import {animated, useSpring} from "@react-spring/web";
import {useRef} from "react";

export default function Zoom({children, show, ...rest}) {
  const defaultValue = show ? {transform: 'scale(1)', top: 0, left: 0} : {transform: 'scale(0)', top: 0, left: 0};
  const [springs, api] = useSpring(() => defaultValue);
  const isAlreadyMounted = useRef(false);
  const style = {...springs};

  if (show) {
    api.start({
      from: {transform: 'scale(0)'},
      to: {transform: 'scale(1)'}
    });
  } else {
    if (isAlreadyMounted) {
      api.start({
        from: {transform: 'scale(1)'},
        to: {transform: 'scale(0)'}
      });
    }
  }


  return (
    <animated.div style={style} {...rest}>{children}</animated.div>
  )
}
