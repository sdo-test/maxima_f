import { Benefits } from "../Benefits/Benefits";
import { ModalProps } from "../../types/types";
import { DetailsSchool } from "../DetailsSchool/DetailsSchool";
import { Suit } from "../Suit/Suit";
import "./style/style.css";
import suit_for from "./images/suit-for.svg";
import ball from "./images/ball.png";

export const Details = (props: ModalProps) => {
    const { openModal, modalLocked } = props;

    return (
        <section className="details">
            <div className="details__container">
                <a className="anchor" id="choice" />
                <h2 className="details__title details__title_main">
                    Выбирайте Ed Space сегодня и вы получите
                </h2>

                <Benefits />

                <DetailsSchool
                    modalLocked={modalLocked}
                    openModal={openModal}
                />

                <Suit />

                <img
                    src={suit_for}
                    alt="подходит для"
                    className="details__suit"
                />
            </div>
            <img src={ball} alt="ball" className="details__ball" />
        </section>
    );
};
