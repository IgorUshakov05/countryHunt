'use client'
import { useState } from "react";
import Header from "./components/ux/header";
import CoustomInput from "./components/ux/input/input";
import CoustomLabel from "./components/ux/label/label";
import CoustomLink from "./components/ux/link/link";
import CoustomButton from "./components/ux/button/button";

export default function Home() {
  let [email, setEmail] = useState<string>('')
  const changeValue = (value:string) => {
    console.log(value);
    setEmail(value)
  };
  return (
    <>
      {/* <Header/> */}
      <h1>Ссылки</h1>
      <CoustomLink
        type="common"
        text="Текст"
        alt="Текст"
        href="https://example.com"
      />
      <CoustomLink
        type="active"
        text="Текст"
        alt="Текст"
        href="https://example.com"
      />
      <CoustomLink
        type="common"
        img="/craft.svg"
        text="Текст"
        alt="Текст"
        href="https://example.com"
      />
      <CoustomLink
        type="active"
        text="Присоедениться"
        img="/entry.svg"
        alt="Текст"
        href="https://example.com"
      />

      <h1>Поля ввода</h1>
      <CoustomInput value={email} onChange={changeValue} placeholder="Почта" type="email" />
      <h1>Label</h1>
      <CoustomLabel text="Специализация" />
      <h1>Кнопки</h1>
      <CoustomButton img="/logout.svg" type="active"/>
      <CoustomButton text="Выйти" img="/logout.svg" type="active"/>
      <CoustomButton text="Сбросить" img="/reset.svg" type="empty"/>

    </>
  );
}
