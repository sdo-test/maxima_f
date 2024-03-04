import { ModalProps } from "../../types/types";
import { ButtonTry } from "../ButtonTry/ButtonTry";
import "./style/style.css";

interface IntProps extends ModalProps {
    disableBtnClass?: boolean;
}

export const DetailsSchool = (props: IntProps) => {
    const { openModal, modalLocked, disableBtnClass } = props;

    return (
        <div>
            <a className="anchor" id="price" />
            <h2 className="school__title school__title_start">
                Запустите свою онлайн-школу
            </h2>
            <span className="school__desc">
                Или разверните корпоративный учебный
                <br />
                портал уже сегодня.
            </span>
            <h2 id="#price" className="school__title_1 school__title_colored">
                Цена 250 рублей за 1 ученика в месяц
            </h2>
            <h5 className="school__desc school__desc_mini">
                Все готово для запуска. Попробуйте
                <br />
                7-дневный демо-доступ.
            </h5>
            <ButtonTry
                className={disableBtnClass ? "" : "school__button-try"}
                disabled={modalLocked}
                openModal={openModal}
            />
        </div>
    );
};
