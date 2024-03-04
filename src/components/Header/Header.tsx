import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { ARR_LINKS } from "../../assets/data/constants";
import "./style/style.css";
import imgLogo from "../../assets/images/logo_EdSpace.svg";
import imgBracket from "./style/bracket.svg";
import { useState } from "react";

export const Header = () => {
    const [lang, setLang] = useState(false);

    const handleClick = () => {
        setLang(!lang);
    };

    const classBracket = `${lang && "rotated"}`;

    return (
        <header className="header">
            <NavLink to="/">
                <img src={imgLogo} alt="logo" className="header__logo" />
            </NavLink>
            <ul className="nav">
                {ARR_LINKS.map((val, idx) => (
                    <li key={idx}>
                        <HashLink to={val.path} className="nav__link">
                            {/* <HashLink to="/#price" className="nav__link"> */}
                            {val.name}
                        </HashLink>
                    </li>
                ))}
            </ul>
            <button className="header__lang" onClick={handleClick}>
                <span>RU</span>
                <img src={imgBracket} alt="bracket" className={classBracket} />
            </button>
        </header>
    );
};
