import { useState } from "react";
import style from "./input.module.css";
interface InputProps {
  placeholder: string;
  type: string;
  value: string;
  onChange: (value: string) => void; 
}
function CoustomInput({ placeholder, type, value, onChange }: InputProps) {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <input
      type={type}
      value={value}
      onChange={handleInputChange}
      className={`${style.input} ${type === "number" ? style.number : ""}`}
      placeholder={placeholder}
    />
  );
}

export default CoustomInput;
