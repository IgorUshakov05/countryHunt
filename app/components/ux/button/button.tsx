import style from './button.module.css'
interface LinkProps {
  text?: React.ReactNode;
  img?: string;
  alt?: string;
  type?: string;
}

function CoustomButton({  text, img, alt, type }: LinkProps) {
  return (
    <button className={`${style.button} ${type === 'common' ? style.common : style.active} ${type==='empty'?style.empty:''} ${!text?style.none:''}`}>
      {img && <img src={img} alt={alt} />}
      {text&&<span>{text}</span>}
    </button>
  );
}

export default CoustomButton;
