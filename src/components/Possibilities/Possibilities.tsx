import cards from "../../assets/data/possibilities.json";
import { PossibilityCard } from "../PossibilityCard/PossibilityCard";
import { ButtonTry } from "../ButtonTry/ButtonTry";
import { images } from "../../assets/images/images";
import "./style/style.css";
import { ModalProps } from "../../types/types";

export const Possibilities = (props: ModalProps) => {
    const { openModal, modalLocked } = props;

    return (
        <section className="possibilities">
            <a className="anchor" id="possibilities" />
            <h2 className="possibilities__title">Возможности Ed Space</h2>
            <h5 className="possibilities__desc">
                Поможем перенести корпоративную академию, базу знаний, учебные
                курсы,
                <br />
                настроим систему мотивации обучения, круглосуточная поддержка.
            </h5>
            <div className="possibilities__card-container">
                {cards.map((val, idx) => (
                    <PossibilityCard
                        key={idx}
                        img={images[val.img as keyof typeof images]}
                        title={val.title}
                        desc={val.desc}
                        desc_width={val.desc_width}
                        path={val.path}
                    />
                ))}
            </div>
            <div className="possibilities__circle-purple"></div>
            <div className="possibilities__circle-lightblue"></div>
            <ButtonTry
                openModal={openModal}
                disabled={modalLocked}
                className="possibilities__button-try"
            />
        </section>
    );
};
