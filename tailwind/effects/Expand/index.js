import {animated, useSpring} from "@react-spring/web";
import {useRef} from "react";

export default function Expand({children, show, ...rest}) {
  const [springs, api] = useSpring(() => show ? {transform: 'scaleY(1)'} : {transform: 'scaleY(0)'});
  const isAlreadyMounted = useRef(false);
  const style = {...springs};

  if (show) {
    api.start({
      from: {transform: 'scaleY(0)'},
      to: {transform: 'scaleY(1)'}
    });
  } else {
    if (isAlreadyMounted) {
      api.start({
        from: {transform: 'scaleY(1)'},
        to: {transform: 'scaleY(0)'}
      });
    }
  }

  return (
    <animated.div style={style} {...rest}>{children}</animated.div>
  )
}
