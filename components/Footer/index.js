import {Logo} from "@/components";
import clsx from "clsx";
import {Button, Form, IconButton, Input} from "@/tailwind";
import Image from "next/image";

const contacts = {
  email: 'customer@streamit.com',
  phone: '+91-897210121',
};

const socialAccounts = [
  {
    id: 'facebook',
    icon: 'facebook',
    link: 'https://facebook.com'
  },
  {
    id: 'instagram',
    icon: 'facebook',
    link: 'https://facebook.com'
  },
  {
    id: 'twitter',
    icon: 'facebook',
    link: 'https://facebook.com'
  },
  {
    id: 'google',
    icon: 'facebook',
    link: 'https://facebook.com'
  },
];

const classes = {
  fixedWidth: 'sm:w-3/5 sm:mx-auto',
  primary: 'bg-indigo-600 px-4 py-14 text-white',
  secondary: 'bg-teal-500 px-4 py-14 text-white',
  warning: 'bg-yellow-500 px-4 py-14 text-white',
  success: 'bg-green-500 px-4 py-14 text-white',
  error: 'bg-red-500 px-4 py-14 text-white',
  info: 'bg-cyan-500 px-4 py-14 text-white',
  dark: 'bg-slate-800 px-4 py-14 text-white'
}

export default function Footer({theme, fullWidth=true}) {
  return (
    <div className={clsx(classes[theme])}>
      <div className={clsx(!fullWidth && classes.fixedWidth, 'flex flex-col lg:flex-row gap-10 lg:gap-0 justify-between')}>
        <div>
          <Logo/>
          <div className="mt-8">
            <small>Email: <span className="font-medium">{contacts.email}</span></small>
            <p className="py-3 uppercase text-sm">customer services</p>
            <p className="font-bold">{contacts.phone}</p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-10">
          <div>
            <h3 className="mb-8 font-medium">Quick Links</h3>
            <ul className="text-sm flex flex-col gap-3">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Pricing Plan</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-8 font-medium">Movies</h3>
            <ul className="text-sm flex flex-col gap-3">
              <li><a href="#">Top Trending</a></li>
              <li><a href="#">Recommended</a></li>
              <li><a href="#">Popular</a></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-8 font-medium">About Company</h3>
            <ul className="text-sm flex flex-col gap-3">
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Use</a></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row lg:flex-col md:gap-8 lg:gap-0">
          <div>
            <h3 className="mb-8 font-medium">Subscribe Newsletter</h3>
            <Form>
              {(events) => {
                return (
                  <>
                    <Input name="email" placeholder="Email" className="p-2 px-4 text-sm border-0 rounded bg-slate-700" />
                    <div><Button className="text-sm uppercase px-4" theme="error">Subscribe</Button></div>
                  </>
                )
              }}
            </Form>
          </div>
          <div className="flex flex-row md:flex-col lg:flex-row items-center mt-8">
            <small>Follow Us:</small>
            <div>
              {
                socialAccounts && socialAccounts.map((social) => <IconButton key={social.id} theme="dark">{social.icon}</IconButton>)
              }
            </div>
          </div>
        </div>
      </div>
      <hr className={clsx(!fullWidth && classes.fixedWidth, 'my-10')} />
      <div className={clsx(!fullWidth && classes.fixedWidth, 'flex flex-col gap-10 lg:flex-row lg:gap-0 justify-between')}>
        <div className="flex flex-col lg:w-3/5">
          <ul className="inline-flex gap-5 text-sm mb-4">
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Watch List</a></li>
          </ul>
          <small>© 2023 STREAMIT. All Rights Reserved. All videos and shows on this platform are trademarks of, and all related images and content are the property of, Streamit Inc. Duplication and copy of this is strictly prohibited.</small>
        </div>
        <div className="flex flex-col items-center lg:items-start">
          <small>Downloads Steamit Apps</small>
          <div className="flex gap-5 mt-4">
            <Image src="/images/google-play.png"  alt="google-play" width={100} height={50} />
            <Image src="/images/apple.png"  alt="google-play" width={100} height={50} />
          </div>
        </div>
      </div>
    </div>
  )
}
