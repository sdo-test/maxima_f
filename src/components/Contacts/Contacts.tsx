import "./style/style.css";
import imgLogo from "../../assets/images/logo_EdSpace.svg";
import { ContactsMenu } from "../ContactsMenu/ContactsMenu";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

const ARR_MENU = [
    {
        title: "Меню:",
        vars: [
            <HashLink className="menu__var" to="/#possibilities">
                Возможности
            </HashLink>,
            <HashLink className="menu__var" to="/#price">
                Стоимость
            </HashLink>,
            <HashLink className="menu__var" to="/#choice">
                Выбор Ed Space
            </HashLink>,
        ],
        marginRight: "69px",
    },
    {
        title: "Документы:",

        vars: [
            <a
                className="menu__var"
                href="https://ru.wikipedia.org/wiki/%D0%9F%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D1%81%D0%BA%D0%BE%D0%B5_%D1%81%D0%BE%D0%B3%D0%BB%D0%B0%D1%88%D0%B5%D0%BD%D0%B8%D0%B5"
                target="_blank"
            >
                Пользовательское соглашение
            </a>,
            <a
                className="menu__var"
                href="https://ru.wikipedia.org/wiki/%D0%9E%D1%84%D0%B5%D1%80%D1%82%D0%B0#%D0%9F%D1%83%D0%B1%D0%BB%D0%B8%D1%87%D0%BD%D0%B0%D1%8F_%D0%BE%D1%84%D0%B5%D1%80%D1%82%D0%B0"
                target="_blank"
            >
                Публичная оферта
            </a>,
        ],
        marginRight: "60px",
    },
    {
        title: "Контакты:",
        vars: [
            <a
                className="menu__var"
                href="https://admin@site.com"
                target="_blank"
            >
                admin@site.com
            </a>,
            <a className="menu__var" href="tel:+79001234567">
                +7 (900) 123-45-67
            </a>,
            <a className="menu__var" href="tel:+79998765432">
                +7 (999) 876-54-32
            </a>,
        ],
        marginRight: "60px",
    },
];

export const Contacts = () => {
    return (
        <section className="contacts">
            <a className="anchor" id="contacts" />
            <img src={imgLogo} alt="logo" className="contacts__logo" />
            {ARR_MENU.map((val, idx) => (
                <ContactsMenu
                    key={idx}
                    title={val.title}
                    vars={val.vars}
                    marginRight={val.marginRight}
                />
            ))}
        </section>
    );
};
