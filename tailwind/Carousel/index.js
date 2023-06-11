import {Icon} from "@/tailwind";
import {useState} from "react";
import {animated} from "@react-spring/web";
import clsx from "clsx";

const NEXT = 'next';
const PREV = 'prev';
const RESET = 'reset';
const LAST = 'last';
const MANUAL = 'manual';

export function CarouselItem({item, spring}) {
  console.log('re-render')

  return (
    <animated.div
      style={{
        width: '100%',
        height: '100%',
        backgroundImage: `url(${item.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        ...spring
      }}>
      {item?.caption && item.caption}
    </animated.div>
  )
}

export function Carousel({children, api, autoScroll, showLabel=true, showArrow=true, showDots=true, height=720}) {
  const [count, setCount] = useState(0);
  let move = 0;
  let label = `${(count + 1)}/${children.length}`;

  // useEffect(() => {
  //   let timeout;
  //
  //   if (autoScroll) {
  //     timeout = setTimeout(() => {
  //       handleNext();
  //     }, autoScroll)
  //   }
  //
  //   api.start({
  //     to: {x: `-${move}%`}
  //   });
  //
  //   return () => {
  //     if (timeout) {
  //       clearTimeout(timeout);
  //     }
  //   }
  // }, [api, move])

  function dispatch(type, payload = {}) {
    switch (type) {
      case NEXT:
        setCount(count + 1);
        move = 100 * (count + 1);
        break;
      case PREV:
        setCount(count - 1);
        move = 100 * (count - 1);
        break;
      case RESET:
        setCount(0);
        move = 0;
        break;
      case LAST:
        setCount(children.length - 1);
        move = 100 * (children.length - 1);
        break;
      case MANUAL:
        setCount(payload.count);
        move = payload.move;
        break;
    }

    api.start({
      to: {x: `-${move}%`}
    });
  }
  function handleNext() {
    if (count < children.length - 1) {
      dispatch(NEXT);
    } else {
      dispatch(RESET);
    }
  }

  function handlePrev() {
    if (count > 0) {
      dispatch(PREV);
    } else {
      dispatch(LAST);
    }
  }

  function handleDotClick(e) {
    const {value} = e.target;

    dispatch(MANUAL, {
      count: parseInt(value),
      move: 100 * parseInt(value),
    });
  }

  return (
    <div style={{height}} className="overflow-hidden relative">
      <div style={{width: `${children.length * 100}%`}} className="flex h-full">
        {children}
      </div>
      <div className="flex flex-col justify-between h-full absolute top-0 left-1">
        <label className="text-white">{showLabel && label}</label>
        {showArrow && <button type="button" onClick={handlePrev}><Icon className="text-white">keyboard_arrow_left</Icon></button>}
        <label></label>
      </div>
      <div className="flex flex-col justify-between h-full absolute top-0 right-1">
        <label></label>
        {showArrow && <button type="button" onClick={handleNext}><Icon className="text-white">keyboard_arrow_right</Icon></button>}
        <label></label>
      </div>
      {showDots && (
        <div className="w-full absolute bottom-0 left-0 p-2 flex justify-center">
          <div className="flex gap-3">
            {
              children &&
              Array(children.length).fill(0).map((item, i) =>
                <button
                  key={i}
                  type="button"
                  className={clsx('w-10 h-1', count === i ? 'bg-white opacity-100' : 'bg-gray-50 opacity-50')}
                  value={i}
                  onClick={handleDotClick}
                />
              )
            }
          </div>
        </div>
      )}
    </div>
  )
}
