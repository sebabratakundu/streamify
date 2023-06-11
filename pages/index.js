import { Inter } from 'next/font/google'
import {BaseLayout, Caption} from "@/components";
import {Carousel, CarouselItem} from "@/tailwind";
import {useSprings} from "@react-spring/web";

const inter = Inter({ subsets: ['latin'] })

const images = [
  {
    id: 'hero-1',
    src: '/images/hero/hero1.jpg',
    caption: <Caption
      caption={{
        title: 'Sand Dust',
        description: 'The island, like its inhabitants, is wholly fictional. Kong\'s island home in the Pacific makes its first appearance, along with Kong himself, in the 1933 film King Kong.',
        genres: [
          {
            key: 'horror',
            title: 'Horror'
          },
          {
            key: 'adventure',
            title: 'Adventure'
          },
          {
            key: 'comedy',
            title: 'Comedy'
          },
        ],
        rating: 4,
        duration: '2hr 43min',
        casts: [
          {
            key: 'cupar',
            name: 'Cupar Peter'
          },
          {
            key: 'peter',
            name: 'Cupar Peter'
          },
          {
            key: 'david',
            name: 'Cupar Peter'
          },
        ],
        action: 'https://google.com'
      }}
    />
  },
  {
    id: 'hero-2',
    src: '/images/hero/hero2.jpg',
    caption: <Caption
      caption={{
        title: 'Ghost Couple',
        description: 'The island, like its inhabitants, is wholly fictional. Kong\'s island home in the Pacific makes its first appearance, along with Kong himself, in the 1933 film King Kong.',
        genres: [
          {
            key: 'horror',
            title: 'Horror'
          },
          {
            key: 'adventure',
            title: 'Adventure'
          },
          {
            key: 'comedy',
            title: 'Comedy'
          },
        ],
        rating: 3,
        duration: '1hr 30min',
        casts: [
          {
            key: 'cupar',
            name: 'Cupar Peter'
          },
          {
            key: 'peter',
            name: 'Cupar Peter'
          },
          {
            key: 'david',
            name: 'Cupar Peter'
          },
        ],
        action: 'https://google.com'
      }}
    />
  },
  {
    id: 'hero-3',
    src: '/images/hero/hero3.jpg',
    caption: <Caption
      caption={{
        title: 'Zombie Island',
        description: 'The island, like its inhabitants, is wholly fictional. Kong\'s island home in the Pacific makes its first appearance, along with Kong himself, in the 1933 film King Kong.',
        genres: [
          {
            key: 'horror',
            title: 'Horror'
          },
          {
            key: 'adventure',
            title: 'Adventure'
          },
          {
            key: 'comedy',
            title: 'Comedy'
          },
        ],
        rating: 5,
        duration: '1hr 00min',
        casts: [
          {
            key: 'cupar',
            name: 'Cupar Peter'
          },
          {
            key: 'peter',
            name: 'Cupar Peter'
          },
          {
            key: 'david',
            name: 'Cupar Peter'
          },
        ],
        action: 'https://google.com'
      }}
    />
  },
  {
    id: 'hero-4',
    src: '/images/hero/hero4.jpg',
    caption: <Caption
      caption={{
        title: 'Skull Island',
        description: 'The island, like its inhabitants, is wholly fictional. Kong\'s island home in the Pacific makes its first appearance, along with Kong himself, in the 1933 film King Kong.',
        genres: [
          {
            key: 'horror',
            title: 'Horror'
          },
          {
            key: 'adventure',
            title: 'Adventure'
          },
          {
            key: 'comedy',
            title: 'Comedy'
          },
        ],
        rating: 4,
        duration: '2hr 02min',
        casts: [
          {
            key: 'cupar',
            name: 'Cupar Peter'
          },
          {
            key: 'peter',
            name: 'Cupar Peter'
          },
          {
            key: 'david',
            name: 'Cupar Peter'
          },
        ],
        action: 'https://google.com'
      }}
    />
  },
  {
    id: 'hero-5',
    src: '/images/hero/hero5.jpg',
    caption: <Caption
      caption={{
        title: 'Mission Space',
        description: 'The island, like its inhabitants, is wholly fictional. Kong\'s island home in the Pacific makes its first appearance, along with Kong himself, in the 1933 film King Kong.',
        genres: [
          {
            key: 'horror',
            title: 'Horror'
          },
          {
            key: 'adventure',
            title: 'Adventure'
          },
          {
            key: 'comedy',
            title: 'Comedy'
          },
        ],
        rating: 3,
        duration: '2hr 43min',
        casts: [
          {
            key: 'cupar',
            name: 'Cupar Peter'
          },
          {
            key: 'peter',
            name: 'Cupar Peter'
          },
          {
            key: 'david',
            name: 'Cupar Peter'
          },
        ],
        action: 'https://google.com'
      }}
    />
  },
  {
    id: 'hero-6',
    src: '/images/hero/hero6.jpg',
    caption: <Caption
      caption={{
        title: 'Shadow',
        description: 'The island, like its inhabitants, is wholly fictional. Kong\'s island home in the Pacific makes its first appearance, along with Kong himself, in the 1933 film King Kong.',
        genres: [
          {
            key: 'horror',
            title: 'Horror'
          },
          {
            key: 'adventure',
            title: 'Adventure'
          },
          {
            key: 'comedy',
            title: 'Comedy'
          },
        ],
        rating: 5,
        duration: '1hr 19min',
        casts: [
          {
            key: 'cupar',
            name: 'Cupar Peter'
          },
          {
            key: 'peter',
            name: 'Cupar Peter'
          },
          {
            key: 'david',
            name: 'Cupar Peter'
          },
        ],
        action: 'https://google.com'
      }}
    />
  },
];

export default function Home() {
  const [springs, api] = useSprings(images.length, () => ({x: '0%'}));

    return (
      <BaseLayout>
        <Carousel height={500} api={api}>
          {images && images.map((item, i) => <CarouselItem key={item.id} item={item} spring={springs[i]} />)}
        </Carousel>
        Trending
      </BaseLayout>
  )
}
