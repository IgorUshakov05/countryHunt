import Link from "next/link";
import style from './link.module.css'
interface LinkProps {
  href: string;
  text: React.ReactNode;
  img?: string;
  alt?: string;
  type?: string;
}

function CoustomLink({ href, text, img, alt, type }: LinkProps) {
  return (
    <Link href={href} className={`${style.link} ${type === 'common' ? style.common : style.active}`}>
      {img && <img src={img} alt={alt} />}
      <span>{text}</span>
    </Link>
  );
}

export default CoustomLink;
