import {IconButton, Navbar} from "@/tailwind";
import {Footer, Logo} from "@/components";

const menus = [
  {
    id: 1,
    link: 'home',
    title: 'Home'
  },
  {
    id: 2,
    link: 'movies',
    title: 'Movies'
  },
  {
    id: 3,
    link: 'videos',
    title: 'Videos'
  },
  {
    id: 4,
    link: 'blogs',
    title: 'Blogs'
  },
];

function Toolbar() {
  return (
    <div className="flex gap-3">
      <IconButton theme="dark">search</IconButton>
      <IconButton theme="dark">account_circle</IconButton>
    </div>
  );
}

function BaseLayout({children}) {
  return (
    <>
      <Navbar menu={menus} brandName={<Logo />} theme="dark" direction="between" fullWidth={false} toolbar={<Toolbar/>} className="text-sm opacity-95" />
      {children}
      <Footer theme="dark" fullWidth={false} />
    </>
  )
}

export {
  BaseLayout
}
