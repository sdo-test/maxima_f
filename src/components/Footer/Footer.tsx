import "./style/style.css";
import imgVk from "./images/vk.svg";
import imgTg from "./images/tg.svg";

export const Footer = () => {
    return (
        <footer className="footer">
            <span className="footer__rights">
                2022 Ed Space. Все права защищены
            </span>
            <div className="footer__socials">
                <img src={imgVk} alt="vk" />
                <img src={imgTg} alt="tg" />
            </div>
        </footer>
    );
};
