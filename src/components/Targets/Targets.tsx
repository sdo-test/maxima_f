import { ButtonTry } from "../ButtonTry/ButtonTry";
import { TargetBlock } from "../TargetBlock/TargetBlock";
import "./style/style.css";
import target1 from "./images/target1.svg";
import target2 from "./images/target2.svg";
import { ModalProps } from "../../types/types";

const ARR_TARGETS = [
    {
        img: target1,
        title: "Организации онлайн-курсов",
        desc: (
            <span>
                Cоздайте свою программу обучения
                <br />с нуля, самостоятельно управляйте
                <br />
                учебным процессом в несколько кликов,
                <br />
                круглосуточная поддержка.
            </span>
        ),
        gap: "31.42px",
        gap_text: "24px",
        // width: "254px",
    },
    {
        img: target2,
        title: (
            <span>
                Создания корпоративного
                <br />
                обучения
            </span>
        ),
        desc: (
            <span>
                Поможем перенести корпоративную
                <br />
                академию, базу знаний, учебные курсы,
                <br />
                настроим систему мотивации обучения,
                <br />
                круглосуточная поддержка.
            </span>
        ),
        gap: "25.52px",
        gap_text: "14px",
        // width: "281px",
    },
];

export const Targets = (props: ModalProps) => {
    const { openModal, modalLocked } = props;

    return (
        <section className="targets">
            <div className="targets__title">Точно подойдет для:</div>
            <div className="targets__items">
                {ARR_TARGETS.map((val, idx) => (
                    <TargetBlock
                        key={idx}
                        img={val.img}
                        title={val.title}
                        desc={val.desc}
                        gap={val.gap}
                        gap_text={val.gap_text}
                    />
                ))}
            </div>
            <div className="target__try">
                <ButtonTry openModal={openModal} disabled={modalLocked} />
            </div>
        </section>
    );
};
