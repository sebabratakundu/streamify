import Link from "next/link";
import {Button} from "@/tailwind";

export default function Menu({menu, color}) {
  return (
    <>{menu && menu.map(item => <Link href={item.link} key={item.id}><Button theme={color}>{item.title}</Button></Link>)}</>
  );
}
