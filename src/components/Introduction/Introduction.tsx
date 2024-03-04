import { ButtonTry } from "../ButtonTry/ButtonTry";
import imgIntro from "./images/intro.svg";
import { ModalProps } from "../../types/types";
import "./style/style.css";

interface IntProps {
    modalProps: ModalProps;
    title?: string;
    desc?: string;
    img?: string;
    colorBg?: boolean;
}

export const Introduction = (props: IntProps) => {
    const { modalProps, title, desc, img, colorBg } = props;
    const { openModal, modalLocked } = modalProps;

    const finalTitle = title || (
        <span>
            Ed Space
            <br />
            Ваши знания и экспертность обретут здесь форму
        </span>
    );

    const finalDesc =
        desc ||
        "Мощный инструмент для организации обучения. Ваши ученикибудут в восторге!";

    const finalDescCLass = `content__desc ${desc && "content__desc_aligned"}`;

    const finalImg = img || imgIntro;

    const finalImgClass = `introduction__img ${img && "introduction__img_ext"} ${colorBg && "introduction__img_colored"}`;

    return (
        <section className="introduction">
            <div className="introduction__content">
                <div className="content__title">{finalTitle}</div>
                <div className={finalDescCLass}>{finalDesc}</div>
            </div>
            <div className="introduction__circle"></div>
            <ButtonTry openModal={openModal} disabled={modalLocked} />
            <img className={finalImgClass} src={finalImg} alt="intro" />
        </section>
    );
};
