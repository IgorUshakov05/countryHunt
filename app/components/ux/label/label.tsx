import style from './label.module.css'
interface InputProps {
  text: string;
}

function CoustomLabel({ text }: InputProps) {
  return (
    <label className={style.label}>{text}</label>
  );
}

export default CoustomLabel;
