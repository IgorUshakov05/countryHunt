import style from "./header.module.css";
import CoustomLink from "./link/link";
function Header() {
  return (
    <header className={style.header}>
      <a href="/">
        <img src="/logo_of_header.svg" alt="Логотип" />
      </a>
      <nav>
        <ul>
          <li>
            <CoustomLink
              href={"https//webhunt.ru"}
              text={"Работа"}
              img={"/craft.svg"}
              alt={"Работа"}
            />
          </li>
          <li>
          <CoustomLink
              href={"https//webhunt.ru"}
              text={"Специалисты"}
              img={"/builder.svg"}
              alt={"Специалисты"}
            />
          </li>
        </ul>
      </nav>
      {/* <LinkMy href={"/login"} children={'Присоедениться'}/> */}
    </header>
  );
}

export default Header;
