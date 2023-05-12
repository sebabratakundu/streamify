import Menu from "@/tailwind/Menu";
import clsx from "clsx";

const classes = {
  fixedWidth: 'sm:w-3/5 sm:mx-auto',
  fixed: 'fixed top-0 left-0 w-full',
  direction: {
    start: 'sm:justify-start sm:items-center items-start',
    center: 'sm:justify-center sm:items-center items-center',
    end: 'sm:justify-end sm:items-center items-center'
  },
  primary: {
    nav: 'bg-indigo-600 px-4 py-2 text-white',
    container: 'flex flex-col sm:flex-row gap-5 sm:gap-12',
  },
  secondary: {
    nav: 'bg-teal-500 px-4 py-2 text-white',
    container: 'flex items-center gap-12',
  },
  warning: {
    nav: 'bg-yellow-500 px-4 py-2 text-white',
    container: 'flex items-center gap-12',
  },
  success: {
    nav: 'bg-green-500 px-4 py-2 text-white',
    container: 'flex items-center gap-12',
  },
  error: {
    nav: 'bg-red-500 px-4 py-2 text-white',
    container: 'flex items-center gap-12',
  },
  info: {
    nav: 'bg-cyan-500 px-4 py-2 text-white',
    container: 'flex items-center gap-12',
  },
}

export default function Navbar({menu, brandName, theme='primary', fullWidth=true, direction='start', fixed=false, sticky=false}) {


  return (
    <nav className={clsx(classes[theme].nav, fixed && classes.fixed)}>
      <div className={clsx(classes.direction[direction], classes[theme].container, !fullWidth && classes.fixedWidth )}>
        <h1 className="font-semibold text-2xl">{brandName}</h1>
        <div className="flex flex-col sm:flex-row gap-2">
          <Menu menu={menu} color={theme} />
        </div>
      </div>
    </nav>
  )
}
