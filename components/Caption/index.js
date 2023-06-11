import clsx from "clsx";
import {Button, Icon} from "@/tailwind";
import Link from "next/link";

function GenreList({genres}) {
  return (
    <ul className="inline-flex list-disc gap-8 de">
      {genres.map(genre => <li key={genre.key}><small>{genre.title}</small></li>)}
    </ul>
  );
}

function Rating({rating, className}) {
  return (
    <div className="flex">
      {Array(rating).fill(0).map((item, index) => <Icon key={index} className={clsx(className)}>star</Icon>)}
      {Array(5 - rating).fill(0).map((item, index) => <Icon key={index} variant="outlined" className={clsx(className)}>star_outlined</Icon>)}
    </div>
  );
}

function CastList({casts}) {
  return (
    <div>
      <small className="text-red-400">Casts: </small>
      {
        casts.map(cast => <small key={cast.key}>{cast.name}, </small>)
      }
    </div>
  );
}

function ActionButton({action}) {
  return (
    <Button className="px-8 rounded-none" theme="error">
      <Link href={action} className="uppercase text-xs flex items-center gap-2">
        <span>stream now</span>
        <Icon>play_arrow</Icon>
      </Link>
    </Button>
  );
}

export default function Caption({caption}) {
  const {title, genres, description, rating, duration, casts, action} = caption;

  return (
    <div className={clsx('lg:w-3/5 flex flex-col h-full items-start justify-center px-10 sm:px-32 py-10 text-white gap-5')} style={{
      background: 'linear-gradient(to right, rgba(0, 0, 0, 0.9), transparent)'
    }}>
      {genres && <GenreList genres={genres} />}
      <h1 className="text-3xl md:text-6xl font-bold">{title}</h1>
      {description && <small>{description}</small>}
      <div className="flex flex-col sm:flex-row gap-5 sm:items-center">
        {rating && <Rating rating={rating} className="text-xl text-yellow-300" />}
        {duration && <small><span className="text-red-400">Duration: </span>{duration}</small>}
        {casts && <CastList casts={casts} />}
      </div>
      {action && <ActionButton action={action} />}
    </div>
  )
}
